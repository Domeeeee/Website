// variables 

window.onload = function() { 
let btn = document.getElementById('btn'); 
const colors = [
	1,2,3,4,5,6,7,8,9,'a','b','a','b','c','d','e','f'
];

let color = '#';
let backgroundSection = document.getElementById('call'); 

//Logic!
//
btn.addEventListener('click', getColor); 

function getColor() {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random()*colors.length);
		color += colors[random];
	}
	backgroundSection.style.backgroundColor = color;

}

}




// Clients Say

//Variables

const text = [
	{
		"quote": "Sit numquam maiores dolorem distinctio provident nisi, voluptatem nulla minima quis quasi dolorum Nam consequatur omnis rerum recusandae sint A beatae reprehenderit quasi explicabo saepe cupiditate? Reiciendis distinctio debitis qui omnis sint pariatur impedit? Doloremque nam est odit sint recusandae commodi? Deleniti ad earum non sint eum beatae qui Alias reprehenderit dolorem ipsum unde repudiandae",
		"author": "Susan Smith",
		"country": "Germany"
	},
	{
		"quote": "Consectetur consectetur quo delectus neque ipsam? Nisi sunt deleniti fuga magni aspernatur. Exercitationem aut adipisci pariatur molestias maxime ratione. Possimus libero placeat magni in eveniet. Sit sequi voluptatibus eaque quam corporis voluptates. Vero eius harum necessitatibus recusandae perspiciatis Deleniti eum enim non tempora molestiae Exercitationem eaque iure pariatur optio nobis? Asperiores velit excepturi nihil esse",
		"author": "Will Williams",
		"country": "Italy"
	},
	{
		"quote": "Dolor mollitia quam facilis sed aperiam. Consectetur quisquam asperiores quasi culpa minus Quam expedita modi iste vel soluta. Quos iure non in consectetur ratione. Nisi delectus doloribus tempora cum nostrum Eveniet voluptas consequatur quisquam sint sequi natus vel sunt explicabo quasi illum? Veniam nulla ea ex sed odit Blanditiis eius ipsa quo deserunt perspiciatis Quis. djskadsd asdsdsdd dsaaaieI  Isdaw.",
		"author":  "John k.",
		"country": "Canada"
	},
	{
		"quote": "Ipsum omnis quibusdam ipsum asperiores illo? Explicabo alias autem ut commodi ut placeat Inventore velit aliquam aut consequuntur quasi Quisquam saepe recusandae fugit sit accusamus Blanditiis aut et aut aperiam deserunt? Veniam neque eligendi aliquid eligendi earum voluptate? Asperiores deserunt cupiditate ducimus numquam nulla ea. Saepe quasi soluta fuga blanditiis quam aperiam aliquam. Minima cumque.",
		"author": "Lisa Fox",
		"country": "Croatia"
	},
	{
		"quote": "Lorem officiis adipisci impedit accusamus quis atque Doloribus ratione voluptatibus debitis explicabo eveniet reiciendis aliquid Distinctio autem rerum aliquid nobis autem provident Architecto dolores vero veritatis inventore inventore officiis? Dolores totam atque illum veniam voluptatibus. Fugiat architecto dolores odio sapiente corporis nemo? In consectetur ad vel vitae enim Blanditiis aliquid consectetur iste veritatis amet. Inventore.",
		"author": "Julien Williams",
		"country": "Russia"
	},
	{
		"quote": "Dolor explicabo molestiae laudantium sunt est? Quisquam consequuntur id provident quas harum lorem quam. Voluptate odio unde tempore aut in? Pariatur quod temporibus eveniet eligendi inventore, impedit? Iure nisi eligendi iure voluptatibus dolor? Illum rem in in quisquam praesentium Commodi necessitatibus aut alias alias aliquid Blanditiis mollitia sit autem error blanditiis illum Debitis ex culpa?",
		"author": "Felix Hofman",
		"country": "France"
	},
	{
		"quote": "Sit dolore fugiat voluptatum excepturi sint Tenetur dolor odit dolor officiis perspiciatis Amet illum dicta molestiae placeat corrupti Nobis reiciendis quaerat non blanditiis modi, fugit! Qui quidem veniam voluptatem totam excepturi dolore, earum voluptatem Doloremque hic amet cupiditate dolorum nisi, iusto nobis architecto? Molestiae exercitationem eos quos corporis modi Eaque minus assumenda distinctio delectus rem!",
		"author": "Jonathan Ma",
		"country": "Austria"
	}
];


let quote = document.getElementById('quote'); 
let btnNext = document.getElementById('btnNext'); 
let author = document.getElementById('author'); 
let country = document.getElementById('country'); 
let pic = document.getElementById('pic'); 
let clients = document.getElementById('clients'); 

// Event Listener
//

btnNext.addEventListener('click', getQuote); 



function getQuote() {
	let number = Math.floor(Math.random() * text.length);


	country.innerHTML = text[number].country; 
	quote.innerHTML = '<span>" </span>' + text[number].quote + '<span> "</span>';
	author.innerHTML = text[number].author; 
}

//Change back img

function changeImg () {
	const img = [
		"../../Bilder/asphalt.jpg",
		"../../Bilder/notiz.jpg",
		"../../Bilder/iphone.jpeg"
		
		
		
	]; 
	let i = Math.floor(Math.random() * 3);
	document.getElementById('clients').style.backgroundImage = 'url("' + img[i] + '")';   

}
setInterval(changeImg, 3000);















