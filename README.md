# Misty Experiment

This repository contains code needed for running the in-person experiment & controlling the experiment.

## Misty-Experiment Directory

Misty Experiment Platform, which is the page to control the robot during the experiments, is defined here. For more information, read the `README.md` inside the directory.

## Files

### dataExtraction.py

This file is used to extract data from text file that contains console log from an In-Person Experiment runthrough. It simply looks for lines that starts with `App.js:` and extract data from it.

- For now, the assumption is that it will be run on a single file, instead of a directory. (I assumed that data will be extracted immediately after each experiment). 
- The input is a text file with console log copy-pasted in, and participant's ID associated with that file.

### randomNumber.py

This file generates condition assignments randomly and output the result to `conditionAssignment.txt`. You can change the number of conditions and/or number of participants.

