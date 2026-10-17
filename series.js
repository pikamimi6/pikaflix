const content = [
  {
    type: "series",
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    folder: "Rascal Does Not Dream",
    season: "Staffel 1",
    cover: "series/Rascal Does Not Dream/Staffel 1/cover.jpg"
  },
  {
    type: "film",
    title: "Rascal Does Not Dream of a Dreaming Girl",
    folder: "Rascal Does Not Dream/film",
    filename: "Rascal Does Not Dream of a Dreaming Girl.mp4",
    cover: "series/Rascal Does Not Dream/film/cover.jpg"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const container = document.getElementById("series-container");
  const h1 = document.getElementById("series-title");

  h1.textContent = title || "Inhalte";

  content.forEach(item => {
    const card = document.createElement("a");
    card.className = "card";

    if (item.type === "film") {
      card.href = `film.html?folder=${encodeURIComponent(item.folder)}&filename=${encodeURIComponent(item.filename)}`;
    } else if (item.type === "series") {
      card.href = `season.html?folder=${encodeURIComponent(item.folder)}&season=${encodeURIComponent(item.season)}&title=${encodeURIComponent(item.title)}`;
    }

    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}" />
      <div>${item.title}</div>
    `;

    container.appendChild(card);
  });
});
