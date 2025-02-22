// Data dummy, bisa diganti dengan API backend
const articles = [
    { title: "<h4><b>Larangan Syirik</b></h4>", summary: 
	"Syirik yaitu menyamakan makhluk dengan Allah dalam hal-hal yang menjadi kekhususan Allah ta'ala <a href='rukunIman/iman_kepada_allah.html'>Selanjutnya</a>" },
    { title: "<h4><b>Makna La ilaaha illallah</b></h4>", summary: 
	"Ringkasan artikel 2" },
    { title: "<h4><b>Rukun kalimat Syahadat</b></h4>", summary: 
	"Ringkasan artikel 3" },
    { title: "<h4><b>Artikel 4</b></h4>", summary: 
	"Ringkasan artikel 4" },
    { title: "<h4><b>Artikel 4</b></h4>", summary: 
	"Ringkasan artikel 5" },
    { title: "<h4><b>Artikel 4</b></h4>", summary: 
	"Ringkasan artikel 6" },
    { title: "<h4><b>Artikel 4</b></h4>", summary: 
	"Ringkasan artikel 7" },
    { title: "<h4><b>Artikel 4</b></h4>", summary: 
	"Ringkasan artikel 8" },
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
