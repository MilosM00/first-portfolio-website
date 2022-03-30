"use strict";


const spanButtonAbout = document.querySelector(`.about-button-welcome`);
const spanButtonProjects = document.querySelector(`.projects-button-welcome`);
const spanButtonGoUp = document.querySelector(`.go-up-button-welcome`);

const buttonHome = document.querySelector(`.button-home`);
const buttonAbout = document.querySelector(`.button-about`);
const buttonProjects = document.querySelector(`.button-projects`);

const welcomeSection = document.querySelector(`.welcome`);
const aboutSection = document.querySelector(`.about-me`);
const projectsSection = document.querySelector(`.projects`);


const buttonsNav = function (){

    welcomeSection.classList.remove(`hidden--welcome`);
    buttonHome.style.setProperty(`--background-color`, `rgb(248, 248, 255)`);

    buttonHome.addEventListener(`click`, () =>{

        welcomeSection.classList.remove(`hidden--welcome`);
        aboutSection.classList.add(`hidden--about-me`);
        projectsSection.classList.add(`hidden--projects`);

        buttonHome.style.backgroundColor = `rgb(23, 169, 248)`;
        buttonAbout.style.backgroundColor = `rgb(9, 97, 146)`;
        buttonProjects.style.backgroundColor = `rgb(9, 97, 146)`;
    });

    buttonAbout.addEventListener(`click`, () =>{
        displayAbout();
    });

    buttonProjects.addEventListener(`click`, () =>{
        displayProjects();
    });

    spanButtonAbout.addEventListener(`click`, () =>{
        displayAbout();
        document.body.scrollIntoView();
    });

    spanButtonProjects.addEventListener(`click`, () =>{
        displayProjects();
        document.body.scrollIntoView();
    });

    spanButtonGoUp.addEventListener(`click`, () =>{
        document.body.scrollIntoView();
    });

}
buttonsNav();

const displayAbout = function(){
    aboutSection.classList.remove(`hidden--about-me`);
    welcomeSection.classList.add(`hidden--welcome`);
    projectsSection.classList.add(`hidden--projects`);

    buttonAbout.style.backgroundColor = `rgb(23, 169, 248)`;
    buttonHome.style.backgroundColor = `rgb(9, 97, 146)`;
    buttonProjects.style.backgroundColor = `rgb(9, 97, 146)`;
};

const displayProjects = function(){
    projectsSection.classList.remove(`hidden--projects`);
    welcomeSection.classList.add(`hidden--welcome`);
    aboutSection.classList.add(`hidden--about-me`);

    buttonProjects.style.backgroundColor = `rgb(23, 169, 248)`;
    buttonHome.style.backgroundColor = `rgb(9, 97, 146)`;
    buttonAbout.style.backgroundColor = `rgb(9, 97, 146)`;
};