function evalPerfomance(scores,players){
    console.log('scores: ' + scores);

    const outstandingScores = scores.filter(score => score > 7)

    const outstandingPlayers = outstandingScores.map(player => players[scores.indexOf(player)])

    const indices = outstandingScores.map(score => scores.indexOf(score))

    outstandingScores.forEach(() =>{
        scores.sort((a,b) => b-a)
        scores.splice(indices,1)
    })
     
    const regularPlayers = players.filter((player, index) => indices.indexOf(index) === -1);
    
    console.log('outstandingScores: ' + outstandingScores);
    console.log('outstandingPlayers: ' + outstandingPlayers);
    console.log('scores nuevos : ' + scores);
    console.log('regularPlayers: ' + regularPlayers);
}

const scores = [10,9,5,7,3,3,8,5];

const players = ['Messi', 'Di Maria', 'A. Gomez', 'De Paul', 'Pezzella', 'Almada', 'Paredes','Acuña']

evalPerfomance(scores,players);









