const slides = [
	{
		"image":"Video.jpg",
		"tagLine":"Vous pouvez publier vos vidéos et les partager"
	},
	{
		"image":"collaboratif_petite.jpg",
		"tagLine":"Vous pouvez publier vos articles et entamer des discussions"
	},
	{
		"image":"Document_petite.jpg",
		"tagLine":"Vous pouvez partager vos documents"
	}
]

const banner = document.getElementById('#carousel');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const imageElement = document.querySelector('#carousel > img');
const nomElement = document.querySelector('#carousel > p');