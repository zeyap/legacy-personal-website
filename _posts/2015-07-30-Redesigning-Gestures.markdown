---
layout: post
title: "Redesigning Gestures"
date:   2015-07-30 12:50:00 +0800
category: research
filter: research
coverpic: "/assets/images/coverpics/"
flowchart: chart1
highchart: highchart1
coverpic: "/assets/images/coverpics/gesture.jpg"
description: "User defined gestures for gestural interaction."
publication: "Published in International Journal of HCI '17"
icon: hand-paper-o
slider: "yes"
permalink: /gestures/
gallery: left

meta-banner: "yes"
client: "Summer Session Research"
skills: "Experiment design, MATLAB Programming"
director: "Gao Zaifeng"
duration: "JUL - DEC 2015"

---

>To make gestural interaction with Kinect more "natural", we extended a hand gesture set to one involving hand and non-hand gestures, in the user-defined approach, combining the indices of gesture frequency, subjective ratings and physiological risk ratings.

<a href="http://www.tandfonline.com/doi/pdf/10.1080/10447318.2017.1342943?needAccess=true" class="button button-pill button-tiny button-highlight">Full paper</a>

**Is body gesture interaction *natural* at all?**

<p>Gestures in HCI at present are unnatural and are difficult to learn and memorize, according to our direct experience of playing Kinect games for a whole week, observations and literature review.</p>

<p>The bad compatibility between gestures and commands can be an issue since its design process. The distinct mental models of interactions between users and designers separate their gesture preferences and result in user unfriendly gesture design.</p>

 <h2>Procedure</h2>

 <div class="container">
 <div class="row">
		<div class="col">
		<h3>Command Set Selection</h3>

<p>The most important 15 commands were selected step-by-step</p>

<li>Listed all commands used in past 3D gestural studies</li>

<li>Removed tasks that are related to specific contexts, i.e. TV and games</li>

<li>4 expert users ranked commands by importance and frequency in previous studies in 5-point Likert scale. We selected those with importance>3 and frequency>2</li>

<li>Surveyed online to select among the remaining commands by importance (M = 3.53, SD = 1.42)</li>
		</div>
		<div class="col">
		<img src="/assets/images/questionaire.jpg">
		</div>
</div>

<hr>

    <div class="row">
		<div class="col">

<h3>Gesture Elicitation: Behavior Experiment</h3>

<h4>Participant</h4>

<p>Undergraduates (12 male, 10 female) from Zhejiang University were recruited, aged 20.73 on average (SD=1.42).
11 of them had never used kinect before, and the remaining participants had experience of no more than 14 hrs.</p>

<h4>User-defined approach</h4>
<p>First proposed by Wobbrock et al.(2009), it was effective for generating gestures that fit users' mental models. It involves 2 phase:</p>
<div>
    <div id="canvas"></div>
</div>
		</div> 
		<div class="col">
		<img src="/assets/images/gesture_1.png">
        </div>
    </div>
</div>


<h2>Results</h2>

<div class="container">
    <div class="row">
        
        <div class="col">
		<h3>STEP 1. Identify Gestures</h3>
<p>This is to group gestures that are essentially identical, among 701 gestures proposed by different participants. Then we obtain our initial gesture set.</p>

<p>We used a theoretical taxonomy (Wobbrock 2009) to achieve this. Gestures identical along all 4 dimensions on taxonomy are considered one same gesture.</p>
<h4>Identify by Taxonomy</h4>
            <table class="table table-sm">
			  <tbody>
				<tr>
				  <th scope="row">Binding</th>
				  <td>Object-centric/ World-dependent/ World-independent</td>
				</tr>
				<tr>
				  <th scope="row">Form</th>
				  <td>Static/Dynamic</td>
				</tr>
				<tr>
				  <th scope="row">Body Parts</th>
				  <td>One hand/ Two hands/ Full body</td>
				</tr>
				<tr>
				  <th scope="row">Nature</th>
				  <td>Physical/ Symbolic/ Metaphorical/ Abstract</td>
				</tr>
			  </tbody>
			</table>

        </div>
		<div class="col">
		<script src="/assets/js/charts_in_post/highchart1_1.js"></script>
						Taxonomy Dimension - 
			<select id="taxodropdown" onchange="selectInput(this)">
				<option  value="Binding">Binding</option>
				<option  value="Form">Form</option>
				<option  value="Body Parts">Body Parts</option>
				<option  value="Nature">Nature</option>
			</select>
			<div id="container" style="width:100%; height:400px;"></div>
	   </div>
	   </div>
	   <div class="row">
	   <div class="col">
	   <img src="/assets/images/mental model.jpg">
	   </div>
	   <div class="col">
	   <h4>Mental Model Observations</h4>
				<li>Participants were inclined to perform gestures over concrete objects</li>
				<li>Only 17.40% were abstract gestures</li>
				<li>Prefer dynamic gestures</li>
				<li>Reversible gestures are desired for dichotomous tasks (i.e. zoom-in/zoom-out)</li>
	   </div>
	   
	   </div>
</div>

* * *

<div class="container">
    <div class="row">
        <div class="col">
		<h3>STEP 2. Score gesture set</h3>

<p>To indicate the best gestures, 3 aspects were involved, based on past research.</p>

<table class="table table-sm">
  <tbody>
    <tr>
      <th scope="row">Agreement rate</th>
      <td>formula proposed by Vatavu & Wobbrock (2015), indicates to what extent participants tend to come up with the same gestures for a command.</td>
    </tr>
    <tr>
      <th scope="row">Subjective ratings on 7-point Likert</th>
      <td><li>Learnability</li>
	  <li>Gesture-command Match</li>
	  <li>Ease of Performing</li>
	  <li>Subjective Fatigue</li>
	  <li>Preference</li>
	  </td>
    </tr>
	<tr>
      <th scope="row">Physiological risk rating</th>
      <td>Rapid Entire Body Assessment (REBA)</td>
    </tr>
  </tbody>
</table>

<p>An overall command-gesture score was calculated by summng 7 varaibles. The highest-scored gesture was proposed for each command. See the paper for more detail on the gesture set and scores.</p>
        </div>
		<div class="col">
		<div id="container2" style="width:100%; height:500px;"></div>
		<script src="/assets/js/charts_in_post/highchart1_2.js"></script>
	   </div>
	</div>
</div>

* * *

<div class="container">
    <div class="row">
        <div class="col">
		<h3>STEP 3. Gesture Re-check</h3>
<p>Although intuitional and match mental model, we have to resolve an issue of user-defined method, that participants may have not fully understood the possibilities within design space. Showing many gestures in advance is an effective solution in previous studies.</p>

Subjective score was thus the focus, while REBA score was left out, and no Kinect skeletal recording was done.
<wbr>
<h4>Participant</h4>
<p>Undergraduates (11 male, 14 female) from Zhejiang University were recruited, aged 22.83 on average (SD=1.43).None of them had experience with gestural interaction.</p>
<div>
    <div id="canvas3"></div>
</div>
		</div>
		<div class="col">
		<h4>Results</h4>
<h5>Combining Command-Gesture</h5>
		<li> 8 commands had the same highest-scoring gesture between Exp 1 and 2.</li>
<li> 6 commands had distinct recommendations from Experiment 1 (gesture on, gesture off, zoom in, delete, move, and help) </li>
<li> 1 command overlapped with one of the two recommended gestures in Experiment 1 (zoom out)</li>


	</div>
	</div>
	<div class="row">
	<div class="col">
	<img src="/assets/images/gesture_2.png">
	</div>
	<div class="col">
	<h5>Generate Final Gesture Set</h5>
	<p>User-defined method could have only partially reflected the preferences/requirements of users. For those command with conflict we propose a gesture for each by considering recognition accuracy, natural language principles, the mental models of the users, and the taxonomy distribution.</p>
	</div>
	</div>
</div>


* * *

<h3>Group Members</h3>
<center>Zhen Chen | Zeya Peng | Mengge Yao | Shixian Yu | Ying Zhou</center>

<div>
    <div id="amazingslider-wrapper-1" style="display:block;position:relative;max-width:800px;margin:0px auto 56px;">
        <div id="amazingslider-1" style="display:block;position:relative;margin:0 auto;">
            <ul class="amazingslider-slides" style="display:none;">
                <li><img src="/assets/slider/images/kinect_group.jpg" alt="kinect_group"  title="kinect_group" />
                </li>
                <li><img src="/assets/slider/images/gesture_exp2.jpg" alt="gesture_exp2"  title="gesture_exp2" />
                </li>
                <li><img src="/assets/slider/images/gesture_exp1.jpg" alt="gesture_exp1"  title="gesture_exp1" />
                </li>
            </ul>
            <ul class="amazingslider-thumbnails" style="display:none;">
                <li><img src="/assets/slider/images/kinect_group-tn.jpg" alt="kinect_group" title="kinect_group" /></li>
                <li><img src="/assets/slider/images/gesture_exp2-tn.jpg" alt="gesture_exp2" title="gesture_exp2" /></li>
                <li><img src="/assets/slider/images/gesture_exp1-tn.jpg" alt="gesture_exp1" title="gesture_exp1" /></li>
            </ul>
        <div class="amazingslider-engine"><a href="http://amazingslider.com" title="jQuery Image Slideshow">jQuery Image Slideshow</a></div>
        </div>
    </div>
	</div>