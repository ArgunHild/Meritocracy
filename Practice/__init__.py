from otree.api import *
import random
from common import *
doc = '''
This is the main survey app. It contains
1. Main survey 
2. One attention check.
- You can additionally calculate payoffs and save them at a participant field.
'''

class C(CommonConstants):
    NAME_IN_URL = 'Practice'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1
    
    Instructions_general_path = "_templates/global/Instructions.html"


    
class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass


class Player(BasePlayer):   
    # Attention check 2, 1 was in introduction 
    # Attention_2 = models.BooleanField(choices=[
    #         [True, 'I disagree.'],
    #         [False, 'I think both are possible.'],
    #         [False, 'I agree.'],], 
    #     label= 'A 20 year old man can eat 500kg meat and 2 tons of vegetables in one meal.', widget=widgets.RadioSelect)
            
    # Player answers
    ## Survey
    Practice_1 = models.IntegerField(choices=[1,2,3,4], label='choose an Integer',
                                   widget=widgets.RadioSelectHorizontal)
    Practice_2 = models.IntegerField(choices=[1,2,3,4], label='choose an Integer',
                                   widget=widgets.RadioSelectHorizontal)
    

    

 #%% Base Pages
from common import MyBasePage   

  
# Pages
class MyPage(MyBasePage):
    extra_fields = [] 
    form_fields = MyBasePage.form_fields + extra_fields
    
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)

        # Add or modify variables specific to ExtendedPage
        #TODO: fix treatment assignment
        # variables['Treatment'] = player.participant.Treatment
        variables['Treatment'] = "Generic"
        return variables


class Practice_instructions_1(MyBasePage):
    pass
class Practice_instructions_2(MyBasePage):
    pass

class Practice_WaitPage(WaitPage):
    pass

class Practice_round_1(MyPage):
    extra_fields = ['Practice_1'] 
    form_fields = MyBasePage.form_fields + extra_fields
    
class Practice_round_2(MyPage):
    extra_fields = ['Practice_2'] 
    form_fields = MyBasePage.form_fields + extra_fields




  
page_sequence = [
    Practice_instructions_1,
    Practice_WaitPage,
    Practice_round_1,
    Practice_instructions_2,
    Practice_round_2,
    ]
