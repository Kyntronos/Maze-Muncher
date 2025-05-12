READMEFileStructure

assets -- Folder containing all assets used for Maze Muncher
|
+ Audio -- Folder containing all audio used for game
|
+ enemies -- Folder containing sprites for the different enemy sheep
|
+ Farm boy -- Folder containing the sprites for the Farm boy Mason
|
+ ghost -- (NOW UNUSED FOLDER) Used as template to begin work
|
+ maps -- Folder containing code for the different maps for Maze Muncher
|
+ Menu -- Folder containing images for the Menu
|
+ pac man & life counter & death -- Folder containing sprites for lives and the death
|
+ pac man tiles -- (NOW UNUSED FOR FINAL GAME)
|
+ pacman characters/pacman -- (NOW UNUSED FOR FINAL GAME)
|
+ pacman items -- Folder containing the sprits for power ups and in game collectables

src/controllers -- Folder containing all code for external functions to be called
|
+ characterDeath.js -- Code for the player death
|
+ characterMovement.js -- Code for controlling player movement
|
+ eatCorn.js -- Code for managing player "eating corn" and increasing score/working toward victory
|
+ enemyDeath.js -- Code to handle when player collides with "scared" version
|
+ enemyMovement.js -- Code for handling enemy movement and tracking of player
|
+ gameScreens.js -- Code for handling the "win", "lose", and "high score" screens.
|
+ ghostBehaviors.js -- Code for handling adaptive enemy behavior when spotting player
|
+ loadAnims.js -- Code for loading the animations when needed
|
+ loadSpirtes.js -- Code for loading in the sprites for Maze Muncher
|
+ mazeUtils.js -- Code for filling the maze with corn and setting up the game
|
+ PowerUpController.js -- Code for handling what the power ups do in game

test -- test folder for the test cases
|
+ characterMovement.test.js -- Test case for character movement
|
+ eatCorn.test.js -- Test case for player "eating" corn
|
+ gameScreens.test.js -- Test case for loading screens properly
|
+ integration.test.js -- Test case for integration 

.babelrc -- for tests and the test packages
.gitignore -- having git ignore certain files containing sensitive info
Dockerfile -- file for uploading repo to render for online deployment
MainMenu.html -- Main menu UI code and page
README.md -- Readme file on github describing the project
README1HowToRunLocally.txt -- Details how to run the game on your local machine
README2 -- How to install "Jest" to run test cases
README3 -- Installing puppeteer to run test cases
apache.conf -- config for uploading to render
docer-compose.yml -- yml for uploading to render
game.html -- Loading main game html
game.js -- javascript code for creating, preloading, and updating during gameplay
mainMenu.js -- (RUN THIS LOCALLY TO BEGIN PLAYING) The main menu UI javascript
package-lock.json -- Info on packages installed with NPM
package.json -- Installed NPM packages, dependancies, and program info
pauseMenu.js -- Code for the in game pause menu
style.css -- CSS file for stylizing the game 