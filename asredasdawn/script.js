// JavaScript pour gérer la navigation entre les pages
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === pageIndex);
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}
