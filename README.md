# documentsDims

Rock Paper Scissors Game 

Vi skal bruge en container med vores spillenavn (og score)
Så skal vi bruge en anden container med vores sten, saks og papir disse kan være buttons 
og så skal vi bruge en computer der tilfældigt vælger sten, saks eller papir (og som gemmer og viser vores score i span #score)


HTML :

header >
    h1 > Rock Paper Scissors
    (p > score 
        span > (score)
    )
/>

main > 
    button >
        img/svg/i > sten
    button > 
        img/svg/i > saks
    button >
        img/svg/i > papir
/>

JavaScript :

on player chosse by click > 

math.random : 
 if <= 0.33 (33%)
    rock
 else if <= 0.66 (33%)
    paper
 else 
    scissors


if computer == player 
    no one wins
else if computer == rock && player == scissors
    computer wins
else if computer == scissors && player == paper
    computer wins
else if computer == paper && player == rock
    computer wins
else 
    player wins