// @ts-nocheck
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultUser = {
  _id: null,
  email: '',
  token: '',
};

const initialUser = browser && localStorage.getItem('userData') 
  ? JSON.parse(localStorage.getItem('userData')) 
  : defaultUser;

export const userStore = writable(initialUser);

if (browser) {
  userStore.subscribe((user) => {
    if (user && user.token) {
      localStorage.setItem('userData', JSON.stringify(user));
    } else {
      localStorage.removeItem('userData');
    }
  });
}