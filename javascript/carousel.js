/////////////////////
//ARRAYS DECLARATION//
/////////////////////

//img
const items = [
    '../images/01.jpg',
    '../images/02.jpg',
    '../images/03.jpg',
    '../images/04.jpg',
    '../images/05.jpg'
];

//h1
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

//h3
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/////////////////////////
//VARIABLES DECLARATION//
/////////////////////////

//main container with selected image
const activeContainer = document.getElementById('container-active');
//right menu container
const menuContainer = document.getElementById('container-menu');
//h1 text
const textContainerh1 = document.querySelector('.text-container h1');
//h3 text
const textContainerh3 = document.querySelector('.text-container h3');
//chevron up button
const chevronUp = document.querySelector('.fa-chevron-up');
//chevron down button
const chevronDown = document.querySelector('.fa-chevron-down');

///////////////////////////////
//RIGHT MENU IMAGE POPULATION//
///////////////////////////////

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    //new image
    const img = document.createElement('img');
    //image src set
    img.src = element;
    //image alt set
    img.alt = `image-${i}`;
    //image id set
    img.id = `image-${i}`;
    //append image to right menu
    menuContainer.appendChild(img); 
}

////////////////////////////
//MAIN CONTAINER IMAGE SET//
////////////////////////////

const activeImage = document.createElement('img');
//default source => first array index
activeImage.src = items[1];
//append default image to main container
activeContainer.appendChild(activeImage);
//set default country name in main container
textContainerh1.textContent = title[1];
//set default subtitle in main container
textContainerh3.textContent = text[1];
//get active image in right menu
const activeMenuImage = document.getElementById('image-1');
//set active class to active image in right menu
activeMenuImage.setAttribute('class', 'active-menu-image');

/////////////////////////////
//CHEVRON UP EVENT LISTENER//
/////////////////////////////

chevronUp.addEventListener('click', function(){
    //get current selected main container image
    const currentActive = document.querySelector('.active-menu-image');
    //get current selected main container image ID, remove chars, parse int
    let currentIndex = parseInt(currentActive.id.replace( /^\D+/g, ''));
    //decrease current index
    currentIndex--;
    //case negative index, reset to max index
    if(currentIndex < 0)
        currentIndex = (items.length - 1);//-1 cause array starts from 0
    //remove active class to old selected image
    currentActive.classList.remove('active-menu-image');
    //get new image to load using calculated index
    const newActive = document.getElementById(`image-${currentIndex}`);
    //add active classs to new selected image
    newActive.setAttribute('class', 'active-menu-image');
    //set source of the new selected image
    activeImage.src = items[currentIndex];
    //add fadeIn animation to new image
    activeImage.animate([
        // keyframes
        { opacity : '0' },
        { opacity : '1' }
      ], {
        // timing options
        duration: 500,
        iterations: 1
      });
    //set new h1 text of new index
    textContainerh1.textContent = title[currentIndex];
    //set new h3 text of new index
    textContainerh3.textContent = text[currentIndex];
})

///////////////////////////////
//CHEVRON DOWN EVENT LISTENER//
///////////////////////////////

chevronDown.addEventListener('click', function(){
    //get current selected main container image
    const currentActive = document.querySelector('.active-menu-image');
    //get current selected main container image ID, remove chars, parse int
    let currentIndex = parseInt(currentActive.id.replace( /^\D+/g, ''));
    //increase current index
    currentIndex++;
    //case index reaches max position, reset to 0
    if(currentIndex === items.length)
        currentIndex = 0; 
    //remove active class to old selected image
    currentActive.classList.remove('active-menu-image');
    //get new image to load using calculated index
    const newActive = document.getElementById(`image-${currentIndex}`);
    //add active classs to new selected image
    newActive.setAttribute('class', 'active-menu-image');
    //set source of the new selected image
    activeImage.src = items[currentIndex];
    //add fadeIn animation to new image
    activeImage.animate([
        // keyframes
        { opacity : '0' },
        { opacity : '1' }
      ], {
        // timing options
        duration: 500,
        iterations: 1
      });
    //set new h1 text of new index
    textContainerh1.textContent = title[currentIndex];
    //set new h3 text of new index
    textContainerh3.textContent = text[currentIndex];
})