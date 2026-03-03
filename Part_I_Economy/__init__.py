from otree.api import *
import random
from common import *
from common import compute_pie_share, CommonConstants as CC

doc = '''
Part I Economy: Main game.
4 rounds, each containing 3 stages:
  1. Intelligence test (3 parts: Ravens, Analogies, Math — timed)
  2. Visual feedback (pie charts: effort share vs payoff share)
  3. Public goods game (contribute/withdraw tokens from common pool)
'''


class C(CommonConstants):
    NAME_IN_URL = 'Part_I'
    PLAYERS_PER_GROUP = 3       # real groups of 3 matched in Practice WaitPage
    NUM_ROUNDS = 4

    Instructions_general_path = "_templates/global/Instructions.html"
    Instructions_practice_1 = "_templates/global/Instructions_Practice_1.html"
    Part_II_Instructions_template = "_templates/global/Part_II_Instructions_template.html"
    RavensQuiz_template_path = "_templates/global/RavensQuiz.html"
    AnalogyQuiz_template_path = "_templates/global/AnalogyQuiz.html"
    MathQuiz_template_path = "_templates/global/MathQuiz.html"
    Interstitial_template_path = "_templates/global/Interstitial.html"

    Round_length = 60          # seconds (oTree timeout_seconds)
    Timer_text = "Time left to complete this part:"


class Subsession(BaseSubsession):
    pass


# creating_session intentionally left empty: group formation happens at
# runtime in Grouping_WaitPage (round 1 only), after participant.group_id
# has been set by Practice's Grouping_WaitPage.


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    # ── Ravens Matrix scores & answers (one pair per round) ──────────────────
    Raven_score_1 = models.IntegerField(initial=0)
    Raven_answers_1 = models.LongStringField(initial='{}')
    Raven_score_2 = models.IntegerField(initial=0)
    Raven_answers_2 = models.LongStringField(initial='{}')
    Raven_score_3 = models.IntegerField(initial=0)
    Raven_answers_3 = models.LongStringField(initial='{}')
    Raven_score_4 = models.IntegerField(initial=0)
    Raven_answers_4 = models.LongStringField(initial='{}')

    # ── Analogy scores & answers ─────────────────────────────────────────────
    Analogy_score_1 = models.IntegerField(initial=0)
    Analogy_answers_1 = models.LongStringField(initial='{}')
    Analogy_score_2 = models.IntegerField(initial=0)
    Analogy_answers_2 = models.LongStringField(initial='{}')
    Analogy_score_3 = models.IntegerField(initial=0)
    Analogy_answers_3 = models.LongStringField(initial='{}')
    Analogy_score_4 = models.IntegerField(initial=0)
    Analogy_answers_4 = models.LongStringField(initial='{}')

    # ── Math scores & answers ────────────────────────────────────────────────
    Math_score_1 = models.IntegerField(initial=0)
    Math_answers_1 = models.LongStringField(initial='{}')
    Math_score_2 = models.IntegerField(initial=0)
    Math_answers_2 = models.LongStringField(initial='{}')
    Math_score_3 = models.IntegerField(initial=0)
    Math_answers_3 = models.LongStringField(initial='{}')
    Math_score_4 = models.IntegerField(initial=0)
    Math_answers_4 = models.LongStringField(initial='{}')

    # ── Round total scores (sum of Raven + Analogy + Math) ───────────────────
    Round_score_1 = models.IntegerField(initial=0)
    Round_score_2 = models.IntegerField(initial=0)
    Round_score_3 = models.IntegerField(initial=0)
    Round_score_4 = models.IntegerField(initial=0)

    # ── Pie payoffs (ECs earned from Economy_pie each round) ─────────────
    Pie_payoff_1 = models.FloatField(initial=0)
    Pie_payoff_2 = models.FloatField(initial=0)
    Pie_payoff_3 = models.FloatField(initial=0)
    Pie_payoff_4 = models.FloatField(initial=0)

    # ── Public goods game: contribution per round ────────────────────
    PGG_contribution_1 = models.IntegerField(initial=0)
    PGG_contribution_2 = models.IntegerField(initial=0)
    PGG_contribution_3 = models.IntegerField(initial=0)
    PGG_contribution_4 = models.IntegerField(initial=0)
    
    
    'Comprehension and attention checks'
    #whether the player got the comprehension questions rigt at the first try
    Comprehension_1 = models.BooleanField(initial=True) 
    #In the first comprehension check, the questions the player has answered wrong are stored as a string below.
    Comprehension_wrong_answers = models.StringField(initial='') 
    Comprehension_2 = models.BooleanField(initial=True) 
    
    Comprehension_question_1 = models.BooleanField(choices=[
        [True,'The higher is my score compared to the scores of the other two, the higher is my share of the pie.'], # Correct answer here
        [False, 'My share of 500 ECs is determined by my score alone, regardless of the scores of the other two.'],
        [False, 'My share of the 500 ECs is determined by the sum of everones\' scores.'],],
    label = '[Competition stage] How does the competition over 500 ECs work?',
    widget=widgets.RadioSelect)
    
    Comprehension_question_2 = models.BooleanField(choices=[
            [True,'The total ECs earned by the group is maximized when all players contribute 100 ECs.'], # Correct answer here
            [False, 'The total ECs earned by the group is maximized when all players contribute 0 ECs.'],
            [False, 'The total ECs earned by the group is maximized when all players contribute 50 ECs.'],],
        label = '[Cooperation stage] What maximizes the total ECs earned <strong>by the group</strong> in the cooperation stage?',
        widget=widgets.RadioSelect)
    Comprehension_question_3 = models.BooleanField(choices=[
            [True,'The total ECs earned by me is maximized when I contribute 0 ECs and others contribute 100.'], # Correct answer here
            [False, 'The total ECs earned by me is maximized when I contribute 100 ECs and others contribute 0.'],
            [False, 'The total ECs earned by me is maximized when I contribute 50 ECs and others contribute 50.'],],
        label = '[Cooperation stage] What maximizes the total ECs earned <strong>by you</strong> in the cooperation stage?',
        widget=widgets.RadioSelect)


# ── Helpers ────────────────────────────────────────────────────────────────────────────
def _round_field(base, round_number):
    return f'{base}_{round_number}'


def _compute_round_sum(player, round_number):
    """Sum the 3 sub-scores and store in Round_score_N."""
    raven   = getattr(player, _round_field('Raven_score', round_number))
    analogy = getattr(player, _round_field('Analogy_score', round_number))
    math    = getattr(player, _round_field('Math_score', round_number))
    total = raven + analogy + math
    setattr(player, _round_field('Round_score', round_number), total)
    return total


def _get_group_data(player, round_number):
    """Return (group_scores, group_multipliers) for all members of this player's group."""
    group_members = player.group.get_players()
    scores = [getattr(p, _round_field('Round_score', round_number)) for p in group_members]
    multipliers = [p.participant.multiplier for p in group_members]
    return scores, multipliers


def _compute_and_store_payoff(player, round_number):
    """Compute pie payoff for this player this round and store it."""
    scores, multipliers = _get_group_data(player, round_number)
    player_score = getattr(player, _round_field('Round_score', round_number))
    player_mult  = player.participant.multiplier
    treatment    = player.participant.Treatment

    payoff, _, _ = compute_pie_share(
        player_score, player_mult,
        scores, multipliers,
        treatment,
        welfare_check=C.Welfare_check,
        economy_pie=C.Economy_pie,
    )
    setattr(player, _round_field('Pie_payoff', round_number), payoff)
    return payoff


def _effort_shares(player, round_number):
    """Return (player_weighted_score, others_total_weighted_score) for effort pie chart."""
    scores, multipliers = _get_group_data(player, round_number)
    player_score = getattr(player, _round_field('Round_score', round_number))
    player_mult  = player.participant.multiplier
    treatment    = player.participant.Treatment

    _, player_w, total_w = compute_pie_share(
        player_score, player_mult,
        scores, multipliers,
        treatment,
        welfare_check=C.Welfare_check,
        economy_pie=C.Economy_pie,
    )
    others_w = total_w - player_w
    return player_w, others_w


def _accumulated_payoff_shares(player, up_to_round):
    """Return (player_accumulated, others_accumulated) across rounds 1..up_to_round."""
    player_total = sum(
        getattr(player, _round_field('Pie_payoff', r)) for r in range(1, up_to_round + 1)
    )
    group_members = player.group.get_players()
    others_total = sum(
        sum(getattr(p, _round_field('Pie_payoff', r)) for r in range(1, up_to_round + 1))
        for p in group_members if p.id_in_group != player.id_in_group
    )
    return player_total, others_total


def _instruction_vars(player):
    """Return the vars required by Part_II_Instructions_template.html.
    Shared by Part_II_Instructions, Comprehension_check_1/2/3 so the included
    template always has explanation, show_multiplier, multiplier, welfare_bonus_text."""
    treatment  = player.participant.Treatment
    multiplier = player.participant.multiplier
    explanation_map = {
        'Perfect_Meritocracy':   C.Explanation_Perfect_Meritocracy,
        'Excessive_Meritocracy': C.Explanation_Excessive_Meritocracy,
        'Welfare_State':         C.Explanation_Welfare_State,
        'Aristocracy':           C.Explanation_Aristocracy,
    }
    return {
        'explanation':        explanation_map.get(treatment, ''),
        'show_multiplier':    treatment in ('Excessive_Meritocracy', 'Aristocracy'),
        'multiplier':         multiplier,
        'welfare_bonus_text': C.Welfare_check_text if treatment == 'Welfare_State' else '',
    }


# ── Base pages ─────────────────────────────────────────────────────────────────────────
from common import MyBasePage


# ── Group formation WaitPage (round 1 only) ────────────────────────────────────────
class Grouping_WaitPage(WaitPage):
    """
    Runs at the very start of Part_I_Economy, round 1 only.
    Reads participant.group_id (set by Practice's Grouping_WaitPage) and
    calls set_group_matrix so oTree knows which players belong together.
    Rounds 2-4 reuse the same grouping via group_like_round(1).
    """
    wait_for_all_groups = True

    @staticmethod
    def is_displayed(player: Player):
        return player.round_number == 1

    @staticmethod
    def after_all_players_arrive(subsession: Subsession):
        if subsession.round_number == 1:
            players = subsession.get_players()
            group_map = {}
            for p in players:
                gid = getattr(p.participant, 'group_id', None)
                if gid is None:
                    continue
                group_map.setdefault(gid, []).append(p)
            matrix = list(group_map.values())
            subsession.set_group_matrix(matrix)
        else:
            subsession.group_like_round(1)


# ── Round WaitPage (sync scores before feedback) ─────────────────────────────────
class Round_WaitPage(WaitPage):
    """
    Wait for all group members to finish all 3 quiz parts before anyone
    advances to Round_Feedback. Ensures every Round_score_r and Pie_payoff_r
    is stored before the charts try to read teammates' values.
    """
    @staticmethod
    def after_all_players_arrive(group: Group):
        pass   # payoffs already stored in before_next_page of Round_Math


# ── Part II intro (round 1 only) ───────────────────────────────────────────────────
class Part_II_Instructions(MyBasePage):
    """Full instructions page shown once, before the 4 rounds begin."""

    @staticmethod
    def is_displayed(player: Player):
        return player.round_number == 1

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        treatment   = player.participant.Treatment
        multiplier  = player.participant.multiplier
        role        = player.participant.role

        # Pick the right explanation text
        explanation_map = {
            'Perfect_Meritocracy':   C.Explanation_Perfect_Meritocracy,
            'Excessive_Meritocracy': C.Explanation_Excessive_Meritocracy,
            'Welfare_State':         C.Explanation_Welfare_State,
            'Aristocracy':           C.Explanation_Aristocracy,
        }
        explanation = explanation_map.get(treatment, '')

        # Show multiplier only where it's individually relevant
        show_multiplier = treatment in ('Excessive_Meritocracy', 'Aristocracy')

        variables['Treatment']       = treatment
        variables['multiplier']      = multiplier
        variables['role']            = role
        variables['explanation']     = explanation
        variables['show_multiplier'] = show_multiplier
        variables['welfare_bonus_text'] = C.Welfare_check_text if treatment == 'Welfare_State' else ''
        return variables


# ── Stage 0: Round instructions ─────────────────────────────────────────────────────
class Round_Instructions(MyBasePage):
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['round_number'] = player.round_number
        variables['Treatment']    = player.participant.Treatment
        return variables


# ── Stage 1a: Ravens Matrix ──────────────────────────────────────────────────────────
class Round_RavensMatrix(MyBasePage):
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text

    @staticmethod
    def get_form_fields(player):
        r = player.round_number
        return [_round_field('Raven_score', r), _round_field('Raven_answers', r)]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number
        variables['hidden_fields'] = [_round_field('Raven_score', r), _round_field('Raven_answers', r)]
        variables['round_number']  = r
        variables['Treatment']     = player.participant.Treatment
        return variables

    @staticmethod
    def js_vars(player: Player):
        r = player.round_number
        return {
            'score_field':      _round_field('Raven_score', r),
            'answers_field':    _round_field('Raven_answers', r),
            'participant_code': player.participant.code,
            'puzzle_set':       r + 2,   # sets 1-2 used in Practice
        }


# ── Interstitial: Analogies ──────────────────────────────────────────────────────────
class Interstitial_Analogy(MyBasePage):
    timeout_seconds = C.Interstitial_length

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['completed_part_name'] = 'Matrix Reasoning'
        variables['next_part_name'] = 'Analogies'
        variables['interstitial_seconds'] = C.Interstitial_length
        return variables


# ── Stage 1b: Analogies ─────────────────────────────────────────────────────────────
class Round_Analogies(MyBasePage):
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text

    @staticmethod
    def get_form_fields(player):
        r = player.round_number
        return [_round_field('Analogy_score', r), _round_field('Analogy_answers', r)]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number
        variables['hidden_fields'] = [_round_field('Analogy_score', r), _round_field('Analogy_answers', r)]
        variables['round_number']  = r
        variables['Treatment']     = player.participant.Treatment
        return variables

    @staticmethod
    def js_vars(player: Player):
        r = player.round_number
        return {
            'analogy_score_field':   _round_field('Analogy_score', r),
            'analogy_answers_field': _round_field('Analogy_answers', r),
            'participant_code':      player.participant.code,
            'analogy_set':           r + 2,   # sets 1-2 used in Practice
        }


# ── Interstitial: Math ───────────────────────────────────────────────────────────────
class Interstitial_Math(MyBasePage):
    timeout_seconds = C.Interstitial_length

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['completed_part_name'] = 'Analogies'
        variables['next_part_name'] = 'Mathematics'
        variables['interstitial_seconds'] = C.Interstitial_length
        return variables


# ── Stage 1c: Math ───────────────────────────────────────────────────────────────────
class Round_Math(MyBasePage):
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text

    @staticmethod
    def get_form_fields(player):
        r = player.round_number
        return [_round_field('Math_score', r), _round_field('Math_answers', r)]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number
        variables['hidden_fields'] = [_round_field('Math_score', r), _round_field('Math_answers', r)]
        variables['round_number']  = r
        variables['Treatment']     = player.participant.Treatment
        return variables

    @staticmethod
    def js_vars(player: Player):
        r = player.round_number
        return {
            'math_score_field':   _round_field('Math_score', r),
            'math_answers_field': _round_field('Math_answers', r),
            'participant_code':   player.participant.code,
            'math_set':           r + 2,   # sets 1-2 used in Practice
        }

    @staticmethod
    def before_next_page(player: Player, timeout_happened=False):
        """Compute round sum and pie payoff after all 3 parts are done."""
        r = player.round_number
        _compute_round_sum(player, r)
        _compute_and_store_payoff(player, r)


# ── Stage 2: Visual Feedback ───────────────────────────────────────────────────────
class Round_Feedback(MyBasePage):
    """Two pie charts: current-round effort share, current-round payoff share."""

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number

        effort_share, effort_others = _effort_shares(player, r)
        payoff_share  = getattr(player, _round_field('Pie_payoff', r))
        payoff_others = sum(
            getattr(p, _round_field('Pie_payoff', r))
            for p in player.group.get_players()
            if p.id_in_group != player.id_in_group
        )

        variables['round_number']   = r
        variables['effort_share']   = round(effort_share, 2)
        variables['effort_others']  = round(effort_others, 2)
        variables['payoff_share']   = round(payoff_share, 2)
        variables['payoff_others']  = round(payoff_others, 2)
        variables['Treatment']      = player.participant.Treatment
        return variables


# ── Stage 3: Public Goods Game ─────────────────────────────────────────────────────
class Round_PublicGoods(MyBasePage):
    """Slider to decide how many tokens to place in the common pool.
       Pie charts show: current-round effort share, accumulated payoff share."""

    @staticmethod
    def get_form_fields(player):
        return [_round_field('PGG_contribution', player.round_number)]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number

        # Slider bounds: use the pie payoff (ECs earned this round) as the token budget
        tokens_earned = round(getattr(player, _round_field('Pie_payoff', r)))
        pgg_max       = tokens_earned + C.PGG_Commons
        pgg_default   = C.PGG_Commons

        # Effort: current round
        effort_share, effort_others = _effort_shares(player, r)

        # Payoff: accumulated across all completed rounds (1..r)
        payoff_share, payoff_others = _accumulated_payoff_shares(player, r)

        variables['round_number']       = r
        variables['PGG_Commons']        = C.PGG_Commons
        variables['pgg_max']            = pgg_max
        variables['pgg_default']        = pgg_default
        variables['tokens_earned']      = tokens_earned
        variables['contribution_field'] = _round_field('PGG_contribution', r)
        variables['hidden_fields']      = [_round_field('PGG_contribution', r)]
        variables['Treatment']          = player.participant.Treatment
        variables['effort_share']       = round(effort_share, 2)
        variables['effort_others']      = round(effort_others, 2)
        variables['payoff_share']       = round(payoff_share, 2)
        variables['payoff_others']      = round(payoff_others, 2)
        return variables



# ── Comprehension question pages (visible only first round) ────────────────────────────────────────────────────────────────────────────

            
class Comprehension_check_1(MyBasePage):
    extra_fields = ['Comprehension_question_1', 'Comprehension_question_2', 'Comprehension_question_3']
    form_fields = MyBasePage.form_fields + extra_fields

    @staticmethod
    def is_displayed(player: Player):
        return player.round_number == 1

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables.update(_instruction_vars(player))   # needed to render Part_II modal
        return variables

    @staticmethod
    def before_next_page(player: Player, timeout_happened=False):
        player_passed_comprehension = (player.Comprehension_question_1 and
                                       player.Comprehension_question_2 and
                                       player.Comprehension_question_3)
        wrong_answers = ''
        if not player.Comprehension_question_1:
            player.Comprehension_question_1 = None   # reset so it doesn't pre-fill check_2
            wrong_answers += 'first question'
        if not player.Comprehension_question_2:
            if wrong_answers: wrong_answers += ', '
            player.Comprehension_question_2 = None
            wrong_answers += 'second question'
        if not player.Comprehension_question_3:
            if wrong_answers: wrong_answers += ', '
            player.Comprehension_question_3 = None
            wrong_answers += 'third question'

        player.Comprehension_wrong_answers = wrong_answers
        player.Comprehension_1 = player_passed_comprehension
        if player_passed_comprehension:
            player.participant.vars['Comprehension_passed'] = True


class Comprehension_check_2(MyBasePage):
    extra_fields = ['Comprehension_question_1', 'Comprehension_question_2', 'Comprehension_question_3']
    form_fields = MyBasePage.form_fields + extra_fields

    @staticmethod
    def is_displayed(player: Player):
        return not player.Comprehension_1 and player.round_number == 1

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['Comprehension_wrong_answers'] = player.Comprehension_wrong_answers
        variables.update(_instruction_vars(player))   # needed to render Part_II modal
        return variables

    @staticmethod
    def before_next_page(player: Player, timeout_happened=False):
        player_passed_comprehension = (player.Comprehension_question_1 and
                                       player.Comprehension_question_2 and
                                       player.Comprehension_question_3)
        # Rebuild wrong-answers string from attempt 2 so check_3 shows current failures
        wrong_answers = ''
        if not player.Comprehension_question_1:
            wrong_answers += 'first question'
        if not player.Comprehension_question_2:
            if wrong_answers: wrong_answers += ', '
            wrong_answers += 'second question'
        if not player.Comprehension_question_3:
            if wrong_answers: wrong_answers += ', '
            wrong_answers += 'third question'
        player.Comprehension_wrong_answers = wrong_answers

        player.Comprehension_2 = player_passed_comprehension
        if player_passed_comprehension:
            player.participant.vars['Comprehension_passed'] = True
        else:
            player.participant.vars['Comprehension_passed'] = False


class Comprehension_check_3(MyBasePage):
    """Shown only when player has failed BOTH check_1 and check_2.
    No form — just displays correct answers and lets them proceed."""
    extra_fields = []
    form_fields = MyBasePage.form_fields + extra_fields

    @staticmethod
    def is_displayed(player: Player):
        # Requires BOTH attempts to have been failed
        return (not player.Comprehension_1 and
                not player.Comprehension_2 and
                player.round_number == 1)

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        # Wrong answers from most recent attempt (updated by check_2.before_next_page)
        variables['Comprehension_wrong_answers'] = player.Comprehension_wrong_answers
        variables.update(_instruction_vars(player))   # needed to render Part_II modal
        return variables

    # No before_next_page needed: Comprehension_2 and Comprehension_passed were
    # already set correctly by Comprehension_check_2.before_next_page.
            



# ── Page sequence ────────────────────────────────────────────────────────────────────────────
page_sequence = [
    Grouping_WaitPage,      # round 1 only: form oTree groups from participant.group_id
    Part_II_Instructions,   # round 1 only: show treatment explanation + multiplier
    Comprehension_check_1,   # round 1 only: first attempt at comprehension check (3 questions)
    Comprehension_check_2,   # round 1 only: second attempt at comprehension check (if first attempt failed)
    Comprehension_check_3,   # round 1 only: final page if comprehension check failed twice (no more attempts)
    Round_Instructions,
    # Intelligence test: 3 parts
    Round_RavensMatrix,
    Interstitial_Analogy,
    Round_Analogies,
    Interstitial_Math,
    Round_Math,
    # Sync and feedback
    Round_WaitPage,         # sync: wait for all group members' scores before feedback
    Round_Feedback,
    Round_PublicGoods,
]
