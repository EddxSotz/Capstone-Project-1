const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-menu');
const title = document.querySelector('.nav_title');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  title.classList.toggle('active');
  toggleButton.classList.add('hide');
  closeButton.classList.add('show');
});

closeButton.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  title.classList.remove('active');
  toggleButton.classList.remove('hide');
  closeButton.classList.remove('show');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  toggleButton.classList.remove('hide');
  closeButton.classList.remove('show');
  navbarLinks.classList.remove('active');
  title.classList.remove('active');
}));

// define array for storing  object data
const arrayElements = [];
const band1 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_1.png',
};
const band2 = {
  title: 'Band 2', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_2.png',
};
const band3 = {
  title: 'Band 3', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_3.png',
};
const band4 = {
  title: 'Band 4', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_4.png',
};
const band5 = {
  title: 'Band 5', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_5.png',
};
const band6 = {
  title: 'Band 6', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'images/band_6.png',
};

arrayElements.push(band1);
arrayElements.push(band2);
arrayElements.push(band3);
arrayElements.push(band4);
arrayElements.push(band5);
arrayElements.push(band6);

const mainContainer = document.querySelector('.container');

// loop through the elements and creating all dinamically
for (let i = 0; i < arrayElements.length; i += 1) {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card_content';
  const cardContent = document.createElement('div');
  cardContent.className = 'text_wrap';

  // create and append card image
  const imgSource = arrayElements[i].imageURL;
  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', `${imgSource}`);
  cardImage.setAttribute('style', 'width: 200px; height: 200px');
  // create and append title to card
  const cardTitle = document.createElement('h4');
  cardTitle.textContent = arrayElements[i].title;
  cardContent.appendChild(cardTitle);
  // create an em and append it to card
  const cardEm = document.createElement('em');
  cardEm.textContent = arrayElements[i].members;
  cardContent.appendChild(cardEm);
  // create an p element and append to card
  const cardDescription = document.createElement('p');
  cardDescription.textContent = arrayElements[i].description;
  cardContent.appendChild(cardDescription);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardContent);
  mainContainer.appendChild(cardContainer);
}

const moreButton = document.querySelector('.more_button');
const lessButton = document.querySelector('.less_button');
const allCards = document.getElementsByClassName('card_content');

const screenSize = window.matchMedia('(max-width: 768px)');

function myFunction(x) {
  if (x.matches) {
    allCards[0].setAttribute('style', ' display: flex;');
    allCards[1].setAttribute('style', ' display: flex;');
    allCards[2].setAttribute('style', ' display: none;');
    allCards[3].setAttribute('style', ' display: none;');
    allCards[4].setAttribute('style', ' display: none;');
    allCards[5].setAttribute('style', ' display: none;');
    moreButton.setAttribute('style', ' display: block;');

    moreButton.addEventListener('click', () => {
      moreButton.setAttribute('style', ' display: none;');
      lessButton.setAttribute('style', ' display: block;');
      allCards[2].setAttribute('style', ' display: flex;');
      allCards[3].setAttribute('style', ' display: flex;');
      allCards[4].setAttribute('style', ' display: flex;');
      allCards[5].setAttribute('style', ' display: flex;');
    });

    lessButton.addEventListener('click', () => {
      moreButton.setAttribute('style', ' display: block;');
      lessButton.setAttribute('style', ' display: none;');
      allCards[2].setAttribute('style', ' display: none;');
      allCards[3].setAttribute('style', ' display: none;');
      allCards[4].setAttribute('style', ' display: none;');
      allCards[5].setAttribute('style', ' display: none;');
    });
  } else {
    moreButton.setAttribute('style', ' display: none;');
    lessButton.setAttribute('style', ' display: none;');
    allCards[0].setAttribute('style', ' display: flex;');
    allCards[1].setAttribute('style', ' display: flex;');
    allCards[2].setAttribute('style', ' display: flex;');
    allCards[3].setAttribute('style', ' display: flex;');
    allCards[4].setAttribute('style', ' display: flex;');
    allCards[5].setAttribute('style', ' display: flex;');
  }
}

myFunction(screenSize);
screenSize.addListener(myFunction);
