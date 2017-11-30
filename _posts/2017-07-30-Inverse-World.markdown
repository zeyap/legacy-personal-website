---
layout: post
title: "Inverse World"
date:   2017-07-30 12:50:00 +0800
category: design
filter: design
coverpic: "/assets/images/coverpics/iw.png"
description: "A story-driven AR game"
---

**Clients**|**Skills**
 <highlight>Computer Game Programming capstone project</highlight>|<highlight>Concept Design, Graphic Design, Unity 3D</highlight>
 |
 **Platform**|
 Android|
 |
**Duration**|
 <highlight>April - July 2017</highlight>|
 |
 [Project repository](https://github.com/fish1996/AR-Game---Inverse-World)|

>'Inverse World' is a story-driven AR game, where players explore the game subject's memories through dialogues to help fulfill her wishes. The project is still under way.

<h2>Game Design</h2>

In the course *Computer Game Programming* we were required to develop an Augmented Reality game. After brainstorming on the game design, we primarily decided on an experience with **life simulation**, in which players can interact with the character on his cell phone.

<h3>Major Concerns</h3>

<h4>Who is it targeted at?</h4>
Since we are going to iterate and test the games on campus, we largely see university student as the target. No gender preference.

<h4>How is AR making it fun?</h4>
In the first place, we focus on the virtual *social* experience AR can offer by making a life simulation mechanism.

Also, we try to connect this experience with the real life of player, that is, to drive our players out of simply sitting in front of PC or playing on mobile phone. To achive this we proposed in brainstorm to
* Create visual relations between game objects with real life objects (like most AR games do)
* Use pedometer and directly transfer stats to bonus in game
* Use other capabilities on cell phones, like audio recording, to allow for multi-modal interaction

<h4>How is it special among it counterparts on the market?</h4>
Due to our love for engaging stories and role-playing interactive novels, we decided to make a girl simulation game *driven by story*. Impressive predecessors among non-AR games are *Life is Strange* and *To the Moon*. 

<h3>Game Design</h3>

<h4>Gameplay</h4>

The main character is a ghost who seeks help from the player to explore into her vague memories and find about her goals.
* The game mainly consists of dialogues between the AR character and player, where the players accumulate fragments of her life stories, in a counter-chronological order.

(prototype of the main scene)
![](/assets/images/iw_p_main.jpg)
* The player has to infer about the connections among the story fragments of the ghost, and pair them on the interface. Once the paring is successful, the player moves on to the next level. 

(prototype of the inference scene)
![](/assets/images/iw_p_infer.jpg)

(the scene where players can look at the game progress and review the story)
![](/assets/images/iw_p_progress.jpg)

(Settings of the main character)
![](/assets/images/iw_p_settings.png)

<h4>Stat balance</h4>

Both the chance for dialogues and fragments-pairing is limited by a energy parameter. To replenish energy of the character, players can
* ~~Walk to add to the Pedometer stat~~ (discarded later for it departs from the theme of the game)
* Feed the character in mini-game

<h3>Development</h3>

<h4>2D Elements</h4>

(Iterated prototype of the main scene)
![](/assets/images/iw_p_main2.png)

(Iterated prototype of the inference scene. The game progress is indicated by the expansion of the inference scene)
![](/assets/images/iw_p_infer2.png)

(In game snapshot)
![](/assets/images/iw_main.jpg)

![](/assets/images/iw_infer.jpg)

![](/assets/images/iw_game_1.jpg)

![](/assets/images/iw_game_2.jpg)

