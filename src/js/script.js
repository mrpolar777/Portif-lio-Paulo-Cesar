const blogId = "2071417322165993620";
const apiKey = "AIzaSyD--vTfvmm6c-rXyevQH5nmzb5x6FWs4eo";
const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("blog__content");
    data.items.forEach((post) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = post.content;
      const img = tempDiv.querySelector("img");
      const imageUrl = img ? img.src : "caminho/da/imagem-padrao.jpg";

      const rawText = tempDiv.textContent || tempDiv.innerText || "";
      const resumo =
        rawText.length > 150 ? rawText.substring(0, 150) + "..." : rawText;

      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
				<img src="${imageUrl}" alt="Imagem do post">
				<div class="content">
					<h3>${post.title}</h3>
					<p>${resumo}</p>
					<a href="${post.url}" target="_blank">Ler mais...</a>
				</div>	
			`;
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Erro ao carregar os posts:", err));

// Menu Mobile
function menuMobile() {
  const elemento = document.getElementById('menu');
  elemento.classList.toggle('show');
}