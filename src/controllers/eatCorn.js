//written by: Dawsyn B
//tested by: Dawsyn B
//debugged by: Dawsyn B

import * as GhostBehavior from "./ghostBehaviors.js";
import { endGame } from "./gameScreens.js";


/**
 * Called when character eats a kernel.
 * - Disables the dot so it no longer appears or collides.
 * - Increments the score by 100 and updates the on-screen score text.
 * - If there are no more active dots, triggers the win condition.
 */
export function eatDot(pacman, dot) {
    // Prevent dot eating during initial delay
    if (!this.canEatDots) return;
  
    dot.disableBody(true, true);
  
    // Play sound
    const volume = parseFloat(localStorage.getItem('mazeMuncher_sfxVol') || 0.8);
    const fx = this.sound.add('dotSfx', { volume });
    fx.play();
    fx.once('complete', () => fx.destroy());
  
    // Score
    this.score += 100;
    this.scoreText.setText('Score: ' + this.score);
  
    if (this.dots.countActive(true) === 0) {
      console.log("ALL DOTS EATEN!");
      endGame.call(this, "win");
    }
  }
  
/**
 * Called when character eats a power bean.
 * - Disables the power bean so it is removed from play.
 * - Switches the game mode to "scared" for the enemies.
 * - Adjusts enemy behavior: sets enemies to scared mode and reduces their speed.
 * - Resets each enemy's "hasBeenEaten" flag.
 */

export function eatPowerPill(pacman, powerPill) {
    // Remove the power pill from the game world.
    powerPill.disableBody(true, true);
  
    // Play power-up sound
    const volume = parseFloat(localStorage.getItem('mazeMuncher_sfxVol') || 0.8);
    const powerSfx = this.sound.add('powerPillSfx', { volume });
    powerSfx.play();
    powerSfx.once('complete', () => powerSfx.destroy());
  
    // Set the current mode to "scared" so enemies behave accordingly.
    this.currentMode = "scared";

    // Change enemy appearance and behavior to reflect the scared state.
    GhostBehavior.setGhostsToScaredMode.call(this);

    // Start the timer that will eventually switch enemy mode.
    GhostBehavior.setModeTimer.call(this, this.scaredModeDuration);

    // Reduce the speed of the enemies.
    this.ghostSpeed = this.speed * 0.5;

   // Mark each enemy as not having been eaten yet.
    this.ghosts.forEach((ghost) => {
      ghost.hasBeenEaten = false;
    });
  }
  

/**
 * Updates the score multiplier over time.
 * - Increases a timer by the delta (time elapsed since the last frame).
 * - Once a full second has elapsed, decreases the multiplier by a fixed rate,
 *   ensuring it doesn't drop below 1.00.
 * - Updates the on-screen multiplier text with the new value.
 *
 * @param {number} delta - The time elapsed since the last update (in ms).
 */
export function updateMultiplier(delta) {
    // Accumulate elapsed time.
    this.timeElapsed += delta;

    // Every 1000 milliseconds (1 second) update the multiplier.
    if (this.timeElapsed >= 1000) {
        // Reset the elapsed time counter.
        this.timeElapsed = 0;

        // Decrease the multiplier if it's above the minimum (1.00).
        if (this.scoreMultiplier > 1) {
            this.scoreMultiplier -= this.decreaseRate;
            // Ensure the multiplier does not drop below 1.00.
            this.scoreMultiplier = Math.max(this.scoreMultiplier, 1.00);
        }

        // Update the multiplier text display with the new value.
        this.multiplierText.setText(`Multiplier: x${this.scoreMultiplier.toFixed(2)}`);
    }
}