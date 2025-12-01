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
    NAME_IN_URL = 'Part_II'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1
    
    Instructions_general_path = "_templates/global/Instructions.html"


    
class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass


class Player(BasePlayer):   
    # Attention check 2, 1 was in introduction 
    Attention_2 = models.BooleanField(choices=[
            [True, 'I disagree.'],
            [False, 'I think both are possible.'],
            [False, 'I agree.'],], 
        label= 'A 20 year old man can eat 500kg meat and 2 tons of vegetables in one meal.', widget=widgets.RadioSelect)
            
    # Player answers
    ## Survey
    Survey_1 = models.IntegerField(choices=[1,2,3,4], label='choose your Integer',
                                   widget=widgets.RadioSelectHorizontal)
    
    # data quality
    blur_log = models.LongStringField(blank=True)
    blur_count = models.IntegerField(initial=0)
    blur_warned = models.IntegerField(initial=0)
    

 #%% Base Pages
from common import MyBasePage   

  
# Pages
class MyPage(MyBasePage):
    extra_fields = ['Survey_1'] 
    form_fields = MyBasePage.form_fields + extra_fields
    
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)

        # Add or modify variables specific to ExtendedPage
        variables['Treatment'] = player.participant.Treatment
        return variables


class Attention_check_2(MyBasePage):         
    extra_fields = ['Attention_2']
    form_fields = MyBasePage.form_fields + extra_fields
    
    def before_next_page(player: Player, timeout_happened=False):
        if (not player.Attention_2 and not player.participant.vars['Attention_1']):
            player.participant.vars['Allowed'] = False
            player.participant.vars['Attention_passed'] = False
  
page_sequence = [
    MyPage,
    Attention_check_2,
    ]
