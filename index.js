// Hier die Serienliste definieren (kopiere diese ggf. aus series.js oder lade extern)
const seriesList = [
  {
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    folder: "Rascal Does Not Dream",
    cover: "series/Rascal Does Not Dream/Staffel 1/cover.jpg"
  },
  // Hier kannst du weitere Serien hinzufügen:
  // {
  //   title: "Andere Serie",
  //   folder: "Andere Serie Ordner",
  //   cover: "Pfad/zum/cover.jpg"
  // }
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("series-container");

  seriesList.forEach(series => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `series.html?folder=${encodeURIComponent(series.folder)}&title=${encodeURIComponent(series.title)}`;

    card.innerHTML = `
      <img src="${series.cover}" alt="Cover von ${series.title}" />
      <div class="title">${series.title}</div>
    `;

    container.appendChild(card);
  });
});
