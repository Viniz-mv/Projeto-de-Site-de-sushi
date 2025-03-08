document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const catalogItems = document.querySelectorAll(".catalogItem");

    catalogItems.forEach(img => {
        const altText = img.getAttribute("alt").toLowerCase();
        img.style.display = altText.includes(searchTerm) ? "block" : "none";
    });
});

document.querySelector('.perfil button').addEventListener('click', () => {
    alert('Perfil aberto.');
});
