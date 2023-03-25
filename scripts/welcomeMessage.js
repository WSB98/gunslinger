window.addEventListener('load', async function() {
    var typingText = document.querySelector('.typing-animation p');
    var subHeaderText = document.getElementById('subheader');
    var pID = localStorage.getItem('principalID');
    var beginning = pID.substring(0, 5)
    var ending = pID.substring(pID.length - 3, pID.length)
    var text = `Hello ${beginning} ... ${ending}`;
    var subheading = 'welcome back to the Galactic Saloon'
   
  
    for (var i = 0; i < text.length; i++) {
      (function(i) {
        setTimeout(function() {
          typingText.innerHTML += text.charAt(i);
        }, i*100);
      })(i);
    }
 

    for (var j = 0; j < subheading.length; j++) {
        (function(j) {
            setTimeout(function() {
            subHeaderText.innerHTML += subheading.charAt(j);
          }, j*50);
        })(j);
      }
  });