//A JavaScript random message generator program
//Random messages stored in arrays
const rainbow = ['Violet','Indigo','Blue','Green','Yellow','Orange','Red'];
const seasons = ['Spring','Summer','Autum','Winter'];
const continents = ['Asia','Africa','North America','South America','Europe','Antartica','Australlia'];
//Based on the array size the maximum number is derived
const rainbowNum = Math.floor(Math.random() * 7);
const seasonsNum = Math.floor(Math.random() * 4);
const continentNum = Math.floor(Math.random() * 7);
//3 main groups of array we have to generate random text
var numb = Math.floor(Math.random() * 3);
//console.log(`Rainbow: ${rainbowNum}, Seasons: ${seasonsNum}, Continents: ${continentNum}`)
if (numb === 1) { // check if the random group is 1(rainbow) out of 3 
    console.log(`Rainbow has ${rainbow[rainbowNum]} color.`);
}else if (numb === 2) { //check if the random group is 2(seasons) out of 3
    console.log(`Seasons have ${seasons[seasonsNum]} as one of them.`);
}else if (numb === 3) { //check if the random group is 3(continents) out of 3
    console.log(`Continents have ${continents[continentNum]} as one of the them.`);
}
else{ //default if the random number is 0
    console.log(`Try your luck again!`);
}

