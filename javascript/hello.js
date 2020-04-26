// let ironMan = {
// 	name: 'Tony Stark',
// 	age: 30,
// 	email:'tonystark@gmail.com',
// 	superPowers: ['Flying', 'WarMachine', 'SmartTech', 'FastRunner'],
// 	isSuperHero : true,

// 	fly: () => {
// 		console.log('ironman is Flying');
// 	},

// 	intro : () => {
// 		console.log('I\'m Ironman');
// 	},

// 	logIronMan(){
// 		console.log('i\'m in ironman log function');
// 		console.log(this);
// 	}

// }

// let thor = {
// 	name: 'Thor',
// 	age: 1000,
// 	address: 'Aspgard',
// 	logThor(){
// 		console.log('i\'m in Thor log function');
// 		console.log(this);
// 	}
// }

// ironMan.fly();

// ironMan.logIronMan();

// thor.logThor();


// -------------------------------- Array Of Objects ----------------------------------
/*
let superHeroes = [
	{
		name:'Ironman',
		age: 34,
		color:'red',
		log(){
			console.log('Ironman log');
		}

	},
	{
		name:'Thor',
		age: 1034,
		color:'red and grey',
		log(){
			console.log('Thor log');
		}		
	},
	{
		name:'Hulk',
		age: 44,
		color:'green',
		log(){
			console.log('Hulk log');
		}		
	}
];

superHeroes.forEach( (hero) => {
	console.log(hero.color,hero.name,hero.age);
});

*/

// let random = Math.random();
// console.log(random);


// console.log(Math.floor(random));
// console.log(Math.ceil(random));

// const newyork = document.getElementById('newyork');

// newyork.style.color = "red";

// document.getElementById('change').onclick = () => {
// 	document.getElementById('newyork').style.color = 'red';
// }


// 
// document.getElementById('change').onclick = () => {
	
// const firstpara = document.querySelectorAll('p');
// firstpara.forEach( (para) => {
// 	para.style.color = "purple";
// 	para.style.fontSize = "22px";
// } );

// }


	


//  document.querySelector('button').onclick = () => {
//  	let citie = document.getElementsByClassName('city');
// 	for(let i=0; i<citie.length; i++){
// 		citie[0].style.color = 'red';
// 		citie[1].style.color = 'blue';
// 		citie[2].style.color = 'green';
// 	}
// }


//  document.querySelector('button').onclick = () => {
//  	let citie = document.getElementsByTagName('p');
// 	for(let i=0; i<citie.length; i++){
// 		citie[i].style.color = 'green';
// 	}
// }



//---------------Display and not display---------------------
// let button = document.getElementById('cityButton');
// let citylist = document.getElementById('cityList');
// let isDisplaying = true;


// button.onclick = () => {

// if (isDisplaying == true) {
// 	cityList.style.display = 'none';
// 	isDisplaying = false;
// }
// else{
// citylist.style.display = 'block';
// isDisplaying = true;
// }
// }

//******************Eventlistener**************
// let button = document.getElementById('cityButton');
// let citylist = document.getElementById('cityList');

// button.addEventListener('click', function(){
// 	cityList.style.color = 'blue'; 
// });

// document.addEventListener('keydown', () => {
// 	cityList.style.color = 'purple';
// 	citylist.style.fontSize = "30px";
// })



// let newPara = document.createElement('p');
// let newDiv = document.createElement('div');
// console.log(newDiv, newPara);

// document.body.appendChild(newPara);
// document.body.appendChild(newDiv);


//=================Add element ==================
// const button = document.getElementById('cityButton');
// const citylist = document.getElementById('cityList');
// const newCity = document.getElementById('input');

// button.addEventListener('click', () => {
// 	let newList = document.createElement('li');
// 	newList.innerText = newCity.value;
// 	cityList.appendChild(newList);

// })

//==============set attribute================
// const button = document.getElementById('cityButton');
// const citylist = document.getElementById('cityList');

// button.addEventListener('click', () => {

// 	cityList.setAttribute('class', 'greenCity');
// });



//=========class list(add,remove,toggle)==========
// const citylist = document.getElementById('cityList');

// cityList.classList.add('redCity');
// cityList.classList.remove('redCity');

// const toggle = document.getElementById('button');

// toggle.addEventListener('click', () => {
// 	cityList.classList.toggle('cityList');
// })

//===============mouseevents===============
 // const citylist = document.getElementById('cityList');
 // const para = document.getElementById('hoverPara');

 // para.addEventListener('mouseover', () => {

 // 	cityList.classList.toggle('cityList');
 // })


 // let country = 'India';

 // console.log(country.includes('a'));

 // let upperCaseText = country.toUpperCase();

 //  let lowerCaseText = country.toLowerCase();

 // console.log(upperCaseText);

 // console.log(lowerCaseText);

 // let userPassword = '{siddhant@#2000}';

 // if(userPassword.length > 9 && userPassword.includes('@')){
 // 	console.log('gud passwd');
 // }
 // else{
 // 	console.log('not gud');
 // }

// let hero = 'Elon Musk ';
// let planet = ' Mars ';

// let newString = `${hero} wants to send people to ${planet} in few years`;
// console.log(newString);


//==============Map Method ====================

// let stockPrices = [215,205,625,45,1475,215];

// let newStockPrices = stockPrices.map( (stock) => {
// 	return Math.round(stock * 1.1);
// } );

// console.log(newStockPrices);

// let cityArray = ['Mumbai', 'Bhopal', 'Delhi', 'Chandigarh', 'Srinagar'];

// let newCityArray = cityArray.map( (city) => {
// 	return city.toUpperCase();
// } );

// console.log(newCityArray);



//==============filter Method ================

// let superHeroes = [
// 	{
// 		name:'Ironman',
// 		assets: 354544,
// 		color:'red',
		

// 	},
// 	{
// 		name:'Thor',
// 		assets: 4034,
// 		color:'red and grey',
				
// 	},
// 	{
// 		name:'Hulk',
// 		assets: 244,
// 		color:'green',
				
// 	},
// 	{
// 		name:'Antman',
// 		assets: 50044,
// 		color:'applered',
				
// 	}

// ];

// let platiniumClients = superHeroes.filter((client) => {
// 	return client.assets >= 50000;
// } );

// console.log(platiniumClients);


// let clotheItems = [
// 	{name: 'Winter Scarf', price: 14.99, onSale: true},
// 	{name: 'Summer Hat', price: 9.99, onSale: false},
// 	{name: 'Aviators', price: 299.99, onSale: false},
// 	{name: 'Winter Coat', price: 129.99, onSale: true},
// 	{name: 'Christmas Crack', price: 9.99, onSale: true}

// ];

// let itemsOnSale = clotheItems.filter( (clothe)=>{
// 	return clothe.onSale;
// } );


// console.log(itemsOnSale);


//============reduce=============


// let marks = [65, 71, 54, 65, 91, 70, 92];

// let geniusStudents = marks.reduce( (total, grade)=>{
// 	if(grade >= 90){
// 		total++;
// 	}

// 	return total;
// }, 0);

// console.log(geniusStudents);

// let marks = [65, 71, 54, 65, 91, 70, 92];

// let student = marks.find( (grade)=>{
// 	return grade >= 90;
// })

// console.log(student);

// let marks = [65, 71, 54, 65, 91, 70, 92];

// marks.forEach((mks)=>{
// 	console.log(mks);
// })





//###################JQUERY###############################


// $('button').click( ()=>{
// 	console.log('buttonclicked');
// } );


// $('#myButton').click( ()=>{

// 	$('p').text('Kung Fu Panda');

// } );

// $('.myButton').click( ()=> {
// 	$('.firstAwesome').text('Master Shifu');
// });

// $('#nextButton').click( ()=> {
// 	$('#secondAwesome').text('Kung Fu Panda');
// });

// $('.myButton').click( ()=> {
// 	$('p').css('color', 'red');
// 	$('p').css({
// 		'fontSize' : '22px',
// 		'fontWeight' : 'bold'
// 	});

// });

//=============hide and display form==============

// $('.hide-button').click( ()=>{
// 	$('.contact-form').fadeOut('slow');
// } );


// $('.show-button').click( ()=>{
// 	$('.contact-form').fadeIn('slow');
// } );


// let isDisplay = true;

// $('.toggle-button').click( ()=>{
// 	if (isDisplay == true) {
// 		$('.contact-form').fadeOut('slow');
// 		isDisplay = false;
// 	}
// 	else{
// 		$('.contact-form').fadeIn('slow');
// 		isDisplay = true;
// 	}
// } );

// $('#add-class').click(()=>{
// 	$('p').addClass('red-class');
// });

// $('#remove-class').click(()=>{
// 	$('p').removeClass('red-class');

// });

// $('#change-button').click(()=>{
// 	$('#mountains').attr('src', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
// });

//=============ANIMATE(ONLY WORKS ON NUMERIC VALUES)=============

//animate(css params, speed, callbackfunction)

// $('button').click(()=>{
// 	$('.circle-div').animate({
// 		marginLeft: '600px',
// 		marginTop : '150px',
// 		height :'300px',
// 		width:'300px'
// 	},1300, ()=>{
// 		$('.circle-div').css('background-color', 'blue');
// 	});
// });

//================hover===================

// $('#mountains').hover(()=>{
// 	$('#mountains').animate({
// 		width:'700px',
// 		height:'700px',
// 		opacity:'0.75'
// 	},3000,() => {
// 		$('#mountains').animate({
// 			width:'600px',
// 		    height:'600px',
// 		    opacity:'1'
// 		},1200)
// 	});
// });


















































































































































































































































































































































