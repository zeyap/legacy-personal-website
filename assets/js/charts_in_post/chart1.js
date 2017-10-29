
window.onload = function () {
    fun(cd, 'canvas',200);
    fun(cd2, 'canvas2', 150);
    fun(cd3, 'canvas3', 150);
};

var cd = 'op1=>operation: To each participant, demonstrate the outcome of an operation, then make him to perform at least one gesture that trigger it\n' +
                     'op2=>operation: Determine from all user-proposed gestures by calculating gestures\' proposal frequency as agreement score\n' +

                     'op1(right)->op2';
var cd2 = 'op0=>start: Determine the most relevant commands in a gesture interaction system|approved\n' +
    'io1=>inputoutput: E1. Elicitation N=22|request\n' +
    'io2=>inputoutput: E2. Reassessment N=25|request\n'+
    'op1=>operation: Participant perform at least one gesture that trigger a given outcome\n' +
    'op1_1=>operation: Participant assess his proposed gestures\n' +
    'op2=>operation: Select from user-proposed gestures by agreement score|approved\n' +
    'op3=>operation: Participant reassess all gestures obtained\n' +
    'ed=>end: Propose a gesture set for commonly used interaction commands|approved\n' +
    'op0->io1->op1(right)->op1_1->op2->io2->op3(right)->ed\n';

var cd3 = 'op1=>operation: To each participant, demonstrate the outcome of an operation\n' +
                     'op2=>operation: Participants perform existing corresponding gestures according to written description\n' +
                     'op3=>operation: Participants assess gestures\n'+
                     'op1(right)->op2(right)->op3';