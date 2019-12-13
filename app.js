//all variables
var buttons = document.querySelectorAll("button");
var keys = {
    w: ["tom1",  buttons[0]],   //key: ["fileName", button]
    a: ["tom2",  buttons[1]],
    s: ["tom3",  buttons[2]],
    d: ["tom4",  buttons[3]],
    j: ["snare", buttons[4]],
    k: ["crash", buttons[5]],
    l: ["kick",  buttons[6]]
};

//starter function to add event listeners(window + buttons)
function inicializace() {

    //e listener on press key
    window.addEventListener("keypress", function (e) {
        if (e.key in keys) {
            playSound(e.key);
        }
    });

    //e listener on Click a button
    for(i=0; i<buttons.length; i++){
        var btn = buttons[i];

        btn.addEventListener("click", function(){
            playSound(this.textContent);
        })
    }
}

//adding sound on keypress
function playSound(key) {
    var sound = new Audio("sounds/" + keys[key][0] + ".mp3");
    var activeBtn = keys[key][1];

    activeBtn.classList.add("pressed");
    sound.play();

    //quick animation effect
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}

inicializace();

