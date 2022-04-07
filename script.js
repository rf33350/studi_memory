var counterVal = 0;
var counterValWins = 0;
const items = [];

var audioPiece = new Audio('./sounds/piece.wav');
var audioWin = new Audio('./sounds/niveau-termine.wav');

const celebration = document.querySelector('.celebration');

const btstart = document.querySelector('.start');
btstart.addEventListener('click', () => {
    window.scrollTo({
        top: 920,
        left: 0,
        behavior: "smooth"
    })
    counterVal = 0;
    counterValWins = 0;
    img1.src="./images/cache.png";
    img2.src="./images/cache.png";
    img3.src="./images/cache.png";
    img4.src="./images/cache.png";
    celebration.classList.remove("celebration-on");
    celebration.classList.add("celebration-off");
});

const img1 = document.querySelector('.img1');
img1.addEventListener('click', () => {
   img1.src="./images/luigi.jpg";
   ++counterVal;
   items.push("luigi");
   console.log(items);
   console.log(counterVal);
   verify();
});

const img2 = document.querySelector('.img2');
img2.addEventListener('click', () => {
    img2.src="./images/mario.jpg";
    ++counterVal;
    items.push("mario");
    console.log(items);
    console.log(counterVal);
    verify();
});

const img3 = document.querySelector('.img3');
img3.addEventListener('click', () => {
    img3.src="./images/luigi.jpg";
    ++counterVal;
    items.push("luigi");
    console.log(items);
    console.log(counterVal);
    verify();
});

const img4 = document.querySelector('.img4');
img4.addEventListener('click', () => {
    img4.src="./images/mario.jpg";
    ++counterVal;
    items.push("mario");
    console.log(items);
    console.log(counterVal);
    verify();
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    counterVal = 0;
    counterValWins = 0;
    img1.src="./images/cache.png";
    img2.src="./images/cache.png";
    img3.src="./images/cache.png";
    img4.src="./images/cache.png";
    celebration.classList.remove("celebration-on");
    celebration.classList.add("celebration-off");
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function verify() {
    if (counterVal>=2) {
        if (items[0]!=items[1]){
            sleep(500).then(() => { 
                img1.src="./images/cache.png";
                img2.src="./images/cache.png";
                img3.src="./images/cache.png";
                img4.src="./images/cache.png";
                console.log(items[0]);
                console.log(items[1]); 
                console.log("Pas de pièce");
            });
            
        } else {
            ++counterValWins;
            audioPiece.play();
            console.log(items[0]);
            console.log(items[1]);
            console.log("pièce");
        }
        if (counterValWins>=2) {
            console.log("Vous avez gagné");
            celebration.classList.remove("celebration-off");
            celebration.classList.add("celebration-on");
            audioWin.play();
        }
    items.splice(0, items.length);
    counterVal = 0;
    }
}
