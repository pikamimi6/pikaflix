window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const folder = params.get("folder");
  const season = params.get("season");
  const episode = params.get("episode");

  const titleElem = document.getElementById("episode-title");
  const video = document.getElementById("video-player");

  if (!folder || !season || !episode) {
    titleElem.textContent = "Fehlende Parameter für das Abspielen.";
    return;
  }

  const seriesTitle = "Rascal Does Not Dream of Bunny Girl Senpai";
  const videoFilename = `${seriesTitle} ${episode}.mp4`;
  const videoPath = `series/${folder}/${season}/${videoFilename}`;

  titleElem.textContent = `Folge ${episode} - ${season}`;

  video.src = videoPath;
  video.load();
});
