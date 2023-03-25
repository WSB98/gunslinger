var board = document.getElementById('discussionTable');

board.addEventListener('click', async (e) => {
    //the target is the data, so we must use closest to get row
    //  we dont want to trigger the click if not clicking inside of a row
    //      so we must handle for that

    var clickPos = e.target //this is a tdata
    

    //clicked inside of a row so we move forward
    if(clickPos.className == 'tdata'){
      

        //now find trow4
        var row = clickPos.closest('tr');
        var topic = row.innerHTML.split('\n')[1].replace(/<\/?[^>]+(>|$)/g, ""); //this should be changed to just use the ID of the discussion later on
        var author = row.innerHTML.split('\n')[5].replace(/<\/?[^>]+(>|$)/g, ""); //this should be changed to just use the ID of the discussion later on

        //pass discussion topic through local storage
        await localStorage.setItem('currentDiscussion',topic)
        await localStorage.setItem('currentDiscussionAuthor',author)
       
       
        setTimeout(window.location.assign('discussion.html'),500);
    }
});