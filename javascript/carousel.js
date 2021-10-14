const items = [
    '../images/01.jpg',
    '../images/02.jpg',
    '../images/03.jpg',
    '../images/04.jpg',
    '../images/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const activeContainer = document.getElementById('container-active');
const menuContainer = document.getElementById('container-menu');


for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const img = document.createElement('img');
    img.src = element;
    img.alt = `image-${i}`;
    img.id = `image-${i}`;
    console.log(img.src);
    menuContainer.appendChild(img); 
}

const activeImage = document.createElement('img')
activeImage.src = items[1];
activeContainer.appendChild(activeImage);
const activeMenuImage = document.getElementById('image-1');
activeMenuImage.setAttribute('class', 'active-menu-image');


const chevronUp = document.querySelector('.fa-chevron-up');
const chevronDown = document.querySelector('.fa-chevron-down');

chevronUp.addEventListener('click', function(){
    //immagine attualmente nel container principale
    const currentActive = document.querySelector('.active-menu-image');
    //estrapolo numero dall'id dell'attuale immagine principale
    let currentIndex = parseInt(currentActive.id.replace( /^\D+/g, ''));
    //aumento l'indice di 1
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = 4;
    }
    //riassegno l'src col nuovo src del nuovo indice
    currentActive.classList.remove('active-menu-image');
    const newActive = document.getElementById(`image-${currentIndex}`);
    newActive.setAttribute('class', 'active-menu-image');
    activeImage.src = items[currentIndex];
})
chevronDown.addEventListener('click', function(){
    //immagine attualmente nel container principale
    const currentActive = document.querySelector('.active-menu-image');
    //estrapolo numero dall'id dell'attuale immagine principale
    let currentIndex = parseInt(currentActive.id.replace( /^\D+/g, ''));
    //aumento l'indice di 1
    currentIndex++;
    if(currentIndex === items.length){
        currentIndex = 0;       
    }
    //riassegno l'src col nuovo src del nuovo indice
    currentActive.classList.remove('active-menu-image');
    const newActive = document.getElementById(`image-${currentIndex}`);
    newActive.setAttribute('class', 'active-menu-image');
    activeImage.src = items[currentIndex];
})
