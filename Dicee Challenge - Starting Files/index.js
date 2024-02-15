var randomDice1=Math.floor(Math.random() * 6) +1;
var randomDice2=Math.floor(Math.random() * 6) +1;
var dice1image="images/dice"+randomDice1+".png";
var dice2image="images/dice"+randomDice2+".png";
if(randomDice1 > randomDice2)
{
    //player 1 wins
    document.querySelector("h1").innerText="🚩 Player 1 wins";
}
else if(randomDice1 === randomDice2)
{
    document.querySelector("h1").innerText="Draw!";
}
else{
    document.querySelector("h1").innerText="Player 2 wins 🚩";
}

document.querySelector(".img1").setAttribute("src",dice1image);
document.querySelector(".img2").setAttribute("src",dice2image);

