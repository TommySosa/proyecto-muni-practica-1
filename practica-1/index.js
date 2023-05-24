const scores = [10,9,5,7,3,3,8,5];

const outstandingScores = scores.filter(score => score > 7)

const players = ['Messi', 'Di Maria', 'A. Gomez', 'De Paul', 'Pezzella', 'Almada', 'Paredes','Acuña']


const outstandingPlayers = outstandingScores.map(player => players[scores.indexOf(player)])

const indices = outstandingScores.map(score => scores.indexOf(score))

outstandingScores.forEach(() =>{
    scores.sort((a,b) => b-a)
    scores.splice(indices,1)
})





console.log('scores: ' + scores);
console.log('outstandingScores: ' + outstandingScores);
console.log(outstandingPlayers);
console.log(indices);
console.log('scores nuevos : ' + scores);