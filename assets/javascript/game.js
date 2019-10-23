$(document).ready(function(){
    var computerNumber=Math.floor(Math.random()(113=+13))

$('#scoreToMatch').text(Random);

var computerNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

var wins = 0;
var loses = 0;
var playerscore = 0;

// reset the game

function resetGame() {
    computerNumber = Math.floor((Math.random() * 100) + 1);
    crystal1 = Math.floor((Math.random() * 10) + 1);
    crystal2 = Math.floor((Math.random() * 10) + 1);
    crystal3 = Math.floor((Math.random() * 10) + 1);
    crystal4 = Math.floor((Math.random() * 10) + 1);

    playerscore = 0;
    console.log("computernumber; " + computerNumber);
    $("#computerNumberArea").html(computerNumber);

    $("#crystal1Area").data("amount", crystal1);
    console.log($("#crystal1Area").data("amount"));

    $("#crystal2Area").data("amount", crystal2);
    console.log($("#crystal2Area").data("amount"));

    $("#crystal3Area").data("amount", crystal3);
    console.log($("#crystal3Area").data("amount"));

    $("#crystal4Area").data("amount", crystal4);
    console.log($("#crystal4Area").data("amount"));

}

// display wins
function winner() {
    alert("YOU'VE WON!!!");
    wins++;
    $('#wins').text(wins);
    resetGame();
}

//display losing
function loser() {
    alert("Sorry! SUCKS TO SUCK!");
    losses++;
    $('#losses').text(losses);
    resetGame();
}

//crystal buttons

$("#crystal1Area").on("click", function () {
    playerscore = playerscore + crystal1;
    console.log("New playerscore= " + playerscore;
    $("yourScore").text(playerscore);
    if (playerscore == Random) {
        winner();
    }
    else if (playerscore > Random) {
        loser();
    }
})

$("#crystal2Area").on("click", function () {
    playerscore = playerscore + crystal2;
    console.log("New playerscore= " + playerscore;
    $("yourScore").text(playerscore);
    if (playerscore == Random) {
        winner();
    }
    else if (playerscore > Random) {
        loser();
    }
})

$("#crystal3Area").on("click", function () {
    playerscore = playerscore + crystal3;
    console.log("New playerscore= " + playerscore;
    $("yourScore").text(playerscore);
    if (playerscore == Random) {
        winner();
    }
    else if (playerscore > Random) {
        loser();
    }
})

$("#crystal4Area").on("click", function () {
    playerscore = playerscore + crystal4;
    console.log("New playerscore= " + playerscore;
    $("yourScore").text(playerscore);
    if (playerscore == Random) {
        winner();
    }
    else if (playerscore > Random) {
        loser();
    }
})
