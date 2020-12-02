class Player {
  constructor({ playerId }){
    this.playerElement = document.querySelector(`#${playerId}`);
    this.controls = this.playerElement.querySelector('.controls');
    this.progressBar = this.playerElement.querySelector('.progress-bar');
    this.playBtn = this.controls.querySelector('.play');
    this.pauseBtn = this.controls.querySelector('.pause');
    this.forwardBtn = this.controls.querySelector('.forward');
    this.backwardBtn = this.controls.querySelector('.backward');
    this.audioElement = this.playerElement.querySelector('audio');
    this.handleEventListeners();

  }
  handleEventListeners(){
    this.playBtn.addEventListener('click', () => {
      this.audioElement.play();
    });

    this.pauseBtn.addEventListener('click', () => {
      this.audioElement.pause();
    });

    this.progressBar.addEventListener('input', () => {
      this.audioElement.currentTime = this.progressBar.value;
    });

    this.forwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime += 10;
    });

    this.backwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime -= 10;
    });

    this.audioElement.addEventListener('timeupdate', () => {
      
      const {
        currentTime,
        duration,
      } = this.audioElement;
      this.progressBar.max = duration;
      this.progressBar.value = currentTime;
    });
  }
}
