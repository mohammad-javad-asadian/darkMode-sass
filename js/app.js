"use strict"

const $ = document
const btnDarkMode = $.querySelector('#btnDarkMode')
const btnLightMode = $.querySelector('#btnLightMode')

const cardMain = $.querySelector('#cardMain')
const cardAbout = $.querySelector('#cardAbout')
const cardTitle = $.querySelector('#cardTitle')

localStorage.setItem('colorMode', 'light')

btnDarkMode.addEventListener('click', () => {
    if (localStorage.getItem('colorMode') == 'light') {
        localStorage.setItem('colorMode', 'dark')
        $.documentElement.style.backgroundColor = '#1e2939'
        btnDarkMode.classList.add('hidden')
        btnLightMode.classList.remove('hidden')
        cardAbout.style.backgroundColor = '#fff'
        cardTitle.style.backgroundColor = '#d1d5dc'
        cardMain.style.borderColor = '#fff'
    }
})

btnLightMode.addEventListener('click', () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        localStorage.setItem('colorMode', 'light')
        $.documentElement.style.backgroundColor = '#ffff'
        btnDarkMode.classList.remove('hidden')
        btnLightMode.classList.add('hidden')
        cardTitle.style.backgroundColor = '#fefce8'
        cardMain.style.borderColor = '#000'
    }
})