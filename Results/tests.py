"""
Bot for the Results app.

page_sequence:
  AllDone_WaitPage   (auto — session-level sync)
  Results            (no form fields — display-only summary page)
"""
from otree.api import Bot, Submission
from . import *


class PlayerBot(Bot):

    def play_round(self):
        # AllDone_WaitPage handled automatically by oTree
        yield Submission(Results, {}, check_html=False)
