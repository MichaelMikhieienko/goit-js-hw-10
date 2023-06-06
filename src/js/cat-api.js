const baseUrl = 'https://api.thecatapi.com/v1';
const apiKey =
  'live_nvN6V6WTD2gDfrOOwxXVO5XLV6poYxUSpIOxGLDBmwCrEPx5gNr0c2il0DOGmlwy';

// Функция для получения пород
export function fetchBreeds() {
  const url = `${baseUrl}/breeds`;

  // Возвращаем промис, который выполнится после получения данных
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = `${baseUrl}/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  // Возвращаем промис, который выполнится после получения данных
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    }
    return response.json();
  });
}
