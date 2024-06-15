const video = document.querySelector('.vid');
const skipf = document.querySelector('.skip-forward');
const skipb = document.querySelector('.skip-backward');
const btn = document.querySelector('.btns');
const progressBar = document.querySelector('.line');
const ranges = document.querySelectorAll('.slider');
const playt = document.querySelector('.play');
let isPlaying = false;

function play(){
    if(!isPlaying){
        video.play();
        isPlaying = true;
        playt.innerText = '❚ ❚';
    }else{
        video.pause();
        isPlaying = false;
        playt.innerText = '►';
    }
}


function skip(e){
    const skip = this.dataset;
    video.currentTime += Number(skip.set);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


function handleRangeUpdate() {
    video[this.name] = this.value;
  }
  

skipf.addEventListener('click',skip);
skipb.addEventListener('click',skip);
video.addEventListener('click',play);

video.addEventListener('timeupdate',handleProgress);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
