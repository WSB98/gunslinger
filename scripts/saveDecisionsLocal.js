/* save sentiment and vote locally */
document.getElementById('sentimentDiv').addEventListener('click', async (e) => {
    var sentimentLevel = e.target.closest('input').id;
    localStorage.setItem('userSentimentLevel',sentimentLevel);
  });
  document.getElementById('votingDiv').addEventListener('click', async (e) => {
    var voteDecision = e.target.closest('input').id;
    localStorage.setItem('userVoteDecision',voteDecision);
  });

  //if the localStorage exists, we set the vote to it
  if(localStorage.getItem('userVoteDecision')){
    document.getElementById(localStorage.getItem('userVoteDecision')).click();
  }
  if(localStorage.getItem('userSentimentLevel')){
    document.getElementById(localStorage.getItem('userSentimentLevel')).click();
  }
  


  // remove the decisions from local storage when a new proposal comes in
  async function removeLocalDecisions(){
    localStorage.removeItem('userSentimentLevel')
    localStorage.removeItem('userVoteDecision')
  }