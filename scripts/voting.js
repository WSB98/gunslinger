// Assuming that we have access to the vote count
const voteCount = {
    yea: 60,
    nay: 40,
  };
  



//sentiment section
const sentimentCounts = {
    saddest: 5,
    sad:12,
    neutral:38,
    happy:25,
    happiest:20
};



async function randomize(){
  const tones = Object.keys(sentimentCounts);
  const values = Object.values(sentimentCounts);
  const randomizedValues = values.map((value, index) => {
    const randomIndex = Math.floor(Math.random() * tones.length);
    const randomTone = tones[randomIndex];
    const randomValue = sentimentCounts[randomTone];
    return randomValue;
  });
  const randomizedSentiments = {};
  tones.forEach((tone, index) => {
    randomizedSentiments[tone] = randomizedValues[index];
  });
  return randomizedSentiments;
}



async function calculateSizes(counts){
  const saddestBar = document.querySelector('.saddest-vote');
  const sadBar = document.querySelector('.sad-vote');
  const neutralBar = document.querySelector('.neutral-vote');
  const happyBar = document.querySelector('.happy-vote');
  const happiestBar = document.querySelector('.happiest-vote');

  const totalSent = Object.values(counts).reduce((acc, val) => acc + val);

  var saddestPct = Math.round(((counts.saddest / totalSent) * 100) * 100) / 100;
  var sadPct = Math.round(((counts.sad / totalSent) * 100 ) * 100) / 100;
  var neutralPct = Math.round(((counts.neutral / totalSent) * 100) * 100) / 100;
  var happyPct = Math.round(((counts.happy / totalSent) * 100) * 100) / 100;
  var happiestPct = Math.round(((counts.happiest / totalSent) * 100) * 100) / 100;

  // Set the width of the yea and nay bars
  saddestBar.style.width = `${saddestPct}%`;
  sadBar.style.width = `${sadPct}%`;
  neutralBar.style.width = `${neutralPct}%`;
  happyBar.style.width = `${happyPct}%`;
  happiestBar.style.width = `${happiestPct}%`;

  saddestBar.innerText = `${saddestPct}%`;
  sadBar.innerText = `${sadPct}%`;
  neutralBar.innerText = `${neutralPct}%`;
  happyBar.innerText = `${happyPct}%`;
  happiestBar.innerText = `${happiestPct}%`;

  // Get the vote bar elements
  const yeaBar = document.querySelector('.yea');
  const nayBar = document.querySelector('.nay');

  // Calculate the percentages of yea and nay
  const totalVotes = voteCount.yea + voteCount.nay;
  const yeaPercentage = Math.round((voteCount.yea / totalVotes) * 100);
  const nayPercentage = Math.round((voteCount.nay / totalVotes) * 100);

  // Set the width of the yea and nay bars
  yeaBar.style.width = `${yeaPercentage}%`;
  nayBar.style.width = `${nayPercentage}%`;
  yeaBar.innerText = `${yeaPercentage}%`;
  nayBar.innerText = `${nayPercentage}%`;

}
var newSaddest = 0;
var newSad = 0;
var newNeutral = 0;
var newHappy = 0;
var newHappiest = 0;

calculateSizes(sentimentCounts);

async function setRandom(){
    for(i=0;i<5;i++){

    await randomize().then(data => {
      newSaddest = Math.round(data.saddest)
      newSad = Math.round(data.sad)
      newNeutral = Math.round(data.neutral)
      newHappy = Math.round(data.happy)
      newHappiest = Math.round(data.happiest)
    });

  
    await calculateSizes({saddest:newSaddest, sad:newSad, neutral:newNeutral, happy:newHappy, happiest:newHappiest})
  }
}

setRandom();


