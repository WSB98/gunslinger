var holder = document.getElementById('ownedCowboysCollection');
var header = document.getElementById('discussionTitle');
var ownedCowboyLinks = localStorage.getObj('ownedCowboys');
var clickedAlready = false;
var cowboyDiv;
var imgLink;
var nftIDs = [];

header.innerHTML += `<h6>Collection of ${ownedCowboyLinks.length}</h6>`

for (i = 0; i < ownedCowboyLinks.length; i++) {
    nftIDs.push(ownedCowboyLinks[i].split('/')[3]);
    holder.innerHTML += `<div class='IBM-monospace nftDiv' id='${ownedCowboyLinks[i].split('/')[3]}'><img class='cowboyPicture' src=${ownedCowboyLinks[i]}></img></div>`;
    var currDiv = document.getElementById(`${ownedCowboyLinks[i].split('/')[3]}`);
    var newPseudoElement = document.createElement("div");
    var realID;
    if(i > 90){
        realID = ownedCowboyLinks[i].split('/')[3] - 42
      }
      else if(i > 72){
        realID = ownedCowboyLinks[i].split('/')[3] - 41
      }
      else if(i > 26){
        realID = ownedCowboyLinks[i].split('/')[3] - 3
      }
      else{
        realID = ownedCowboyLinks[i].split('/')[3] - 2
      }
    newPseudoElement.textContent = `${realID}`;
    newPseudoElement.id = `id${realID}`
    currDiv.appendChild(newPseudoElement);
  }
  

document.body.addEventListener('click', async(e) => { // clicked inside body
    if(e.target.className === 'cowboyPicture'){ //clicked on an NFT
        if(clickedAlready){ //close the old one, replace inner html w original
            
            document.getElementById(`${cowboyDiv}`).style.height = '360px';
            
            var tempID = document.getElementById(cowboyDiv).id
            
            if(tempID > 90){
                tempID = tempID - 42
              }
              else if(tempID > 72){
                tempID = tempID - 41
              }
              else if(tempID > 26){
                tempID = tempID - 3
              }
              else{
                tempID = tempID - 2
              }

            console.log(tempID)
            document.getElementById(cowboyDiv).innerHTML = `<img class='cowboyPicture' src=${imgLink}></img>`
            var newPseudoElement = document.createElement("div");
            newPseudoElement.textContent = `${tempID}`;
            newPseudoElement.id = `id${tempID}`
            document.getElementById(cowboyDiv).appendChild(newPseudoElement);

            clickedAlready = false;
            
        }
        else{
            // set the variables of what has been clicked
            cowboyDiv = e.target.closest('div').id
            var tempID;
            if(cowboyDiv > 90){
                tempID = cowboyDiv - 42
              }
              else if(cowboyDiv > 72){
                tempID = cowboyDiv - 41
              }
              else if(cowboyDiv > 26){
                tempID = cowboyDiv - 3
              }
              else{
                tempID = cowboyDiv - 2
              }
            clickedAlready = true;
            imgLink = e.target.closest('img').src

            //expand the clicked div
            document.getElementById(cowboyDiv).classList.add('cowboyDetailsMenu')

            document.getElementById(`${cowboyDiv}`).style.height = '600px';

            //create a new div for the details and fill it with the HTML
            var detailsDiv = document.createElement('div');
            detailsDiv.className = 'cowboyDetails';
            detailsDiv.innerHTML = `<p class='align-left retainWidth'>
                                    <br> Details: <br><br>
                                    Link: <a target="_blank" style="color:var(--background)" href="${imgLink}">Open NFT</a><br>
                                    Market: <a target="_blank" style="color:var(--background)" href="https://app.icpswap.com/marketplace/NFT/view/y5ntm-piaaa-aaaag-qarta-cai/${tempID}">ICPSwap Market</a> <br>
                                    </p>`;

            //append the details div to the expanded area
            document.getElementById(cowboyDiv).appendChild(detailsDiv);

            //get the details text
            var detailsText = detailsDiv.innerHTML;

            //clear the details div
            detailsDiv.innerHTML = '';

            //parse the HTML string into DOM nodes
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = detailsText;
            var childNodes = tempDiv.childNodes;

            //type out and render the details
            for (var i = 0; i < childNodes.length; i++) {
                (function(i) {
                    setTimeout(function() {
                        detailsDiv.appendChild(childNodes[i]);
                        // delegate the click event to the <a> tags
                        detailsDiv.addEventListener('click', function(event) {
                            if (event.target.tagName === 'A') {
                                window.open(event.target.href, '_blank');
                            }
                        });
                    }, i*10);
                })(i);
            }
        }
    }
});



