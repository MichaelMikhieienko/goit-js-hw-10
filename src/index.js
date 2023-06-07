import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
breedSelect.style.display = 'none';
error.style.display = 'none';

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  breedSelect.style.display = 'none';

  showLoader();
  hideError();
  fetchBreeds()
    .then(breeds => {
      breedSelect.style.display = 'block';
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      showError();
    })
    .finally(() => {
      hideLoader();
    });
});

const catInfo = document.querySelector('.cat-info');

function updateCatInfo(cat) {
  console.log(cat);
  catInfo.innerHTML = `
    <img src="${cat.url}" alt="${cat.breeds[0].name}" width="400px" />
    <h2>${cat.breeds[0].name}</h2>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
  `;
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  showLoader();
  fetchCatByBreed(selectedBreedId)
    .then(cats => {
      if (cats.length > 0) {
        const cat = cats[0];
        updateCatInfo(cat);
      }

      hideError();
    })
    .catch(error => {
      console.error('Error:', error.message);
      showError();
    })
    .finally(() => {
      hideLoader();
    });
});
