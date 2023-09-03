import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './sw-register';
import App from '../component/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', async () => {
    const app = new App(document.getElementById('app'));

    const logo = document.querySelector('#toggle-dropdown');
    const navbar = document.querySelector('.navbar');

    logo.addEventListener('click', () => {
        navbar.classList.toggle('show-dropdown');
    });

    document.querySelector('.skip-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.skip-link').blur();
        document.getElementById('app').scrollIntoView();
    });

    window.addEventListener('load', () => {
        app.render();
        swRegister();
    });

    window.addEventListener('hashchange', () => {
        app.render();
    });
});
