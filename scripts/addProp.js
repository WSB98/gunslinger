//open an overlay to create a proposal
var opened = false;
//grab the element that is not in view
var form = document.getElementById('newPropForm');
var closeBtn = document.getElementById('closeBtn');


document.getElementById('addProp').addEventListener('click', async(e) => {
    //open or close
    if(!opened){ //
        form.classList.add('showPropForm');
        closeBtn.classList.add('showCloseBtn');

        opened = true;
    }
    else{
        form.classList.remove('showPropForm');
        closeBtn.classList.remove('showCloseBtn');

        opened = false;
    }
    

});

document.addEventListener('click', async(e) => { // all clicks
 if (!form.contains(e.target) && !document.getElementById('addProp').contains(e.target)) {   
    if(opened){ 
    // is the click NOT in the dropdown
        // is the dropdown open?
        form.classList.remove('showPropForm'); //close the menu
        closeBtn.classList.remove('showCloseBtn');
        opened = false;  // set the state to false
    }
}

});



/* for discussion |
                  V   */

//open an overlay to create a proposal
var discOpened = false;
//grab the element that is not in view
var discForm = document.getElementById('newDiscussionForm')



document.getElementById('addDisc').addEventListener('click', async(e) => {
    //open or close
    if(!discOpened){
        discForm.classList.add('showPropForm');
        closeBtn.classList.add('showCloseBtn');

        discOpened = true;
    }
    else{
        discForm.classList.remove('showPropForm');
        closeBtn.classList.remove('showCloseBtn');

        discOpened = false;
    }
});

document.addEventListener('click', async(e) => {
    if(discOpened){   
        if (!discForm.contains(e.target) && !document.getElementById('addDisc').contains(e.target)) {    // is the click NOT in the dropdown
         // is the dropdown open?
            discForm.classList.remove('showPropForm'); //close the menu
            closeBtn.classList.remove('showCloseBtn');
            discOpened = false;  // set the state to false
        }
    }
    
});