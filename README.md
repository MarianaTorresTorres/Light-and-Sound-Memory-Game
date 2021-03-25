# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Mariana Torres Torres

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/friend-shaped-capybaby

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Player can see how many turns they have done so far

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   https://www.w3schools.com/ (for reference)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   A problem that I encountered was when I was trying to implement additional features.
   
   I wanted the player to see how many turns they have left to do before winning, so I displayed the progress variable 
   by changing the inner HTML of a paragraph component. That was not very difficult to figure out, but then I realized that when 
  the player reaches the final turn and they win, the progress paragraph would continue to display the "7/8" rather than "8/8";
  this is also the case when the player loses, but leaving the progress as "7/8" makes sense in this situation. To solve this, 
  I first logged the progress variable in various steps of the JavaScript functions to figure out if the update level function 
  I created was updating the progress to be "8/8." After finding out that it was, I started playing around with the order of the 
  functions called inside of the win function to see if that would display the progress correctly; it did not. I then spent a 
  couple of hours trying to figure out why it wasn't working, researching online about asynchronous and synchronous functions in 
  hope that it would help to solve my bug. Unfortunately, due to time constraints, I was not able to find a solution to this problem. 
  However, I still wanted the player to see that final progress update, so I decided to find a temporary solution. Thus, I added 
  "Progress: 8/8" to the winning alert. The player can still see the "7/8" at the bottom until the stop game function is called, 
  but having that additional message in the alert ensures that the player knows they're done and it works as a temporary fix to 
  this bug that I will continue working on in a later time.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   From this submission, I can see that small web applications can be programmed by a single person. I also know from previous
  experience that web applications can be developed by a team, where the responsibilities can be distributed amongs the team
  members. However, I am curious about how this distribution would work for the applications made by very large companies.
  I know there are back-end, front-end, full-stack developers, but those positions still cover a lot of components in an
  application. My question is how much responsibilities does one developer in a big company have? How many features
  does the average software developer get to work on? And how much difference there is between the workload of a full-time
  software developer and an software developer intern?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   Like I said previously, I am having a bug where the final progress display (8/8) does not show up, so I would go back and 
  figure out where the problem is so I can fix it rather than displaying the final progress in the alert. Although I have 
  some experience with HTML, CSS, and JavaScript, this is the first time I have worked with the AudioContext library, so I would 
  spend some time looking through the library's documentation to learn more about how it works and how I could implement 
  more complex sounds in both this website and any future web applications I make. Finally, I would like to go over my CSS 
  and see if there are more efficient ways of styling the website and all of its components, maybe also ensure that the game 
  can be played in screens of different sizes.

## License

    Copyright Mariana Torres Torres

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
