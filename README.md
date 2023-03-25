# Gunslinger <picture>
  <source media="(prefers-color-scheme: dark)" srcset="img/svg/lighIcon.svg">
  <source media="(prefers-color-scheme: light)" srcset="img/svg/darkIcon.svg">
  <img style="height:256px;width:256px;" alt="dark mode light mode icon" src="img/svg/darkIcon.svg">
</picture>

Welcome to the DAO kickstarter, codename ***Gunslinger***. The goal of Gunslinger is to be the go-to template for anyone, anywhere, who wants to create a DAO. We believe
the storm of web3 is around the corner and it is people like you, expanding on systems like this, that will make it a reality! 

# Dependencies
Outside of the Firebase CLI (more to be posted on that at a later date) there are no major dependencies in Gunslinger's frontend; however, there are some services and
plugins we use to bring the whole site together. They are as follows.
<br><br> **PLEASE NOTE: If you plan on using the serverless framework in this template, please
review security of your site and ensure that no sensitive information is exposed**

### Pagination
A script is injected via JavaScript for each table in the code that controls the pagination for our tables. The source to the script can be found at the 
[Kryogenix's Website](https://www.kryogenix.org/code/browser/sorttable/). Credit to Stuart Langridge for this script! The file 
[pagination.js](scripts/pagination.js) is where you will find this script in action.

### OpenAI API
This is not necessary, but there is a Chat feature within the template. It is fully setup and only requires you to replace the API key in order to start using it.
There is another fetch() request preceding the call to OpenAI API, that calls an AWS Lambda function in order to retrieve the API Key for the OpenAI API. You can find
the chat feature's JavaScript in [chat.js](scripts/chat.js) and HTML in [chat.html](chat.html). If you do not have an OpenAI account, you can sign up and they
should still give you some free tokens to use the API - the model we use in this template is the same as chatGPT and costs fractions of a penny per request. You can
find OpenAI's developer website [here](https://platform.openai.com/). 

### Plug Wallet
Plug Wallet is a popular wallet on the Internet Computer Blockchain that we are using for this template. Plug comes with a very simple *"SDK"* that doesn't require
you to add a module or import anything for the base features that we use in this template. There are mobile authentication features in Alpha that you can implement if
you wish to, you can find their docs [here](https://docs.plugwallet.ooo/getting-started/extension-components/). <br><br>
There is a canister (similar to smart contracts, but with some extra perks) the template is connecting to in [cowboyAuth](scripts/cowboyAuth.js). We are using Plug
Wallet to connect to this canister through the IC and querying it for a registry of NFT holders. If the address of the user logging in is in the registry, then they
gain access to the site - all through the magic of Plug!

# Firebase
Deploying to Firebase and getting your site up is very simple, and under the Spark plan you will likely be able to host your site for free until you have a few hundred
active users. If you do not have an account with Firebase, you can set one up through your Gmail [on their website](https://firebase.google.com). <br><br>
Once you have an account, you need to create a new project. Follow the steps on screen, enable Google Analytics if you wish to, then click into your project once you 
are done. Next, click on Hosting in the shortcut menu, then Get Started. <br><br> Now you will be in a step by step guide for deploying your site, the steps are
as follows:
- Make sure you have a terminal window open in the root directory of your project
- Install the Firebase CLI into your project using [NPM](https://www.npmjs.com/) and pasting this in your terminal ```npm install -g firebase-tools``` 
- Tick the checkbox if you plan on using more Firebase services
- Paste ```firebase login``` in terminal and use your account information to login
- Paste ```firebase init``` in terminal. This will change your file structure a little.
- Register your app if you checked the box in step 1
- Paste ```npm install firebase``` in your terminal and run it
- There will be some code you can include in your ```main.js``` if you plan on using other Firebase services
- And finally, paste ```firebase deploy``` in your terminal and run it to deploy your site!

### Domains
Your domain will be the unique identifier of your app that you set when creating the project. If you wish to use an alternative domain, you can purchase one on Google Domains and follow the prompts on Firebase to add a custom domain. Then back in [Google Domains](https://domains.google.com) you will need to change some information to connect the site rather than just redirect to your app.

## Notes
- The NFTs used in this template are minted on [ICPSwap](https://icpswap.com), which affects the function you will call from the canister
- This is just the frontend template, and a guide is coming on hosting and options for databases
- localStorage is utilized heavily in this template, and users should be aware of what that means (i.e. how using incognito will affect UX)
- The logo is a Canva Premium asset, so it cannot be reused in commercial branding, but is perfectly fine to keep as your DAOs icons
