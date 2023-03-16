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
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};
const band2 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};
const band3 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};
const band4 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};
const band5 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};
const band6 = {
  title: 'Band 1', members: 'Formed by Jhon Doe and Jane Doe', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', imageURL: 'https://free-images.com/lg/b1c2/guitar_band_music_rock.jpg'
};

arrayElements.push(band1);
arrayElements.push(band2);
arrayElements.push(band3);
arrayElements.push(band4);
arrayElements.push(band5);
arrayElements.push(band6);

const mainContainer = document.querySelector(".container");
//loop through the elements and creating all dinamically 
for (let i = 0; i < arrayElements.length; i += 1) {
const cardItem = document.createElement("div");
div.className = 'card_content';
//create and append card image
const imgSource = arrayElements[i].imageURL;
const cardImage = document.createElement("img");
cardImage.setAttribute('src', `${imgSource}`); 
cardImage.setAttribute('style', 'width: 50px;');
cardItem.appendChild(cardImage);
//create and append title to card
const cardTitle = document.createElement("h4");
cardTitle.textContent = arrayElements[i].title;
cardItem.appendChild(cardTitle);
//create an em and append it to card
const cardEm = document.createElement("em");
cardEm.textContent = arrayElements[i].members;
cardItem.appendChild(cardEm);
//create an p element and append to card
const cardDescription = document.createElement("p");
cardDescription.textContent = arrayElements[i].description;
cardItem.appendChild(cardDescription);

mainContainer.appendChild(cardItem);

}

