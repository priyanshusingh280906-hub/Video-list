document.body.style.backgroundColor = "lightgray";

function cloneVideoList() {

let originalVideoList = document.querySelector('.video-list');
let videoList = originalVideoList.cloneNode(true);

let videotitle = videoList.querySelector('.video-info h2');
videotitle.textContent = prompt("Enter the video title:");

let videoviews = videoList.querySelector('.views');
videoviews.textContent = prompt("Enter the number of views:") + " views";

let videodate = videoList.querySelector('.date');
videodate.textContent = prompt("Enter the days ago:") + " days ago";

document.querySelector(".container").appendChild(videoList);
}

document.querySelector(".add-video").addEventListener("click", cloneVideoList);
