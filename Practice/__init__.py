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
   
    Practice_score_1 = models.IntegerField(initial=0)   # number of correct answers
    Practice_answers_1 = models.LongStringField(initial='{}')  # JSON dict mapping question index to chosen option

    Practice_score_2 = models.IntegerField(initial=0)   # number of correct answers
    Practice_answers_2 = models.LongStringField(initial='{}')  # JSON dict mapping question index to chosen option

    

    

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
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        
        # Add or modify variables specific to ExtendedPage
        last_round_ecs = player.Practice_score_1 * C.Practice_ECs
        variables['last_round_ecs'] = last_round_ecs
        return variables

class Practice_WaitPage(WaitPage):
    pass

class Practice_round_1(MyPage):
    extra_fields = ['Practice_score_1', 'Practice_answers_1']
    form_fields = MyBasePage.form_fields + extra_fields
    
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text
        
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        
        # Add or modify variables specific to ExtendedPage
        for _ in ['Practice_score_1', 'Practice_answers_1']:
            variables['hidden_fields'].append(_)
        return variables
    
    @staticmethod
    def js_vars(player: Player):
        return {
            'score_field': 'Practice_score_1',
            'answers_field': 'Practice_answers_1',
            'participant_code': player.participant.code,
            'puzzle_set': 1,
        }
    
class Practice_round_2(MyPage):
    extra_fields = ['Practice_score_2', 'Practice_answers_2']
    form_fields = MyBasePage.form_fields + extra_fields
    
    timeout_seconds = C.Round_length
    timer_text = C.Timer_text
        
    @staticmethod
    def vars_for_template(player: Player):
        variables = MyBasePage.vars_for_template(player)
        
        # Add or modify variables specific to ExtendedPage
        for _ in ['Practice_score_2', 'Practice_answers_2']:
            variables['hidden_fields'].append(_)
        return variables
    
    @staticmethod
    def js_vars(player: Player):
        return {
            'score_field': 'Practice_score_2',
            'answers_field': 'Practice_answers_2',
            'participant_code': player.participant.code,
            'puzzle_set': 2,
        }


  
page_sequence = [
    Practice_instructions_1,
    Practice_WaitPage,
    Practice_round_1,
    Practice_instructions_2,
    Practice_round_2,
    ]
