const slides = [
	{
		"image":"Video.jpg",
        "text":"Echanges Vidéo et partage",
		"tagLine":"Vous pouvez publier vos vidéos et les partager"
	},
	{
		"image":"collaboratif_petite.jpg",
        "text":"Publication d'article et partage",
		"tagLine":"Vous pouvez publier vos articles et entamer des discussions"
	},
	{
		"image":"Document_petite.jpg",
        "text":"Echanges Documents et partage",
		"tagLine":"Vous pouvez partager vos documents"
	}
]

const banner = document.getElementById('#carousel');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const imageElement = document.querySelector('#carousel > img');
const nomElement = document.querySelector('#carousel > .tagLine');
const nomfirstTagLineElement = document.querySelector('#carousel > .text');

let i = 0;

left.addEventListener('click', function() {
    if (i === 0) {
        i = slides.length - 1;
    } else {
        i--
    }
    showSlide();
});

right.addEventListener('click', function() {
    if (i === slides.length -1) {
        i = 0;
    } else {
        i++
    }
    showSlide();
});
function showSlide() {
    imageElement.src = `./assets/images/${slides[i].image}`;
    nomElement.innerHTML = slides[i].tagLine;
    nomfirstTagLineElement.innerHTML = slides[i].text;
}

function dotsShow () {
    const dots = document.querySelector('.dots'); 
    for (let j =0; j < slides.length; j++) {
    const dot = document.createElement('div');
    dot.id = 'div' + j;
    dot.addEventListener('click', function(event) {
    i = Number(event.target.id.replace('div', ''));
    showSlide();
    });
    dot.classList.add('dot');
    dots.appendChild(dot);
    if (i == 0) {
        dots.children[j].classList.add('.dot-selected');
    }
 }
}
dotsShow();

function selected() {
    const dot = document.getElementsByClassName('dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('dot-selected');
    }
    dot[i].classList.add('dot-selected');
}