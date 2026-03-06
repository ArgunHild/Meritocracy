"""
Bot for the Introduction app.

page_sequence = [Consent]   (only one page — the others are defined
but excluded from the sequence while the app is being developed)
"""
from otree.api import Bot, Submission
from . import *
import random


class PlayerBot(Bot):

    def play_round(self):
        # ── Consent ────────────────────────────────────────────────────────
        # Only page currently in the page_sequence.
        # No form fields — participant just clicks through.
        yield Submission(Consent, {}, check_html=False)
