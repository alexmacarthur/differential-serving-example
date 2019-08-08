import Dog from './Dog';
import { pickRandom, randomBetween } from './utils';

const possibleBreeds = [
    "Bulldog", 
    "Cocker Spaniel", 
    "Malamute", 
    "Yellow Lab",
    "Australian Shepherd", 
    "Beagle", 
    "Bearded Collie", 
    "Bloodhound"
]

const possibleTricks = [
    "sit",
    "fetch",
    "come",
    "shake", 
    "speak", 
    "roll over", 
    "catch Frisbee",
    "balance treat on nose"
]

const allDogs = [...new Array(10)].map(() => {
    let randomBreed = possibleBreeds[Math.floor(Math.random() * possibleBreeds.length)];
    let randomNumber = randomBetween(0, possibleTricks.length);
    let randomTricks = pickRandom(possibleTricks, randomNumber);

    // Create a dog with a random breed.
    let dog = new Dog(randomBreed);

    // Over time, that dog learns some random tricks.
    dog.learnTricks(randomTricks);

    return dog
});

possibleTricks.forEach(trick => {

    let dogsThatCanDoTrick = allDogs.filter(dog => {
        return dog.canDoTrick(trick);
    });

    console.log(`Out of ${allDogs.length} dogs, ${dogsThatCanDoTrick.length} can ${trick}.`);
});
