// Install App
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  document.getElementById("installBtn").style.display = "block";

  document.getElementById("installBtn").addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('تم التثبيت');
      }
      deferredPrompt = null;
    });
  });
});
//========================================================

const button = document.querySelector(".click");
const counter = document.querySelector(".counter");
const text = document.querySelector(".text");
const  man = document.querySelector(".man");
const checkbox = document.getElementById("muted");
let count = 33,manSteps = 0,level = 0, sound = true;


display(count)


button.addEventListener("click", () => {
    if (sound && !checkbox.checked){
        document.querySelector('.audio1').play();
        sound = false;
    }
    manMove();
    display(--count)
    updateLevel(count);
})

function display(count) {
    counter.innerText = `${count}`;
}

function updateLevel(counter) {
    if (counter == 0) {
         level++;
    } 
    switch (level) {
        case 1:
            counterStart(33, "الحمد لله"); 
            break;
        case 2:
            counterStart(33, "الله اكبر");   
            break;
        case 3:
            counterStart(1,"لا اله الا الله وحدة لاشريك له له الملك وله الحمد وهو علي كل شئ قدير" )
            break;
        case 4:
            counterStart(100, "سبحان الله وبحمده")
            break;
        case 5: 
            counterStart(1, "لا اله الا انت سبحانك اني كنت من الظالمين")
            break;
        case 6:
            let isMute = checkbox.checked ? "" : "autoplay";
            document.body.innerHTML = `
            <div class="content">
            <div class=text> تقبل الله منك صالح الاعمال </div>
            <button onclick="reload()" style="display: block;margin: auto">مرة اخري</button>
            <img src="photos/quran.jpg" alt="quran" style="width: 500px;max-width: 90%;margin: 10px auto;display: block">
            <audio class="audio2" src="auido/quran2.mp3" ${isMute} type="audio/mpeg" style="visibility: hidden">
            </audio>
            </div>
            `
        

    }
     
}

function counterStart(number, value) {
    if (count == 0) {
                count = number;
                display(count);
        }
    text.innerText = `${value}`;
}
function manMove() {
    switch(level) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            manSteps += .35;
            man.style.cssText = `left: ${manSteps}%`;
            break;
        case 5:
            
            manSteps += 5;
            man.style.cssText = `left: ${manSteps}%`;       
    }
}
function reload() {
    location.reload();
}