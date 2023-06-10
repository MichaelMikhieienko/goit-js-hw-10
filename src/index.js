import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const loaderElement = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

fetchBreeds()
  .then(breeds => {
    breedSelect.classList.remove('is-hidden');
    loaderElement.classList.add('is-hidden');
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(err => {
    console.error(err);
    loaderElement.classList.add('is-hidden');
    errorElement.classList.remove('is-hidden');
  });

const catInfo = document.querySelector('.cat-info');

function updateCatInfo(cat) {
  catInfo.innerHTML = `
    <img src="${cat.url}" alt="${cat.breeds[0].name}" width="400px" />
    <h2>${cat.breeds[0].name}</h2>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
  `;
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  loaderElement.classList.remove('is-hidden');
  catInfo.classList.add('is-hidden');
  errorElement.classList.add('is-hidden');
  fetchCatByBreed(selectedBreedId)
    .then(cats => {
      if (cats.length > 0) {
        const cat = cats[0];
        updateCatInfo(cat);
      }

      catInfo.classList.remove('is-hidden');
      loaderElement.classList.add('is-hidden');
    })
    .catch(error => {
      console.error('Error:', error.message);
      loaderElement.classList.add('is-hidden');
      errorElement.classList.remove('is-hidden');
    });
});
