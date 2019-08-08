export default class {
    constructor(breed) {
        this.breed = breed;
        this.isSleeping = false;
        this.tricks = [];
    }

    speak(words = "Bark!") {
        
        if(this.isSleeping) {
            return "zzz...";
        }

        return words;
    } 

    poop() {
        return "💩";
    }

    goToSleep() {
        this.isSleeping = true;
    }

    wakeUp() {
        this.isSleeping = false;
    }

    learnTricks(newTricks = []) {
        this.tricks = [...this.tricks, ...newTricks];
    }

    canDoTrick(trick) {
        return this.tricks.includes(trick);
    }
}
