let videoCover = document.querySelector('.video-cover');
let videoPlayer = document.querySelector('.videoplayer');
let videoLabel = document.querySelector('.label_info');

videoCover.addEventListener('mouseover', function () {
    videoCover.style.transition = 'opacity 0.5s';
    videoCover.style.opacity = '0';
    videoLabel.style.opacity = '0';
    videoPlayer.play();
})

videoCover.addEventListener('mouseout', function () {
    videoCover.style.opacity = '1';
    videoLabel.style.opacity = '1';
    videoPlayer.pause();
})

videoLabel.addEventListener('mouseover', function () {
    videoCover.style.opacity = '0';
    videoLabel.style.opacity = '0';
    videoPlayer.play();
})

videoLabel.addEventListener('mouseout', function () {
    videoCover.style.opacity = '1';
    videoLabel.style.opacity = '1';
    videoPlayer.pause();
})