// import axios from 'axios';

// axios.defaults.baseURL = 'https://6283e9aba48bd3c40b687ce1.mockapi.io';

// export async function fetchContacts() {
//   const { data } = await axios.get('/contacts');
//   console.log('fetch');
//   return data;
// }

// export async function addContact(contact) {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// }

// export async function deleteContact(id) {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// }

// -----------------------------------

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export async function fetchContacts() {
//   const { data } = await axios.get('/contacts');
//   return data;
// }

// export async function addContact(contact) {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// }

// export async function deleteContact(id) {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// }

// export async function register(credentials) {
//   const { data } = await axios.post('/users/signup', credentials);
//   return data;
// }

// export async function logIn(credentials) {
//   const { data } = await axios.post('/users/login', credentials);
//   return data;
// }

// export async function logOut() {
//   await axios.post('/users/logout');
// }
