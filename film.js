window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const folder = params.get("folder");
  const filmFolder = params.get("filmFolder");
  const filename = params.get("filename");

  const titleElem = document.getElementById("film-title");
  const video = document.getElementById("video-player");

  if (!folder || !filmFolder || !filename) {
    titleElem.textContent = "Fehlende Parameter für das Abspielen.";
    return;
  }

  const videoPath = `series/${filmFolder}/${filename}`;

  titleElem.textContent = filename.replace(/\.mp4$/, "");

  video.src = videoPath;
  video.load();
});
