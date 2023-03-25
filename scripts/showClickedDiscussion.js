
var title = document.getElementById('discussionTitle');
var author = document.getElementById('authorOfPost');

title.innerText = localStorage.getItem('currentDiscussion');
author.innerText = localStorage.getItem('currentDiscussionAuthor');