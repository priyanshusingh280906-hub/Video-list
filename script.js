document.body.style.backgroundColor = "lightgray";

function cloneVideoList() {

let originalVideoList = document.querySelector('.video-list');
let videoList = originalVideoList.cloneNode(true);

let videotitle = videoList.querySelector('.video-info h2');
videotitle.textContent = "Cloned Video Title";

document.querySelector(".container").appendChild(videoList);
}

