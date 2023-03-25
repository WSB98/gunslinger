
// search JS for active proposals
function searchTable() {
     // Declare variables for accessing the input field and table
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td"); // Get the first td element in the current row
      for (j = 0; j < td.length; j++) { // Make sure the td element exists (i.e., the row isn't a table header)
        txtValue = td[j].textContent || td[j].innerText; // Get the text content of the td element
        if (txtValue.toUpperCase().indexOf(filter) > -1) {  // Check if the text content contains the search query
          tr[i].style.display = ""; // Show the row if it matches the search query
          break;
        } else {
          tr[i].style.display = "none"; // Hide the row if it doesn't match the search query
        }
      }
    }

    if(filter == "" || filter == " "){
        document.querySelector('#pagination a[data-page="1"]').click();
    }
    
  }

  // search JS for discussion board
function searchTable4() {
    // Declare variables for accessing the input field and table
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("searchInput4");
   filter = input.value.toUpperCase();
   table = document.getElementById("discussionTable");
   tr = table.getElementsByTagName("tr");

   // Loop through all table rows and hide those that don't match the search query
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td"); // Get the first td element in the current row
     for (j = 0; j < td.length; j++) { // Make sure the td element exists (i.e., the row isn't a table header)
       txtValue = td[j].textContent || td[j].innerText; // Get the text content of the td element
       if (txtValue.toUpperCase().indexOf(filter) > -1) {  // Check if the text content contains the search query
         tr[i].style.display = ""; // Show the row if it matches the search query
         break;
       } else {
         tr[i].style.display = "none"; // Hide the row if it doesn't match the search query
       }
     }
   }

   if(filter == "" || filter == " "){
       document.querySelector('#pagination4 a[data-page4="1"]').click();
   }
   
 }


  // search JS for passed props
function searchTable2() {
    // Declare variables for accessing the input field and table
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("searchInput2");
   filter = input.value.toUpperCase();
   table = document.getElementById("passedTable");
   tr = table.getElementsByTagName("tr");

   // Loop through all table rows and hide those that don't match the search query
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td"); // Get the first td element in the current row
     for (j = 0; j < td.length; j++) { // Make sure the td element exists (i.e., the row isn't a table header)
       txtValue = td[j].textContent || td[j].innerText; // Get the text content of the td element
       if (txtValue.toUpperCase().indexOf(filter) > -1) {  // Check if the text content contains the search query
         tr[i].style.display = ""; // Show the row if it matches the search query
         break;
       } else {
         tr[i].style.display = "none"; // Hide the row if it doesn't match the search query
       }
     }
   }

   if(filter == "" || filter == " "){
       document.querySelector('#pagination2 a[data-page2="1"]').click();
   }
   
 }

   // search JS for rejected props
function searchTable3() {
    // Declare variables for accessing the input field and table
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("searchInput3");
   filter = input.value.toUpperCase();
   table = document.getElementById("rejectedTable");
   tr = table.getElementsByTagName("tr");

   // Loop through all table rows and hide those that don't match the search query
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td"); // Get the first td element in the current row
     for (j = 0; j < td.length; j++) { // Make sure the td element exists (i.e., the row isn't a table header)
       txtValue = td[j].textContent || td[j].innerText; // Get the text content of the td element
       if (txtValue.toUpperCase().indexOf(filter) > -1) {  // Check if the text content contains the search query
         tr[i].style.display = ""; // Show the row if it matches the search query
         break;
       } else {
         tr[i].style.display = "none"; // Hide the row if it doesn't match the search query
       }
     }
   }

   if(filter == "" || filter == " "){
       document.querySelector('#pagination3 a[data-page3="1"]').click();
   }
   
 }
  

