# common.py

from otree.api import Page, ExtraModel
from otree.api import BaseConstants
from otree.api import models, widgets
import json
import random


# %% Constants
class CommonConstants(BaseConstants):
    Instructions_general_path = "_templates/global/Instructions.html"
    Instructions_practice_1 = "_templates/global/Instructions_Practice_1.html"
    Part_II_Instructions_template = "_templates/global/Part_II_Instructions_template.html"

    # TODO: set to 60
    Round_length = 6000          # 60 seconds per quiz part (oTree timeout_seconds is in seconds)
    Interstitial_length = 10   # seconds for interstitial auto-advance
    Timer_text = "Time left to complete this part:"

    Completion_fee = 10       # TODO: adjust completion fee
    Bonus_max = 20            # TODO: adjust maximum bonus
    Bonus_max_practice = 1.00
    Practice_ECs = 5

    RavensQuiz_template_path = "_templates/global/RavensQuiz.html"
    AnalogyQuiz_template_path = "_templates/global/AnalogyQuiz.html"
    MathQuiz_template_path = "_templates/global/MathQuiz.html"
    Interstitial_template_path = "_templates/global/Interstitial.html"

    # \u2500\u2500 Economy \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    Economy_pie   = 500   # fixed pie size (ECs) competed over each round
    Welfare_check = 50    # flat bonus added to weighted score in Welfare State
    PGG_Commons   = 100   # starting tokens in the common pool each round

    # \u2500\u2500 Multipliers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    M_high   = 7   # high-performer   (Excessive Meritocracy / Aristocracy)
    M_medium = 5   # medium-performer (all treatments as base)
    M_low    = 3   # low-performer    (Excessive Meritocracy / Aristocracy)

    # \u2500\u2500 Treatment names \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    TREATMENTS = ['Perfect_Meritocracy', 'Excessive_Meritocracy', 'Welfare_State', 'Aristocracy']

    # \u2500\u2500 Treatment explanation texts (shown on Part_II_Instructions) \u2500\u2500\u2500\u2500
    Explanation_Perfect_Meritocracy = (
        '<p>You have been placed in a group of three participants. The three of you form an <strong>Economy</strong>.</p>'
        '<p>Each round, all three members compete over a pot of <strong>500 ECs</strong>. '
        'Your share of the pot depends on how well you perform relative to the others in your group.</p>'
        '<p>All three members of your Economy have the <strong>same multiplier of &times;5</strong>. '
        'This means your share is determined purely by how many questions you answer correctly.</p>'
    )

    Explanation_Excessive_Meritocracy = (
        '<p>You have been placed in a group of three participants. The three of you form an <strong>Economy</strong>.</p>'
        '<p>Each round, all three members compete over a pot of <strong>500 ECs</strong>. '
        'Your share depends on your score and your <strong>multiplier</strong>.</p>'
        '<p>Multipliers were assigned based on relative performance in the practice rounds: '
        'the top performer received <strong>&times;7</strong>, '
        'the middle performer <strong>&times;5</strong>, '
        'and the bottom performer <strong>&times;3</strong>.</p>'
        '<p>Your personal multiplier is shown below.</p>'
    )

    Explanation_Welfare_State = (
        '<p>You have been placed in a group of three participants. The three of you form an <strong>Economy</strong>.</p>'
        '<p>Each round, all three members compete over a pot of <strong>500 ECs</strong>. '
        'Your share depends on your score and your multiplier.</p>'
        '<p>All three members have the <strong>same multiplier of &times;5</strong>. '
        'In addition, a flat <strong>bonus of 50 points</strong> is added to every member\'s score '
        'before shares are calculated — so even a lower-scoring member still receives a meaningful share of the pot.</p>'
    )

    Explanation_Aristocracy = (
        '<p>You have been placed in a group of three participants. The three of you form an <strong>Economy</strong>.</p>'
        '<p>Each round, all three members compete over a pot of <strong>500 ECs</strong>. '
        'Your share depends on your score and your <strong>multiplier</strong>.</p>'
        '<p>Multipliers were assigned <strong>randomly</strong> among the three members of your Economy: '
        'one member received <strong>&times;7</strong>, one <strong>&times;5</strong>, and one <strong>&times;3</strong>.</p>'
        '<p>Your personal multiplier is shown below.</p>'
    )
    
    Welfare_check_text = '<br>&emsp;<strong>+ 50 points</strong> (flat bonus added to every member\'s score)'

    EC_exchange_rate = 100  # 100 EC = 1 EUR


# %% ExtraModel: cross-session treatment counter
class TreatmentCounter(ExtraModel):
    """Persistent DB table tracking how many groups have been assigned to each
    treatment across ALL sessions. Survives session resets as long as the DB
    is not wiped with 'otree resetdb'."""
    treatment = models.StringField()
    count     = models.IntegerField(initial=0)


def get_treatment_counts():
    """Return {treatment: count} for all four treatments.
    Reads ALL rows (no field filtering — ExtraModel only supports relational
    filter args), builds a dict in Python, and fills missing treatments with 0."""
    all_rows = TreatmentCounter.filter()   # no args → returns every row
    existing = {row.treatment: row.count for row in all_rows}
    return {t: existing.get(t, 0) for t in CommonConstants.TREATMENTS}


def _set_treatment_count(treatment, new_count):
    """Delete any existing row for this treatment and insert a fresh one.
    ExtraModel has no update(); delete+create is the standard pattern."""
    for row in TreatmentCounter.filter():
        if row.treatment == treatment:
            row.delete()
    TreatmentCounter.create(treatment=treatment, count=new_count)


def assign_treatment_balanced():
    """Pick the least-used treatment globally (break ties randomly),
    increment its persistent counter, and return the treatment name."""
    counts = get_treatment_counts()
    min_count = min(counts.values())
    candidates = [t for t, c in counts.items() if c == min_count]
    chosen = random.choice(candidates)
    _set_treatment_count(chosen, counts[chosen] + 1)
    return chosen


# %% Payoff helper
def compute_pie_share(player_score, player_multiplier,
                      group_scores, group_multipliers,
                      treatment, welfare_check=50, economy_pie=500):
    """
    Compute this player's EC payoff from the economy pie for one round.

      weighted_i = score_i * multiplier_i
      Welfare State: weighted_i += welfare_check  (applied to every member)
      payoff = (weighted_self / sum(weighted_all)) * economy_pie

    Returns (player_payoff_ECs, player_weighted_score, total_weighted_score).
    """
    weighted = [s * m for s, m in zip(group_scores, group_multipliers)]
    if treatment == 'Welfare_State':
        weighted = [w + welfare_check for w in weighted]

    total    = sum(weighted)
    player_w = player_score * player_multiplier
    if treatment == 'Welfare_State':
        player_w += welfare_check

    payoff = (player_w / total) * economy_pie if total > 0 else 0.0
    return payoff, player_w, total


# %% Pages
class MyBasePage(Page):
    form_model = 'player'
    form_fields = []

    @staticmethod
    def vars_for_template(player):
        return {
            'hidden_fields': [],
            'Instructions': player.session.config.get('Instructions_general_path'),
            'Instructions_part_II': player.session.config.get('Part_II_Instructions_template'),
        }
