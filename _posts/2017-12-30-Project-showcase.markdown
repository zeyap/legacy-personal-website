---
layout: post
title: "Project Showcase"
date:   2017-12-30 12:50:00 +0800
category: development
filter: development
coverpic: /assets/images/coverpics/music.jpg

description: "Course projects in progress"
---

<style type="text/css">
  table,th,td
  {
  width:100%;
  }
</style>

**Clients**|**Skills**
Course Projects|C++ Programming
 |Multimedia processing fundamentals
 |Computer Vision
 |Visualization
 |
**Duration**|
 Nov 2017 - |
 |

 <h3>Music Recognition</h3>

 This is a coursework done on Digital Video-Audio Processing.

This desktop application reads in audio recordings to generate audio fingerprints, you can build up & search among a fingerprint database with this application. Till now it is made independently by myself. Project still in progress at the moment.

See more in <a href="https://github.com/zeyap/MusicFingerprint" class="button button-pill button-tiny button-caution">Project page</a>

![](/assets/images/mf_1.png)

![](/assets/images/mf_2.png)

 <h3>Face Recognition</h3>

 <a href="https://github.com/zeyap/Eigenface" class="button button-pill button-tiny button-caution">Eigenface</a>

 Coursework on Computer Vision. Made with OpenCV(3.3.1) modules. Core functions (other than matrix eigen vectors calculation) are originally implemented.

 Faces can be decomposed linearly using some eigen vectors (or [Eigenfaces](https://en.wikipedia.org/wiki/Eigenface)) ([Turk & Pentland 1991](http://ieeexplore.ieee.org/document/139758/)). The face images I used to generate eigenvectors come from the database of AT&T and one of my photo. The method to extract eigen vectors is [Principal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) (PCA).

 Mean face
 ![](https://github.com/zeyap/Eigenface/raw/master/eigen_output/mean_face.png)

 Eigenfaces
 ![](https://github.com/zeyap/Eigenface/raw/master/eigen_output/eigenfaces.png)

 Reconstruction of my photo using a certain number of eigenfaces
 ![](https://github.com/zeyap/Eigenface/raw/master/eigen_output/reconstruction.png)

 The UI designed for conveniently unifying the position of eyes among all photos.
 ![](https://github.com/zeyap/Eigenface/raw/master/eigen_output/ui.png)

 <h3>Panorama Stitcher</h3>

 <a href="https://github.com/zeyap/Panorama-stitching" class="button button-pill button-tiny button-caution">Panorama stitching</a>

  Coursework on Computer Vision. I used OpenCV(3.3.1) module of [SIFT](https://en.wikipedia.org/wiki/Scale-invariant_feature_transform), a renowned method for 2D feature extraction on images ([Lowe 1999](http://www.cs.ubc.ca/~lowe/papers/iccv99.pdf)). 

  Read individual and overlapping images
  ![](/assets/images/yosemite.png)

  Detect & Match keypoints according to keypoint desriptors. [See more here](https://github.com/zeyap/Panorama-stitching/tree/master/output)

  ![](https://github.com/zeyap/Panorama-stitching/raw/master/output/match0_1.png)

  Warp images & Stitch together
  ![](https://github.com/zeyap/Panorama-stitching/raw/master/output/stitch.png)

