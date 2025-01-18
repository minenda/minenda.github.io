// Data dummy, bisa diganti dengan API backend
const articles = [
    { title: "Larangan Syirik", summary: "Ringkasan artikel 1" },
    { title: "Makna La ilaaha illallah", summary: "Ringkasan artikel 2" },
    { title: "Rukun kalimat Syahadat", summary: "Ringkasan artikel 3" },
    { title: "Artikel 4", summary: "Ringkasan artikel 4" },
    { title: "Artikel 5", summary: "Ringkasan artikel 5" },
    { title: "Artikel 6", summary: "Ringkasan artikel 6" },
    { title: "Artikel 7", summary: "Ringkasan artikel 7" },
    { title: "Artikel 8", summary: "Ringkasan artikel 8" },
];

let currentPage = 1;
const articlesPerPage = 3;

function loadArticles(page) {
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, endIndex);

    const articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = ""; // Hapus konten sebelumnya

    paginatedArticles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.summary}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });

    // Update tombol navigasi
    document.getElementById("prev").disabled = page === 1;
    document.getElementById("next").disabled = endIndex >= articles.length;
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadArticles(currentPage);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if ((currentPage * articlesPerPage) < articles.length) {
        currentPage++;
        loadArticles(currentPage);
    }
});

// Load artikel pertama kali
loadArticles(currentPage);
