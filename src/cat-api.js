// Функция для получения пород
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  // Возвращаем промис, который выполнится после получения данных
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}


export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_nvN6V6WTD2gDfrOOwxXVO5XLV6poYxUSpIOxGLDBmwCrEPx5gNr0c2il0DOGmlwy`;
  
    // Возвращаем промис, который выполнится после получения данных
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching cat:', error);
        throw error;
      });
  }
