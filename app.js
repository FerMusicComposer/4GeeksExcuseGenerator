function excuseGenerator() {
    let who = ['My dog ', 'The FBI ', 'An alien ', 'Maduro '];
    let action = [
        'pooped all over ',
        'inspected my house and burned ',
        'abducted ',
        'expropriated ',
    ];
    let what = ['my homework ', 'my project ', 'my notebooks ', 'my computer '];
    let when = [
        'when I just finished it',
        'when I went to bed',
        'when I was about to start studying',
        "Just because he's a mamaguebo",
    ];
    let excuse = '';

    function pickRandomWord(wordlist) {
        let wordlistLength = wordlist.length;
        let randomNumber = Math.floor(Math.random() * wordlistLength);

        return wordlist[randomNumber];
    }

    excuse =
        pickRandomWord(who) +
        pickRandomWord(action) +
        pickRandomWord(what) +
        pickRandomWord(when);

    document.getElementById('excuses').innerHTML = excuse;

    return excuse;
}

console.log(excuseGenerator());
