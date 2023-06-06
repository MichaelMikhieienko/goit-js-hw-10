import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select'

// new SlimSelect({
//   select: '#selectElement'
// })

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function showLoader() {
  loader.style.display = 'block';
}

// Функция для скрытия загрузчика
function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

// Функция для скрытия элемента ошибки
function hideError() {
  error.style.display = 'none';
}

// Вызываем функцию fetchBreeds при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  breedSelect.style.display = 'none';

  showLoader();
  hideError();
  fetchBreeds()
    .then(breeds => {
      breedSelect.style.display = 'block';
      // Наполняем select элемент опциями на основе полученных пород
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      // Обрабатываем ошибку
      console.error('Error:', error);
      // Показываем элемент ошибки
      showError();
    })
    .finally(() => {
      hideLoader();
    });
});

const catInfo = document.querySelector('.cat-info');

// Функция для обновления информации о коте в блоке cat-info
function updateCatInfo(cat) {
  console.log(cat);
  catInfo.innerHTML = `
    <img src="${cat.url}" alt="${cat.breeds[0].name}" width="400px" />
    <h2>${cat.breeds[0].name}</h2>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
  `;
}

// Слушаем событие изменения значения в селекте
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
      // Обрабатываем ошибку
      console.error('Error:', error.message);
      // Показываем элемент ошибки
      showError();
    })
    .finally(() => {
      hideLoader();
    });
});
