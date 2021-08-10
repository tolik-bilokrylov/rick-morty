const URL = 'https://rickandmortyapi.com/api';

// export const getCharacter = async() => {
//   const response = await fetch(`${URL}/character`);
//   const result = await response.json();
  
//   return result.data;
// };
export const BASE_URL = 'https://rickandmortyapi.com/api';
// export const BASE_URL = 'https://bloggy-api.herokuapp.com';

// export const getCharacter = url => fetch(`${BASE_URL}${url}`)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error('Error');
//   })

// export const getCharacter = () => {
//   return fetch(`${URL}/character`)
//     .then(response => response.json())
//     .then(result => result.data);
// };


export const getUsers = async(userId) => {
  const response = await fetch(`${URL}/users/${userId}`);
  const result = await response.json();

  return result.data;
};