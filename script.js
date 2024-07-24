document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progress = document.getElementById('progress');
    const progressContainer = document.querySelector('.progress-container');

    // Play or Pause the audio
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '暂停';
        } else {
            audio.pause();
            playPauseBtn.textContent = '播放';
        }
    });

    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;
    });

    // Seek when progress bar is clicked
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        
        audio.currentTime = (clickX / width) * duration;
    });
});
