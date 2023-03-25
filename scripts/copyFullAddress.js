document.querySelector('.neuronAddress').addEventListener('click', async (e) => {
    var neuronAddress = 'bbe1342f954ecbe2d3f1eb7208c3ea83d7f91586922dfe906a11772f3bb0cb2d';
    var copiedMessage = 'Copied To Clipboard!';
    document.querySelector('.neuronAddress').innerText = '';
    document.querySelector('.neuronAddress').classList.add('neumorphicOut')
    document.querySelector('.neuronAddress').style.border = '1px solid #00000000'

    for (var i = 0; i < copiedMessage.length; i++) {
        (function(i) {
          setTimeout(function() {
            document.querySelector('.neuronAddress').innerHTML += copiedMessage.charAt(i)
          }, i*100);
        })(i);
      }
    

    // using the navigator to copy to clipboard and if user is on unsupported browser
    //  then we use execute dom method
    if (navigator.clipboard) {
        // Clipboard API is supported, use it to copy text to clipboard
        navigator.clipboard.writeText(neuronAddress)
          .then(() => {
            console.log("Text copied to clipboard");
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      } else {
        // Get the text to copy
        const textToCopy = neuronAddress;

        // Create a new textarea element to hold the text
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;

        // Add the textarea element to the DOM
        document.body.appendChild(textArea);

        // Select the text in the textarea
        textArea.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the textarea element from the DOM
        document.body.removeChild(textArea);

      }

      //reset to original
      await setTimeout( function() {
        resetText()
    },3000);
      
    
});

async function resetText(){
    document.querySelector('.neuronAddress').classList.remove('neumorphicOut');
    document.querySelector('.neuronAddress').style.border = '1px solid var(--foreground)';
    document.querySelector('.neuronAddress').innerHTML = 'bbe13...0cb2d';
}