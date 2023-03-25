




/* This template was created by bkr_studio --> I suggest you read through all of this! (:

    this file is where hte NFT authentiacation happens and it is important you understand
    what is going on here so you can add your own NFT to this template.
    
    There will be things taht are different, and you will need to do some problem solving.

    firstly, we are using the Internet Computer blockchain because of its low cost, high speed, 
    wide availability of docs, and on-chain benefits if you choose to go that route later.

    Thw wallet we are going to use is Plug Wallet, a popular option on ICP, find it here
    (https://chrome.google.com/webstore/detail/plug/cfbfdhimifdmdehjmkdobpcjfefblkjm)
    (https://plugwallet.ooo)
    
    the "nnsCanisterID" variable is the canister of YOUR NFT. right now, it is set the the 
    Galactic Saloon: Space Cowboys canister
    
    If you want to be able to use the same functions for canister calls as this file, then
    you will mint your NFTs on (https://ICPSwap.com)
        this costs 8 ICP to create the canister, then the rest of minting is free.
        there are other minting options, many more economical, but this is the canister used for
        this collection
        
    in line 60 - 78 we are calling the plug wallet to request a connection to the user
    and then storing their information for authentication, and some UI display
    
    in line 84 we query the canister using IDL service and a Plug Wallet Actor to get the registry
    of NFT holders
    
    we see if the current user is in the registry and if they are,  we save the ID of the NFTs they own
    to local storage so they can be shown later
    
    if the user does not own the NFT, the site boots them back to the login page
    
    at the bottom of the page, you will see the if statements that are responsible for security. it is 
    liekly that you will need to add more or remove some of the ones i have used for your project*/









// set vars
var result = false;
var userID;
var cowboysArray = [];
var loginBtn = document.getElementById('loginBtn')

// these are used to save objects to local storage instad of just plain text
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}


// if we are on loginPage, then we will add this event listener and let the user authenticate
if('login.html' === window.location.href.split('/')[window.location.href.split('/').length - 1]){
  document.getElementById('loginBtn').addEventListener('click', async (e) => {

    //run on all pages 
    (async () => {
      // Canister Ids
      const nnsCanisterId = 'y5ntm-piaaa-aaaag-qarta-cai' // Galactic Saloon canister --> needs to be changed to YOUR CANISTER ID
    
      // Whitelist
      const whitelist = [
        nnsCanisterId,
      ];
    
      // Host
      const host = "https://mainnet.dfinity.network"; // Connects us to the dfinity network / ICP Blockchain
    
      // Callback to print sessionData
      const onConnectionUpdate = () => {
      }
    
      // Make the request
      try {
        const publicKey = await window.ic.plug.requestConnect({
          whitelist,
          host,
          onConnectionUpdate,
          timeout: 50000
        });
        
        localStorage.setItem('principalID',await window.ic.plug.agent.getPrincipal()); // Principal ID --> these are two different types of wallet identifiers used on ICP
        localStorage.setItem('accountID',await window.ic.plug.accountId); // Account ID
        userID = localStorage.getItem('principalID')
        accountID = localStorage.getItem('accountID')


        // A partial Interface factory
        // for the NNS Canister UI
        // Check the `plug authentication - nns` for more
        const nnsPartialInterfaceFactory = ({ IDL }) => {
          
          return IDL.Service({
            'getRegistry' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat32,IDL.Text))], ['query']), //query the Canister for the registry of holders
          });
        };

        // Create an actor to interact with the NNS Canister
        // we pass the NNS Canister id and the interface factory
        const NNSUiActor = await window.ic.plug.createActor({
          canisterId: nnsCanisterId,
          interfaceFactory: nnsPartialInterfaceFactory,
        });

        // We can use any method described in the Candid (IDL)
        // for example the get_stats()
        // See https://github.com/dfinity/nns-dapp/blob/cd755b8/canisters/nns_ui/nns_ui.did

        

        
        
        const stats = await NNSUiActor.getRegistry();

        for(i=0;i < stats.length;i++){ // on login success, we are saving all the links to owned cowboys in an array, simultaneously saving their IDs
          var wallet = stats[i][1]
          var cowboy = stats[i][0]
          if(wallet == window.ic.plug.accountId){ //login success
            if(i > 90){
              cowboysArray.push(`https://y5ntm-piaaa-aaaag-qarta-cai.raw.ic0.app/${cowboy + 42}`)
            }
            else if(i > 72){
              cowboysArray.push(`https://y5ntm-piaaa-aaaag-qarta-cai.raw.ic0.app/${cowboy + 41}`)
            }
            else if(i > 26){
              cowboysArray.push(`https://y5ntm-piaaa-aaaag-qarta-cai.raw.ic0.app/${cowboy + 3}`)
            }
            else{
              cowboysArray.push(`https://y5ntm-piaaa-aaaag-qarta-cai.raw.ic0.app/${cowboy + 2}`)
            }
            
         

            await localStorage.setItem('isLoggedIn','true')

          }
        };

        //set an array of owned cowboys in local storage
        localStorage.setObj('ownedCowboys',cowboysArray)

        if(localStorage.getItem('isLoggedIn') !== 'true'){ //redirected to login
          await localStorage.setItem('isLoggedIn','false')
          var tempString = "could not find NFT"
          loginBtn.innerHTML = ''
          for (var j = 0; j < tempString.length; j++) {
            (function(j) {
                setTimeout(function() {
                loginBtn.innerHTML += tempString.charAt(j);
              }, j*50);
            })(j);
          }
        }
        else{

          var tempString = "welcome back!"
          loginBtn.innerHTML = ''
          for (var j = 0; j < tempString.length; j++) {
            (function(j) {
                setTimeout(function() {
                loginBtn.innerHTML += tempString.charAt(j);
              }, j*50);
            })(j);
          }

          setTimeout(async function(){
            window.location.assign('index.html')
          },1500)
           // if login was set to true then the user will be directed to index
        }
        



      } catch (e) {
        console.log(e);
      }
    })();
  
  
  });
  
  
  
}

// check if connected AND if the user's current principal matches localStorage - if not, boot to sign-in page
// if we are NOT on the login page, we run this code
if(window.location.href.split('/')[window.location.href.split('/').length - 1] !== 'login.html'){
  (async () => {

  try{
    const result = await window.ic.plug.isConnected();

  if(!result){ //plug is not connected
    window.location.assign('login.html')
  }
  if(localStorage.getItem('principalID') !== window.ic.plug.sessionManager.sessionData.principalId){ //localStorage address does not match the current plug wallet
      window.location.assign('login.html')
  }
  if(localStorage.getItem('isLoggedIn') === 'false'){ //the login variable is set to false
    window.location.assign('login.html')
  }
  }
  catch{
    window.location.assign('login.html')
  }
  

  
})()
}



