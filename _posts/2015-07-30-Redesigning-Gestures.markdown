---
layout: post
title: "Redesigning Gestures"
date:   2015-07-30 12:50:00 +0800
category: research
filter: research
coverpic: "/assets/images/coverpics/"
flowchart: chart1
highchart: highchart1
coverpic: "/assets/images/coverpics/gesture.png"
description: "User defined gestures for gestural interaction"
---

**Clients**|**Skills**
 <highlight>Group Research Project for Summer Session</highlight>|<highlight>Psychometrics, Experiment design, MATLAB Programming</highlight>
 |
**Advisor**|
 <highlight>Prof. Gao Zaifeng</highlight>|
 |
**Duration**|
 <highlight>JUL - DEC 2015</highlight>|

>We extended a hand gesture set to one involving hand and non-hand gestures, in the user-defined approach, combining the indices of gesture frequency, subjective ratings and physiological risk ratings. More information are available in the full paper. [Download](http://www.tandfonline.com/doi/pdf/10.1080/10447318.2017.1342943?needAccess=true).


**Is body gesture interaction *natural* at all?**

Gestures in HCI at present are unnatural and are difficult to learn and memorize, according to our direct experience of playing Kinect games for a whole week, observations and literature review.

The bad compatibility between gestures and commands can be an issue since its design process. The distinct mental models of interactions between users and designers separate their gesture preferences and result in user unfriendly gesture design.

 <h2>Goal of Research</h2>
 * Use a gesture elicitation approach, extend gesture set to human's all body parts (aside from hand gestures)
 * Create a valid index to determine best gestures
<h3><u>Overview</u></h3>
  <div>
    <div id="canvas2"></div>
</div>

<h2>Command Set Selection</h2>

The **most important 15 commands** were selected step-by-step
1. Listed all commands used in past 3D gestural studies
2. Removed tasks that are related to specific contexts, i.e. TV and games
3. 4 expert users ranked commands by importance and frequency in previous studies in 5-point Likert scale. We selected those with importance>3 and frequency>2
4. Surveyed online to select among the remaining commands by importance (M = 3.53, SD = 1.42)

<h2>Gesture Elicitation: User-defined</h2>
* **PARTICIPANT** undergraduates (12 male, 10 female) from Zhejiang University were recruited, aged 20.73 on average (SD=1.42).
* 11 of them had never used kinect before, and the remaining participants had experience of no more than 14 hrs.
{:.side-note}
User-defined approach, first proposed by Wobbrock et al.(2009), was effective for generating gestures that fit users' mental models. It involves 2 phase:

 <div>
    <div id="canvas"></div>
</div>
Illustrated below was our experiment design.
<h3><u>Experiment design</u></h3>
![gesture_1](/assets/images/gesture_1.png)
<h3><u>Results</u></h3>
<h4>STEP 1. Identify Gestures</h4>
This is to group gestures that are essentially identical, among 701 gestures proposed by different participants. Then we obtain our initial gesture set.

We used a theoretical ***taxonomy*** (Wobbrock 2009) to achieve this. Gestures identical along all 4 dimensions on taxonomy are considered one same gesture.

**Binding**|Object-centric/ World-dependent/ World-independent
**Form**|Static/Dynamic
**Body Parts**|One hand/ Two hands/ Full body
**Nature**|Physical/ Symbolic/ Metaphorical/ Abstract

<script src="/assets/js/charts_in_post/highchart1_1.js"></script>
Taxonomy Dimension - 
<select id="taxodropdown" onchange="selectInput(this)">
    <option  value="Binding">Binding</option>
    <option  value="Form">Form</option>
    <option  value="Body Parts">Body Parts</option>
    <option  value="Nature">Nature</option>
</select>
**Select to see the stacked graph*

<div id="container" style="width:100%; height:400px;"></div>
<h5>Mental Model Observations</h5>
* <highlight>Participants were inclined to perform gestures over concrete objects</highlight>
* <highlight>Only 17.40% were abstract gestures</highlight>
* <highlight>Prefer dynamic gestures</highlight>
* <highlight>Reversible gestures are desired for dichotomous tasks (i.e. zoom-in/zoom-out)</highlight>


***Agreement rate*** indicates to what extent participants tend to come up with the same gestures for a command.

<div id="container2" style="width:100%; height:700px;"></div>

<script src="/assets/js/charts_in_post/highchart1_2.js"></script>

<h4>STEP 2. Score gesture set</h4>

To indicate the best gestures, 3 aspects were involved, based on past research.

**Agreement rate**|formula proposed by Vatavu & Wobbrock (2015)
**Subjective ratings**|Learnability
on 7-point Likert Scale|Gesture-command Match
|Ease of Performing
|Subjective Fatigue
|Preference
**Physiological risk rating**|Rapid Entire Body Assessment (REBA)

An **overall command-gesture score** was calculated by summng 7 varaibles. The highest-scored gesture was proposed for each command. *See the paper for more detail on the gesture set and scores.*


<h2>Gesture Re-check</h2>
* **PARTICIPANT** undergraduates (11 male, 14 female) from Zhejiang University were recruited, aged 22.83 on average (SD=1.43).
* None of them had experience with gestural interaction.
{:.side-note}
Although intuitional and match mental model, we have to resolve an issue of user-defined method, that participants may have not fully understood the possibilities within design space. Showing many gestures in advance is an effective solution in previous studies.

Subjective score was thus the focus, while REBA score was left out, and no Kinect skeletal recording was done.

<div>
    <div id="canvas3"></div>
</div>

<h3><u>Results</u></h3>
<h4>Combining Command-Gesture</h4>
* 8 commands had the same highest-scoring gesture between Exp 1 and 2.
* 6 commands had distinct recommendations from Experiment 1 (gesture on, gesture off, zoom in, delete, move, and help) 
* 1 command overlapped with one of the two recommended gestures in Experiment 1 (zoom out)

<highlight>User-defined method could have only partially reflected the preferences/requirements of users.</highlight> For those command with conflict we propose a gesture for each by considering recognition accuracy, natural language principles, the mental models of the users, and the taxonomy distribution.

//discussion
<h4>A Pictorial Demonstration</h4>
![gesture_1](/assets/images/gesture_2.png)
