// set vars
var result = false;
var userID;
var cowboysArray = [];

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
      const nnsCanisterId = 'y5ntm-piaaa-aaaag-qarta-cai'
    
      // Whitelist
      const whitelist = [
        nnsCanisterId,
      ];
    
      // Host
      const host = "https://mainnet.dfinity.network";
    
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
        
        localStorage.setItem('principalID',await window.ic.plug.agent.getPrincipal());
        localStorage.setItem('accountID',await window.ic.plug.accountId);
        userID = localStorage.getItem('principalID')
        accountID = localStorage.getItem('accountID')


        // A partial Interface factory
        // for the NNS Canister UI
        // Check the `plug authentication - nns` for more
        const nnsPartialInterfaceFactory = ({ IDL }) => {
          
          return IDL.Service({
            'getRegistry' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat32,IDL.Text))], ['query']),
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

        for(i=0;i < stats.length;i++){
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
          window.location.assign('login.html')
        }
        else{
          window.location.assign('index.html') // if login was set to true then the user will be directed to index
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



