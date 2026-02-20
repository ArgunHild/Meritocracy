from otree.api import *
import random
from common import *

doc = '''
Part II: Main game.
4 rounds, each containing 3 stages:
  1. RavensMatrix intelligence test (timed)
  2. Visual feedback (pie charts: effort share vs payoff share)
  3. Public goods game (contribute/withdraw tokens from common pool)
'''


class C(CommonConstants):
    NAME_IN_URL = 'Part_I'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 4

    Instructions_general_path = "_templates/global/Instructions.html"
    Instructions_practice_1 = "_templates/global/Instructions_Practice_1.html"
    RavensQuiz_template_path = "_templates/global/RavensQuiz.html"

    Round_length = 12000       # milliseconds for the Ravens Matrix timer
    Timer_text = "Time left to complete this round:"

    # Public goods game: starting tokens already in the PGG_Commons pool
    PGG_Commons = 100              # default starting value in the pool


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    # ── Ravens Matrix scores & answers (one pair per round) ──────────────
    Ravens_score_1 = models.IntegerField(initial=0)
    Ravens_answers_1 = models.LongStringField(initial='{}')

    Ravens_score_2 = models.IntegerField(initial=0)
    Ravens_answers_2 = models.LongStringField(initial='{}')

    Ravens_score_3 = models.IntegerField(initial=0)
    Ravens_answers_3 = models.LongStringField(initial='{}')

    Ravens_score_4 = models.IntegerField(initial=0)
    Ravens_answers_4 = models.LongStringField(initial='{}')

    # ── Public goods game: contribution per round ────────────────────────
    # Range: 0 .. (ravens_score * Practice_ECs + PGG_Commons).
    # Default: PGG_Commons.  Set via slider in the template.
    PGG_contribution_1 = models.IntegerField(initial=0)
    PGG_contribution_2 = models.IntegerField(initial=0)
    PGG_contribution_3 = models.IntegerField(initial=0)
    PGG_contribution_4 = models.IntegerField(initial=0)



# ── Helper ────────────────────────────────────────────────────────────────────
def _round_field(base, round_number):
    """Return the player field name for a given round, e.g. 'Ravens_score_1'."""
    return f'{base}_{round_number}'


# ── Base pages ────────────────────────────────────────────────────────────────
from common import MyBasePage


# ── Part II intro (round 1 only) ─────────────────────────────────────────────
class Part_II_Instructions(MyBasePage):
    """Full instructions page shown once, before the 4 rounds begin."""

    @staticmethod
    def is_displayed(player: Player):
        return player.round_number == 1

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['Treatment'] = player.participant.Treatment
        return variables


# ── Stage 1: Ravens Matrix ────────────────────────────────────────────────────
class Round_Instructions(MyBasePage):
    """Brief intro shown at the start of each round."""

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        variables['round_number'] = player.round_number
        variables['Treatment'] = player.participant.Treatment
        return variables


class Round_RavensMatrix(MyBasePage):
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text

    @staticmethod
    def get_form_fields(player):
        r = player.round_number
        score_field = _round_field('Ravens_score', r)
        answers_field = _round_field('Ravens_answers', r)
        return [score_field, answers_field]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number
        score_field = _round_field('Ravens_score', r)
        answers_field = _round_field('Ravens_answers', r)
        variables['hidden_fields'] = [score_field, answers_field]
        variables['round_number'] = r
        variables['Treatment'] = player.participant.Treatment
        return variables

    @staticmethod
    def js_vars(player: Player):
        r = player.round_number
        return {
            'score_field': _round_field('Ravens_score', r),
            'answers_field': _round_field('Ravens_answers', r),
            'participant_code': player.participant.code,
            # puzzle sets 3–6 (sets 1-2 used in Practice); wrap with modulo if needed
            'puzzle_set': r + 2,
        }


# ── Stage 2: Visual Feedback (pie charts) ────────────────────────────────────
class Round_Feedback(MyBasePage):
    """Show two pie charts: relative effort share and relative payoff share."""

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number

        # Placeholder values — replace with real calculation when group logic is added
        player_score = getattr(player, _round_field('Ravens_score', r))
        # effort share: this player's score as fraction of a placeholder total
        # (boilerplate: total = player_score so share = 100%; update when group data available)
        effort_share = player_score
        effort_others = 0  # placeholder

        # payoff share: placeholder, will depend on PGG outcome
        payoff_share = C.PGG_Commons
        payoff_others = 0  # placeholder

        variables['round_number'] = r
        variables['effort_share'] = effort_share
        variables['effort_others'] = effort_others
        variables['payoff_share'] = payoff_share
        variables['payoff_others'] = payoff_others
        variables['Treatment'] = player.participant.Treatment
        return variables


# ── Stage 3: Public Goods Game ────────────────────────────────────────────────
class Round_PublicGoods(MyBasePage):
    """Players decide how many tokens to put in or take from the common pool."""

    @staticmethod
    def get_form_fields(player):
        r = player.round_number
        return [_round_field('PGG_contribution', r)]

    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        r = player.round_number

        # Tokens the player earned this round from the Ravens Matrix stage
        ravens_score = getattr(player, _round_field('Ravens_score', r))
        tokens_earned = ravens_score * C.Practice_ECs   # e.g. 5 EC per correct answer

        # Slider bounds
        pgg_max     = tokens_earned + C.PGG_Commons     # upper limit
        pgg_default = C.PGG_Commons                     # slider starts here

        # Effort share — current round only
        effort_share  = ravens_score
        effort_others = 0   # placeholder: replace with group total when group logic is added

        # Payoff share — accumulated across all completed rounds (1..r)
        # Each round contributes PGG_Commons as the player's payoff placeholder;
        # replace the per-round terms with real PGG outcomes when group logic is added.
        payoff_share  = sum(C.PGG_Commons for _ in range(r))   # r completed rounds
        payoff_others = 0   # placeholder: replace with group accumulated payoff

        variables['round_number']       = r
        variables['PGG_Commons']        = C.PGG_Commons
        variables['pgg_max']            = pgg_max
        variables['pgg_default']        = pgg_default
        variables['tokens_earned']      = tokens_earned
        variables['contribution_field'] = _round_field('PGG_contribution', r)
        variables['hidden_fields']      = [_round_field('PGG_contribution', r)]
        variables['Treatment']          = player.participant.Treatment
        # Pie chart data
        variables['effort_share']       = effort_share
        variables['effort_others']      = effort_others
        variables['payoff_share']       = payoff_share
        variables['payoff_others']      = payoff_others
        return variables


# ── Page sequence ─────────────────────────────────────────────────────────────
page_sequence = [
    Part_II_Instructions,   # shown once, round 1 only
    Round_Instructions,
    Round_RavensMatrix,
    Round_Feedback,
    Round_PublicGoods,
]
