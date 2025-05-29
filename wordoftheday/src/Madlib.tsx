import React from 'react'

const Madlib = (props: { word: string, wordtype: string }) => {
    const [variation] = React.useState<number | null>(Math.floor(Math.random() * 5) + 1)
    const names = ['Logan', 'Maggi', 'India', 'David']
    const nouns = ["toaster", "banana", "unicorn", "taco", "pineapple", "dumpster", "robot", "wig", "llama", "toenail"];
    const pronouns = ["he", "she", "they", "it", "we", "you", "I", "them", "him", "her"];
    const adjectives = ["slimy", "fluffy", "invisible", "sparkly", "hairy", "crusty", "bubbly", "grumpy", "tiny", "loud"];
    const adverbs = ["awkwardly", "lazily", "quickly", "noisily", "sneakily", "gracefully", "oddly", "horribly", "joyfully", "dramatically"];
    const prepositions = ["under", "over", "between", "around", "beneath", "beside", "inside", "on top of", "near", "behind"];
    const conjunctions = ["and", "but", "or", "yet", "so", "because", "although", "unless", "while", "since"];
    const interjections = ["Wow", "Yikes", "Oops", "Aha", "Whoa", "Eek", "Oof", "Yippee", "Bingo", "Huzzah"];
    const articles = ["a", "an", "the", "A", "An", "The", "some", "any", "this", "that"];

    function shuffleArray(arr: Array<string>) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
        }
        return arr;
    }

    shuffleArray(names);
    shuffleArray(nouns);
    shuffleArray(pronouns);
    shuffleArray(adjectives);
    shuffleArray(adverbs);
    shuffleArray(prepositions);
    shuffleArray(conjunctions);
    shuffleArray(interjections);
    shuffleArray(articles);
    let name1 = names[0];
    let name2 = names[1];
    let name3 = names[2];
    let name4 = names[3];
    let noun = nouns[0];
    let pronoun = pronouns[0];
    let adjective = adjectives[0];
    let adverb = adverbs[0];
    let preposition = prepositions[0];
    let conjunction = conjunctions[0];
    let interjection = interjections[0];
    let article = articles[0];
    

    switch (props.wordtype) {
        case 'noun':
            noun = props.word;
            break;
        case 'verb':
            noun = props.word + 'ing'; // simple verb to gerund conversion
            break;
        case 'adjective':
            adjective = props.word;
            break;
        case 'adverb':
            adverb = props.word;
            break;
        case 'pronoun':
            pronoun = props.word;
            break;
        case 'interjection':
            interjection = props.word;
            break;
        case 'preposition':
            preposition = props.word;
            break;
        case 'conjunction':
            conjunction = props.word;
            break;
        case 'article':
            article = props.word;
            break;
        default:
            noun = props.word; // default to noun if type is unknown
            break;
    }



    return (
        <>
            <p className="text-md md:text-lg text-gray-600">
                MadLib: <span className="font-medium">{ }</span>
            </p>
            {variation === null && <p>Loading...</p>}
            {variation === 1 && <p className="text-md md:text-lg text-gray-600 font-medium">
                {interjection}! Today is {name1}'s birthday.
                 {name2} brought {article} {adjective} {noun} to the party,
                and {name3} danced {adverb} {preposition} the table.
                 {pronoun} thought it was odd, {conjunction} {name4} loved it!</p>}
            {variation === 2 && <p className="text-md md:text-lg text-gray-600 font-medium">
                {interjection}! The substitute teacher was {name1},
                and {name2} kept throwing {article} {adjective} {noun}.
                {name3} shouted {adverb} from {preposition} the desk,
                {pronoun} tried to help, {conjunction} {name4} made it worse.</p>}
            {variation === 3 && <p className="text-md md:text-lg text-gray-600 font-medium">
                {name1} and {name2} went exploring.
                Suddenly, {article} {adjective} {noun} jumped out {preposition} the bushes!
                {interjection}! yelled {name3}, while {name4} ran {adverb}.
                {pronoun} followed, {conjunction} forgot the snacks.</p>}
            {variation === 4 && <p className="text-md md:text-lg text-gray-600 font-medium">
                {name1} was the leader, {name2} could fly,
                and {name3} threw {article} {adjective} {noun} like no other.
                {interjection}! cried {name4}, who arrived {adverb}
                {preposition} the building. {pronoun} cheered, {conjunction} fell over.</p>}
            {variation === 5 && <p className="text-md md:text-lg text-gray-600 font-medium">
                {name1} ordered {article} {adjective} {noun},
                but {name2} got the wrong dish {preposition} the tray.
                {name3} shouted {interjection}, {adverb} flinging a fork.
                {pronoun} ducked, {conjunction} {name4} just kept eating.</p>}
        </>
    )
}

export default Madlib
