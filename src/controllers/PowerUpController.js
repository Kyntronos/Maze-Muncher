//written by: Kyle C
//tested by: Kyle C
//debugged by: Kyle C

export class powerUp {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }

    onPickup(player){
        //Animation? Sound affect?
    }

    activate(player){
        //Override in the subclasses for powerups...
        //console.warn(`${this.name} has no active effect. Find another item!`);
    }
}

export class PotatoPowerUp extends powerUp {
    constructor(){
        super('Lazy Timer', 'potato_yellow.png');
    }

    activate(player){
        console.log(`${this.name} activated!`);
        const scene = player.scene;
        scene.scoreMultiplier += 0.25;

        scene.multiplierText.setText(`Multiplier: x${scene.scoreMultiplier.toFixed(2)}`);
        scene.showMessage?.("Who's keeping track anyway? (+0.25 to multiplier!)");
    }
}

export class CornPowerUp extends powerUp {
    constructor() {
        super('Stonks', 'Corn.png');
    }

    activate(player) {
        console.log("CornPowerUp activate() method called.");
        const scene = player.scene;
        console.log("Player object in activate():", player);
        console.log("Scene object in activate():", scene);

        try {
            scene.score += 2000;

            if (scene.scoreText?.setText) {
                console.log("Setting new score text.");
                scene.scoreText.setText(`Score: ${scene.score}`);
            } else {
                console.warn("scoreText object is undefined or invalid.");
            }
            
            console.log("CornPowerUp activated. Score increased by 2000.");
        } catch (error) {
            console.error("Error in CornPowerUp activate():", error);
        }
    }
}
