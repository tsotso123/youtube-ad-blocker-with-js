element = document.getElementsByClassName('ytp-ad-player-overlay-progress-bar')[0];
if (typeof(element) != 'undefined' && element != null)
{
videoElement = document.getElementsByClassName('video-stream html5-main-video')[0];
videoElement.currentTime = videoElement.duration;
}