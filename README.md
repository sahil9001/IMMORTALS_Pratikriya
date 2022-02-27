# Pratikriya

<p align="center">
    <img src="./frontend/src/assets/images/logos/logo_black.png" alt="Logo" width="300">
  </a>

## Problem Statement

**Title** – Voice Analysis of call in Emergency Response System

**Problem Statement Bucket** - Blockchain & Cybersecurity

**Objective** - The solution should analyse the voice of the caller on live on-going calls being attended by the caller in the Emergency Response System. After analysing the voice of the caller, the solution should predict the emotional and mental condition of the caller. The solution should predict/suggest the following about the caller - stressful voice, drunk voice, prank voice, abusive voice, painful voice or any mental condition.

**Background** – The calls received in an emergency response centre are very critical and the attendant needs to analyse the level of emergency by the voice of the caller. There’s a need for practical application to successfully analyse the state of mind of the caller.

## Solution
We've developed the ***voice analyser*** using **Machine Learning**, and ***maintained relevant information*** on the **ethereum blockchain**, while ***storing the files*** on **IPFS Storage**

| **Technology** | **Tools** |**Usage**|
|----------------|-----------|---------|
|Blockchain| Ethereum, Ganache, Truffle, Metamask, Infura, IPFS | The audio data is stored in IPFS Storage. This IPFS Hash is maintained in the Ethereum Blockchain along with other header information such as user, caller, emotion etc. |
|Front-End| Next.js, Theme UI | This built the web application, the way we see it.| 
|Machine Learning API| Sklearn, Python, Librosa, Google Collab| We've developed an *MLPClassifier* from sklearn in python, that works on audio data which is normalised using Librosa. Our model has beentrained on Google Collab, and the data classifies the data into categories like angry, sad etc. We have an accuracy of ~75%|

## Team - Immortals

| S. No. 	| Name              	| Semester 	| Role                 |
|--------	|-------------------	|----------	|----------------------|
| 1      	| Sahil Silare      	| 6        	| Full Stack Developer |
| 2      	| Sakshi Bhandarkar 	| 8        	| Full Stack Developer |
| 3      	| Priyanshi Sharma  	| 8        	| ML/Blockchain        |
| 4      	| Sanjeeb Nath      	| 8        	| ML/Blockchain    	   |
| 5      	| Prakhar Asaiya    	| 6        	| Mobile + Web Frontend|
| 6      	| Siddharth Mishra  	| 6        	| Mobile + Web Frontend|
