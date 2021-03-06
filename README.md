# Natural Language Query Interface

This repository contains the natural language query interface of the [Cineast](https://github.com/dbisUnibas/cineast).

#### The work done in this project is the part of Google Summer of Code, 2016

## Description

This project extends Cineast user interface to support voice queries by converting speech query input to text and thereby giving full control to the user to interact in a natural way with the user interface. 

## External APIs used:

* [Annyang](https://github.com/TalAter/annyang)
* [Speech KITT](https://github.com/TalAter/SpeechKITT)
* [Responsive voice](http://responsivevoice.org/)

## Important Links

* [Link to Website](http://prateek1985.github.io/vitrivr-ui/)

* [Link to GSoC Project](https://summerofcode.withgoogle.com/projects/#5587149046939648)

## List of functions which voice commands can do in the interface:

* Add text as query
* Open/close top bar
* Open/close sidebar
* Search formed query
* Adding a canvas
* Split video into sequences
* Increase pen size
* Decrease pen size
* Browse next video container
* Browse previous video container
* Search particular canvas
* Switch to motion sketch
* Switch to colour sketch
* Select colour
* Fill canvas
* Download particular canvas
* Delete any canvas
* Clear any canvas
* Play video shot after click
* Search video shot by its ID after click
* Add video shot to positive feedback after click
* Add video shot to negative feedback after click
* Add serial numbers to particular container after click
* Relevance feedback
* Drop image of shot on canvas
* Play first video shot of video container
* Play video shot by its number
* Search video shot by ID using its number
* Drop image of shot on canvas by its number
* Add video shot to positive feedback by its number
* Add video shot to negative feedback by its number
* Open/Close top and sidebar simultaneously
* Search and play video shot simultaneously on click
* Mark video shot greater than particular score
* Hide video shot below particular score
* Show hidden video shots
* Check total number of video shots
* Check total number of video shots greater than particular score
* Change pen size using follow-up commands
* Browsing video container using follow-up commands
* Adding new canvas using follow-up commands
* Execution of feedback response given by system
* Add playing video to positive feedback
* Add playing video to negative feedback
* Display all base commands
* Close playing video or opened commands window
* Replay the playing video
* Pause the playing video
* Start the paused video 

> voicecommands.html contains all meaingfull functional commands which can be used to interact with the system

## Important files that deals with voice

* speech.js
* en-GB.js

## To switch off the voice mode

* Set constant voiceMode in config.js to false

* > default is true

## For installation of complete vitrivr stack

* Consider this [link](https://vitrivr.org/getting_started.html)