let button = document.querySelector("button");
let counter = document.querySelector(".counter");
let text = document.querySelector(".text");
let man = document.querySelector(".man");
let count = 33,manSteps = 0,level = 0, sound = true;

display(count)
button.addEventListener("click", () => {
    if (sound){
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
            counterStart(3, "سورة الاخلاص -  سورة الفلق - سورة الناس")
            break;
        case 5: 
            counterStart(1, "اية الكرسي")
            break;
        case 6:
            document.body.innerHTML = `
            <div class=text> تقبل الله منك صالح الاعمال </div>
            <button onclick="reload()" style="display: block;margin: auto">مرة اخري</button>
            <img src="photos/quran.jpg" alt="quran" style="width: 500px;max-width: 90%;margin: 10px auto;display: block">
            <audio class="audio2" src="auido/quran2.mp3" autoplay type="audio/mpeg" style="visibility: hidden">
            </audio>
            
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
            manSteps += .46;
            man.style.cssText = `left: ${manSteps}%`;
            break;
        case 3:
        case 4:
        case 5:
            
            manSteps += 5.892;
            man.style.cssText = `left: ${manSteps}%`;       
    }
}
function reload() {
    location.reload();
}