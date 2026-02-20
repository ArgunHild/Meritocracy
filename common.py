# common.py

from otree.api import Page
from otree.api import BaseConstants
from otree.api import  models, widgets
import json


# %% Constants
class CommonConstants(BaseConstants):
    # Prolific links:
    
    Instructions_general_path = "_templates/global/Instructions.html"
    Instructions_practice_1 = "_templates/global/Instructions_Practice_1.html"
    
    Round_length = 12000
    Timer_text = "Time left to complete this round:" 
    
    Completion_fee = 10  # TODO: adjust completion fee
    Bonus_max = 20  # TODO: adjust maximum bonus
    Bonus_max_practice = 1.00  # TODO: adjust maximum bonus
    Practice_ECs = 5  # TODO: adjust practice bonus

    RavensQuiz_template_path = "_templates/global/RavensQuiz.html"

    
    EC_exchange_rate = 100  # 100 EC = 1 EUR
    
    Explanation_Aristocracy = 'Treatment explanation'
    Explanation_Meritocracy = 'Treatment explanation'
    Explanation_ExcessiveMeritocracy = 'Treatment explanation'
    Explanation_WelfareState = 'Treatment explanation'
    

# %% Player
# DOESNT WORK WITH PLAYER

# %% Pages
class MyBasePage(Page):
    form_model = 'player'
    form_fields = []

    @staticmethod
    def vars_for_template(player):
        
        return {
            'hidden_fields': [],
            'Instructions': player.session.config.get('Instructions_general_path'),

        }


        

