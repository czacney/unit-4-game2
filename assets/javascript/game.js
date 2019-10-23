var computerNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var loses = 0;
var playerscore = 0;
function resetGame() {
    computerNumber = Math.floor((Math.random() * 100) + 1);
    crystal1 = Math.floor((Math.random() * 10) + 1);
    crystal2 = Math.floor((Math.random() * 10) + 1);
    crystal3 = Math.floor((Math.random() * 10) + 1);
    crystal4 = Math.floor((Math.random() * 10) + 1);

    playerscore = 0;
    console. log("computernumber; "+ computerNumber);
    $("#computerNumberArea").html (computerNumber);

    $("#crystal1Area").data("amount", crystal1);
    console.log($("#crystal1Area").data("amount"));

}


resetGame() 