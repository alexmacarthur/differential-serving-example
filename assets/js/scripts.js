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
];

const possibleTricks = [
    "sit",
    "fetch",
    "come",
    "shake", 
    "speak", 
    "roll over", 
    "catch Frisbee",
    "balance treat on nose"
];

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

const $trickList = document.getElementById('trickList');
const $breedList = document.getElementById('breedList');

possibleTricks.forEach(possibleTrick => {

    let dogsThatCanDoTrick = allDogs.filter(dog => {
        return dog.canDoTrick(possibleTrick);
    });

    let textToAppend = `<li>Out of ${allDogs.length} dogs, ${dogsThatCanDoTrick.length} can ${possibleTrick}.</li>`;

    $trickList.insertAdjacentHTML('beforeend', textToAppend);
});

possibleBreeds.forEach(possibleBreed => {
    let dogsOfPossibleBreed = allDogs.filter(dog => {
        let { breed } = dog;
        return breed === possibleBreed;
    });

    let textToAppend = `<li>Out of ${allDogs.length} dogs, ${dogsOfPossibleBreed.length} are of this breed: ${possibleBreed}.</li>`;

    $breedList.insertAdjacentHTML('beforeend', textToAppend);
});
