document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
    }

    window.nextPage = function() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    };

    window.prevPage = function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    };

    // Initialisation pour montrer la première page
    showPage(currentPage);
});
