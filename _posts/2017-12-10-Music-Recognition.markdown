---
layout: post
title: "Music Recoginition"
date:   2017-12-10 12:50:00 +0800
category: development
filter: development
coverpic: 

description: "A music processing project (In progress)"
---

**Clients**|**Skills**
Digital Audio and Video Processing, Course Project|C++ Programming
 |Audio processing
 |Basic visualization
 |
**Duration**|**Tools & Environment**
 NOV 25 2017 - |Qt Creator4.4.1
 |Windows 10 (VC14 x86)

>This desktop application read in audio recordings to generate audio fingerprints, you can build up & search among a fingerprint database with this application. Till now it is made independently by myself. Still in progress at the moment. See the [repository](https://github.com/zeyap/MusicFingerprint)

<h2>Configurations & Features</h2>

<h3>Recorder</h3>

Read audio input from Microphone|[QMultimedia library](http://doc.qt.io/qt-5/qtmultimedia-index.html)

<h3>Preprocessing</h3>

Format input recordings|[QMultimedia library](http://doc.qt.io/qt-5/qtmultimedia-index.html)
Frame the recordings into overlapping audio fragments|

<h3>LinearTrans</h3>

Do *Fast Fourier Transform* on each frame of recording|[FFTW3 library](http://fftw.org/)
Generate a feature vector/**Music fingerprint** for each frame|[Shazam](https://dl.acm.org/citation.cfm?doid=1145287.1145312)'s method. Originally implemented
For each song, write feature vectors into a file|

![](/assets/images/mf_1.png)

<h3>IndexManager</h3>

Index feature vectors|[Hatisma & Kalker](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.16.2893). Originally implemented
Generate **Reverse Hash** -- Lookup-tables from (fixed number of) features to songs|

<h3>Search</h3>

Find possible music candidates -- match features from a new recording with existing music through Lookup Table|Originally implemented
Sort candidates by Distance to the recording in a **Priority Queue**/Maximum Heap|

![](/assets/images/mf_2.png)