/* pagination JS */
/* pagination for the first table */
const rowsPerPage = 5; // change this as needed
const tableRows = document.querySelectorAll('.trow');
const totalPages = Math.ceil(tableRows.length / rowsPerPage);

function generatePaginationLinks(currentPage = 1) {
    if (currentPage === undefined) {
        currentPage = 1;
        }
    let linksHtml = '';
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(startPage + 2, totalPages);

    if (startPage > 1) {
        linksHtml += '<li><a href="#" data-page="1">1</a></li>';
        if (startPage > 2) {
        linksHtml += '<li ><span class="IBM-monospace">...</span></li>';
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        linksHtml += `<li><a href="#" data-page="${i}"${i === currentPage ? ' class="active"' : ''}>${i}</a></li>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
        linksHtml += '<li><span class="IBM-monospace">...</span></li>';
        }
        linksHtml += `<li><a href="#" data-page="${totalPages}">${totalPages}</a></li>`;
    }

    document.querySelector('#pagination').innerHTML = `<ul>${linksHtml}</ul>`;
    const activeLink = document.querySelector(`#pagination a[data-page="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    
}




document.getElementById('pagination').addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'A') {
      event.preventDefault();
      if (clickedElement.hasAttribute('data-page')) {
        const selectedPage = clickedElement.getAttribute('data-page');
        const tableRows = document.querySelectorAll('.trow');
        const startIndex = (selectedPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        tableRows.forEach((row, index) => {
          if (index >= startIndex && index < endIndex) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
        generatePaginationLinks(selectedPage);
      } else if (clickedElement.textContent === '...') {
        const currentPage = parseInt(document.querySelector('#pagination a.active').getAttribute('data-page'));
        generatePaginationLinks(currentPage);
      }
    }
  });
  
  

// onload section
window.addEventListener('load', () => {
    generatePaginationLinks(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination a[data-page="1"]').click();
  });

window.addEventListener('load', async () => {
    //add sortable script after adding the data (doesnt work if loaded before data)
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.kryogenix.org/code/browser/sorttable/sorttable.js";
    document.head.appendChild(script)
});

/* get the header of proposal table and go to the first page on click. need to do this because the sortable script 
is sorting the data and causing the page numbers to get out of order without being shown on the UI.
this basically realigns the order after the sorting is done */
document.getElementById('tableHeadProposals').addEventListener('click', async () => {
    generatePaginationLinks(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination a[data-page="1"]').click();
});

//same as above but for the passed proposals. 
document.getElementById('tableHeadPassedProposals').addEventListener('click', async () => {
    generatePaginationLinks2(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination2 a[data-page2="1"]').click();
});
//same as above but for the rejected proposals. 
document.getElementById('tableHeadRejectedProposals').addEventListener('click', async () => {
    generatePaginationLinks3(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination3 a[data-page3="1"]').click();
});
//same as above but for the rejected proposals. 
document.getElementById('tableHeadDiscussionBoard').addEventListener('click', async () => {
    generatePaginationLinks4(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination4 a[data-page4="1"]').click();
});





/* pagination for passed proposal table */
//pagination for the second table OR glassTable1
const rowsPerPage2 = 5; // change this as needed
const tableRows2 = document.querySelectorAll('.trow2');
const totalPages2 = Math.ceil(tableRows2.length / rowsPerPage2);

function generatePaginationLinks2(currentPage2 = 1) {
    if (currentPage2 === undefined) {
        currentPage2 = 1;
        }
    let linksHtml2 = '';
    const startPage2 = Math.max(currentPage2 - 1, 1);
    const endPage2 = Math.min(startPage2 + 2, totalPages2);

    if (startPage2 > 1) {
        linksHtml2 += '<li><a href="#" data-page2="1">1</a></li>';
        if (startPage2 > 2) {
        linksHtml2 += '<li><span class="IBM-monospace">...</span></li>';
        }
    }

    for (let i = startPage2; i <= endPage2; i++) {
        linksHtml2 += `<li><a href="#" data-page2="${i}"${i === currentPage2 ? ' class="active"' : ''}>${i}</a></li>`;
    }

    if (endPage2 < totalPages2) {
        if (endPage2 < totalPages2 - 1) {
        linksHtml2 += '<li><span class="IBM-monospace">...</span></li>';
        }
        linksHtml2 += `<li><a href="#" data-page2="${totalPages2}">${totalPages2}</a></li>`;
    }

    document.querySelector('#pagination2').innerHTML = `<ul>${linksHtml2}</ul>`;
    const activeLink2 = document.querySelector(`#pagination2 a[data-page2="${currentPage2}"]`);
    if (activeLink2) {
        activeLink2.classList.add('active');
    }

    
}




document.getElementById('pagination2').addEventListener('click', (event2) => {
    const clickedElement2 = event2.target;
    if (clickedElement2.tagName === 'A') {
      event2.preventDefault();
      if (clickedElement2.hasAttribute('data-page2')) {
        const selectedPage2 = clickedElement2.getAttribute('data-page2');
        const tableRows2 = document.querySelectorAll('.trow2');
        const startIndex2 = (selectedPage2 - 1) * rowsPerPage2;
        const endIndex2 = startIndex2 + rowsPerPage2;
        tableRows2.forEach((row2, index2) => {
          if (index2 >= startIndex2 && index2 < endIndex2) {
            row2.style.display = '';
          } else {
            row2.style.display = 'none';
          }
        });
        generatePaginationLinks2(selectedPage2);
      } else if (clickedElement2.textContent === '...') {
        const currentPage2 = parseInt(document.querySelector('#pagination2 a.active').getAttribute('data-page2'));
        generatePaginationLinks2(currentPage2);
      }
    }
  });
  
  

// onload section
window.addEventListener('load', () => {
    generatePaginationLinks2(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination2 a[data-page2="1"]').click();
});

//pagination for rejected proposals
const rowsPerPage4 = 5; // change this as needed
const tableRows4 = document.querySelectorAll('.trow4');
const totalPages4 = Math.ceil(tableRows4.length / rowsPerPage4);

function generatePaginationLinks4(currentPage4 = 1) {
    if (currentPage4 === undefined) {
        currentPage4 = 1;
        }
    let linksHtml4 = '';
    const startPage4 = Math.max(currentPage4 - 1, 1);
    const endPage4 = Math.min(startPage4 + 2, totalPages4);

    if (startPage4 > 1) {
        linksHtml4 += '<li><a href="#" data-page4="1">1</a></li>';
        if (startPage4 > 2) {
        linksHtml4 += '<li><span class="IBM-monospace">...</span></li>';
        }
    }

    for (let i = startPage4; i <= endPage4; i++) {
        linksHtml4 += `<li><a href="#" data-page4="${i}"${i === currentPage4 ? ' class="active"' : ''}>${i}</a></li>`;
    }

    if (endPage4 < totalPages4) {
        if (endPage4 < totalPages4 - 1) {
        linksHtml4 += '<li><span class="IBM-monospace">...</span></li>';
        }
        linksHtml4 += `<li><a href="#" data-page4="${totalPages4}">${totalPages4}</a></li>`;
    }

    document.querySelector('#pagination4').innerHTML = `<ul>${linksHtml4}</ul>`;
    const activeLink4 = document.querySelector(`#pagination4 a[data-page4="${currentPage4}"]`);
    if (activeLink4) {
        activeLink4.classList.add('active');
    }

    
}




document.getElementById('pagination4').addEventListener('click', (event4) => {
    const clickedElement4 = event4.target;
    if (clickedElement4.tagName === 'A') {
      event4.preventDefault();
      if (clickedElement4.hasAttribute('data-page4')) {
        const selectedPage4 = clickedElement4.getAttribute('data-page4');
        const tableRows4 = document.querySelectorAll('.trow4');
        const startIndex4 = (selectedPage4 - 1) * rowsPerPage2;
        const endIndex4 = startIndex4 + rowsPerPage4;
        tableRows4.forEach((row4, index4) => {
          if (index4 >= startIndex4 && index4 < endIndex4) {
            row4.style.display = '';
          } else {
            row4.style.display = 'none';
          }
        });
        generatePaginationLinks4(selectedPage4);
      } else if (clickedElement4.textContent === '...') {
        const currentPage4 = parseInt(document.querySelector('#pagination4 a.active').getAttribute('data-page4'));
        generatePaginationLinks4(currentPage4);
      }
    }
  });
  
  

// onload section
window.addEventListener('load', () => {
    generatePaginationLinks4(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination4 a[data-page4="1"]').click();
});


//pagination for rejected proposals
const rowsPerPage3 = 5; // change this as needed
const tableRows3 = document.querySelectorAll('.trow3');
const totalPages3 = Math.ceil(tableRows3.length / rowsPerPage3);

function generatePaginationLinks3(currentPage3 = 1) {
    if (currentPage3 === undefined) {
        currentPage3 = 1;
        }
    let linksHtml3 = '';
    const startPage3 = Math.max(currentPage3 - 1, 1);
    const endPage3 = Math.min(startPage3 + 2, totalPages3);

    if (startPage3 > 1) {
        linksHtml3 += '<li><a href="#" data-page3="1">1</a></li>';
        if (startPage3 > 2) {
        linksHtml3 += '<li><span class="IBM-monospace">...</span></li>';
        }
    }

    for (let i = startPage3; i <= endPage3; i++) {
        linksHtml3 += `<li><a href="#" data-page3="${i}"${i === currentPage3 ? ' class="active"' : ''}>${i}</a></li>`;
    }

    if (endPage3 < totalPages3) {
        if (endPage3 < totalPages3 - 1) {
        linksHtml3 += '<li><span class="IBM-monospace">...</span></li>';
        }
        linksHtml3 += `<li><a href="#" data-page3="${totalPages3}">${totalPages3}</a></li>`;
    }

    document.querySelector('#pagination3').innerHTML = `<ul>${linksHtml3}</ul>`;
    const activeLink3 = document.querySelector(`#pagination3 a[data-page3="${currentPage3}"]`);
    if (activeLink3) {
        activeLink3.classList.add('active');
    }

    
}




document.getElementById('pagination3').addEventListener('click', (event3) => {
    const clickedElement3 = event3.target;
    if (clickedElement3.tagName === 'A') {
      event3.preventDefault();
      if (clickedElement3.hasAttribute('data-page3')) {
        const selectedPage3 = clickedElement3.getAttribute('data-page3');
        const tableRows3 = document.querySelectorAll('.trow3');
        const startIndex3 = (selectedPage3 - 1) * rowsPerPage2;
        const endIndex3 = startIndex3 + rowsPerPage3;
        tableRows3.forEach((row3, index3) => {
          if (index3 >= startIndex3 && index3 < endIndex3) {
            row3.style.display = '';
          } else {
            row3.style.display = 'none';
          }
        });
        generatePaginationLinks3(selectedPage3);
      } else if (clickedElement3.textContent === '...') {
        const currentPage3 = parseInt(document.querySelector('#pagination3 a.active').getAttribute('data-page3'));
        generatePaginationLinks3(currentPage3);
      }
    }
  });
  
  

// onload section
window.addEventListener('load', () => {
    generatePaginationLinks3(1);
     // Add this line to display the first page on load
    document.querySelector('#pagination3 a[data-page3="1"]').click();
});