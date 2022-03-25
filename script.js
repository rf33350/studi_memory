var counterVal = 0;
const items = [];

const btstart = document.querySelector('.start');
btstart.addEventListener('click', () => {
    window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth"
    })
});

const img1 = document.querySelector('.img1');
img1.addEventListener('click', () => {
   img1.src="./images/luigi.jpg";
   ++counterVal;
   items.push("luigi");
   verify();
});

const img2 = document.querySelector('.img2');
img2.addEventListener('click', () => {
    img2.src="./images/mario.jpg";
    ++counterVal;
    items.push("mario");
    verify();
});

const img3 = document.querySelector('.img3');
img3.addEventListener('click', () => {
    img3.src="./images/luigi.jpg";
    ++counterVal;
    items.push("luigi");
    verify();
});

const img4 = document.querySelector('.img4');
img4.addEventListener('click', () => {
    img4.src="./images/mario.jpg";
    ++counterVal;
    items.push("mario");
    verify();
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    img1.src="./images/cache.png";
    img2.src="./images/cache.png";
    img3.src="./images/cache.png";
    img4.src="./images/cache.png";
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
                img4.src="./images/cache.png"; });
            
        } else {
        }
        items.splice(0, items.length);
        counterVal = 0;
    } else {}

    //ce if ne marche pas encore
    if ( img1.src!="./images/cache.png" && img2.src!="./images/cache.png" ) {
        console.log(img1.src!="./images/cache.png" && img2.src!="./images/cache.png"); //renvoie true...shit!!
        console.log(img1.src!="http://127.0.0.1:5500/images/cache.png"); //true
        console.log(img2.src!="http://127.0.0.1:5500/images/cache.png"); //false
        console.log(img3.src!="http://127.0.0.1:5500/images/cache.png"); //false
        console.log(img4.src!="http://127.0.0.1:5500/images/cache.png"); //false
        console.log("Vous avez gagné!");
        console.log(img1.src);
        console.log(img2.src);
        console.log(img3.src);
        console.log(img4.src);
    } else {
        console.log("pas encore gagné");
    }
}

const btnInit = document.querySelector('.btn');
btn.addEventListener('click', () => {
    img1.src="./images/cache.png";
    img2.src="./images/cache.png";
    img3.src="./images/cache.png";
    img4.src="./images/cache.png";
});
