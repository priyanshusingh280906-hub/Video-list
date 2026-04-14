document.body.style.backgroundColor = "black";

function cloneVideoList() {

let originalVideoList = document.querySelector('.video-list');
let videoList = originalVideoList.cloneNode(true);

document.querySelector(".container").appendChild(videoList);
}

cloneVideoList();
cloneVideoList();