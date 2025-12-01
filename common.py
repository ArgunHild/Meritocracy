# common.py

from otree.api import Page
from otree.api import BaseConstants
from otree.api import  models, widgets
import json


# %% Constants
class CommonConstants(BaseConstants):
    # Prolific links:
    
    Instructions_general_path = "_templates/global/Instructions.html"
    Completion_fee = 0.50  # TODO: adjust completion fee
    Bonus_max = 1.00  # TODO: adjust maximum bonus
    Bonus_max_practice = 1.00  # TODO: adjust maximum bonus

# %% Player
# DOESNT WORK WITH PLAYER

# %% Pages
class MyBasePage(Page):
    form_model = 'player'
    form_fields = []

    @staticmethod
    def is_displayed(player):
        return player.participant.Allowed

    @staticmethod
    def vars_for_template(player):
        
        return {
            'hidden_fields': [],
            'Instructions': player.session.config.get('Instructions_general_path'),

        }


        

