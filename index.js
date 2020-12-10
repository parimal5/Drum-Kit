for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btninnerHTML = this.innerHTML;

        makesSound(btninnerHTML);
        btnAnimation(btninnerHTML);
    });
}


document.addEventListener("keydown", function (event) {

    makesSound(event.key);
    btnAnimation(event.key);

});


function makesSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sound/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            break;
    }
}


function btnAnimation(currentKey){

    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}



