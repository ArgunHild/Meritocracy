"""
Bot for the Part_I_Economy app  (4 rounds).

Per-round page sequence:
  Round 1 only:
    Grouping_WaitPage           (auto)
    Part_II_Instructions        (is_displayed: r==1, no form)
    Comprehension_check_1       (is_displayed: r==1, 3 bool fields)
    Comprehension_check_2       (is_displayed: r==1 AND failed check_1 → skipped)
    Comprehension_check_3       (is_displayed: r==1 AND failed both  → skipped)

  Every round:
    Round_Instructions          (no form)
    Round_RavensMatrix          (Raven_score_r, Raven_answers_r)
    Interstitial_Analogy        (no form, timeout)
    Round_Analogies             (Analogy_score_r, Analogy_answers_r)
    Interstitial_Math           (no form, timeout)
    Round_Math                  (Math_score_r, Math_answers_r)
    Round_WaitPage              (auto — syncs scores, then computes payoffs)
    Round_Feedback              (no form)
    Round_PublicGoods           (PGG_contribution_r)

  Round 4 only:
    Final_WaitPage              (auto — computes final earnings)
    Final_Results               (is_displayed: r==4, no form)

Bots submit random but plausible scores (1–5 per sub-test) and randomised
PGG contributions (multiples of 10 from 0–100) to generate varied mock data.
"""
from otree.api import Bot, Submission
from . import *
import random
import json


# ── Helpers ───────────────────────────────────────────────────────────────────

def _score(max_q=5):
    """Random correct-answer count in [1, max_q]."""
    return random.randint(1, max_q)

def _answers():
    """Empty placeholder for LongStringField answer logs."""
    return json.dumps({})


# ── Bot ───────────────────────────────────────────────────────────────────────

class PlayerBot(Bot):

    def play_round(self):
        r = self.round_number

        # ── Round 1: instructions + comprehension check ───────────────────────
        if r == 1:
            # Grouping_WaitPage is auto (is_displayed: r==1)
            yield Submission(Part_II_Instructions, {}, check_html=False)

            # Submit all correct answers → Comprehension_1 = True
            # Comprehension_check_2 and _3 have is_displayed=False after this,
            # so oTree will skip them automatically — do not yield them here.
            yield Submission(Comprehension_check_1, {
                'Comprehension_question_1': True,   # higher score → higher share
                'Comprehension_question_2': True,   # group max when all contribute 100
                'Comprehension_question_3': True,   # personal max when I contribute 0
            }, check_html=False)

        # ── Per-round quiz stages ─────────────────────────────────────────────
        yield Submission(Round_Instructions, {}, check_html=False)

        # Matrix Reasoning (hidden score field populated by JS in real session;
        # bot injects value directly into the form field)
        yield Submission(Round_RavensMatrix, {
            f'Raven_score_{r}':   _score(5),
            f'Raven_answers_{r}': _answers(),
        }, check_html=False)

        yield Submission(Interstitial_Analogy, {}, check_html=False)

        # Analogies
        yield Submission(Round_Analogies, {
            f'Analogy_score_{r}':   _score(5),
            f'Analogy_answers_{r}': _answers(),
        }, check_html=False)

        yield Submission(Interstitial_Math, {}, check_html=False)

        # Mathematics
        yield Submission(Round_Math, {
            f'Math_score_{r}':   _score(5),
            f'Math_answers_{r}': _answers(),
        }, check_html=False)
        # before_next_page → _compute_round_sum stores Round_score_r
        # Round_WaitPage (auto) → _compute_and_store_payoff stores Pie_payoff_r

        # Feedback (display-only: bar charts)
        yield Submission(Round_Feedback, {}, check_html=False)

        # Public Goods Game — multiples of 10 only (0–100)
        yield Submission(Round_PublicGoods, {
            f'PGG_contribution_{r}': random.choice(range(0, 101, 10)),
        }, check_html=False)

        # ── Round 4 only: final results ───────────────────────────────────────
        if r == 4:
            # Final_WaitPage (auto, is_displayed: r==4) computes all final earnings
            yield Submission(Final_Results, {}, check_html=False)
