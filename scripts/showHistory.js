
const historyMenuBtn = document.getElementById('historyTab');
const historyMenu = document.getElementById('historyTable');
const closeHistory = document.getElementById('closeHistory');
const sendNewMessage = document.getElementById('sendMessage');
const dialogueBox = document.getElementById('dialogueBox');
const userInput_message = document.getElementById('userInput');
const historyTable_data = document.getElementById('historyTableData');
const sendMessageButton = document.querySelector('#sendMessage');
const messageInput = document.querySelector('#userInput');
var messageCount = 0;
var progress = 0;
var conversationHTML = ``;
var tokens = 350;
var currUserMessages = [];
var currConversation;
var logID = makeid(8);

//can set arrays and objcts
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//if there are chats in the history of this device, add them to the log
if(localStorage.getItem('history')){
    historyTable_data.innerHTML = localStorage.getItem('history')
}

//open history
historyMenuBtn.addEventListener('click', async (e) => {
    historyMenu.style.transform = 'translate(0px,0px)';
    historyMenuBtn.style.transform = 'translate(-1000px,0px)';
});

//close history
closeHistory.addEventListener('click', async (e) => {
    historyMenu.style.transform = 'translate(-1000px,0px)';
    historyMenuBtn.style.transform = 'translate(0px,0px)';
});

//send a new message
sendNewMessage.addEventListener('click', async (e) => {
    sendMessageButton.classList.add('spinner');

    if(userInput_message.value !== ""){
        e.preventDefault();
    //progress of the message to animate on screen
    progress = 10;
    sendNewMessage.disabled = true;
    messageCount+=1;

    var userMsg = userInput_message.value;
    const prompt = `${userMsg}`;
    
    // collects all messages in the history and 
    currUserMessages.push({"role":"user","content":prompt});
    
    progress = 25;

    //user message
    dialogueBox.innerHTML += `<div class='userMessage align-left'>${userMsg}</div> <br>`;
    conversationHTML += `<div class='userMessage align-left'>${userMsg}</div> <br>`;
    //scroll to the bottom with every message
    dialogueBox.scrollTo(0,2000 * messageCount);

    userInput_message.value = '';

    //api message

    /* REPLACE WITH YOUR OWN LAMBDA FUNCTION */
    let apiKey;
    let txt;
    var YOUR_LAMBDA_ENDPOINT = '';
    await fetch(`${YOUR_LAMBDA_ENDPOINT}`, {
        method: 'POST',
    })
    .then(response => response.text())
    .then(data => apiKey = data)

    progrsss = 60;

    
    //call openai api
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": currUserMessages,
          "temperature": 0.35,
          "max_tokens": tokens,
          "top_p": 1,
          "frequency_penalty": 0.0,
          "presence_penalty": 0.0
        })
      }
    ).then(response => response.json())
    .then(data => {
        //replace /n with <br> for HTML rendering 
        //replace backticks with code tags
        // make any HTML code non-renderable
        txt = data['choices'][0]['message']['content'].replace(/<(.+?)>/g, "&lt$1&gt") //replaces all tags 
        txt = txt.replace(/(?:\r\n|\r|\n)/g, '<br>') //replaces all new lines 
        txt = txt.replace(/```(.+?)```/g, "<pre><code>$1</code></pre>") //repalces backticks to be pre/code

    })
    .catch(error => console.error(error))

    
    
    progress = 100;

  
    currUserMessages.push({'role':'assistant','content':`${txt}`})
    dialogueBox.innerHTML += `<div class='chatResponse align-left'>${txt}</div> <br>`
    conversationHTML += `<div class='chatResponse align-left'>${txt}</div> <br>`

    

    currConversation = currUserMessages;

    if(messageCount === 1){
        historyTable_data.innerHTML+=   `<tr id="history${logID}" class="trow">
                                            <td id='topic${logID}' class="tdata">${userMsg.slice(0,20) + '...'}</td>
                                            <td id='data${logID}' class="hidden_column">${currConversation}</td>
                                        </tr>`
    }
    else{
        document.getElementById(`data${logID}`).innerHTML = currConversation;
    }

    localStorage.setObj(`data${logID}`,currConversation)
    localStorage.setItem(`history`,historyTable_data.innerHTML)
    localStorage.setItem(`conversationHTML${logID}`,conversationHTML)

    

    //scroll to the bottom with every message
    dialogueBox.scrollTo(0,2000 * messageCount);

    sendNewMessage.disabled = false;
    
    
    }

    sendMessageButton.classList.remove('spinner');
    
});

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


//change the converation to one from local history
historyTable_data.addEventListener('click', async (e) => {
    //if we click the head, do nothing
    if(e.target.className === 'thead IBM-monospace'){
        //do nothing
    }
    else{
        // get the ID generated for that converastion
        var target = e.target.id.split('topic')[1];
        // get the stored object of the conversation history
        var storedConversation = localStorage.getObj(`data${target}`);

        //set the current converastions messages to the stored one under the given ID
        currUserMessages = storedConversation;

        //set the ID to the target so history does not get messed up when continuing the conversation
        logID = target;

        //set the innerHTML of dialogueBOX to the messages from localHistory
        dialogueBox.innerHTML = localStorage.getItem(`conversationHTML${target}`)

        conversationHTML = localStorage.getItem(`conversationHTML${target}`)

        messageCount=2;
    }
});







