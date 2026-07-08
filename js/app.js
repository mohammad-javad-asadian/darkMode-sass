"use strict"

const $ = document
const btnDarkMode = $.querySelector('#btnDarkMode')
const btnLightMode = $.querySelector('#btnLightMode')

const cardMain = $.querySelector('#cardMain')
const cardAbout = $.querySelector('#cardAbout')
const cardTitle = $.querySelector('#cardTitle')

const txtUserName = $.querySelector('#txtUserName')
const txtUserEmail = $.querySelector('#txtUserEmail')
const txtUserWebSite = $.querySelector('#txtUserWebSite')

const txtNumberShots = $.querySelector('#txtNumberShots')
const txtNumberFollowing = $.querySelector('#txtNumberFollowing')
const txtNumberFollower = $.querySelector('#txtNumberFollower')




localStorage.setItem('colorMode', 'light')


function getAllUsers(api) {
    const request = fetch(api)
    const response = request.then(res => res.json())
    response.then(data => showData(data))
}


function showData(data) {
    let webSiteData = []
    let nameData = []
    let emailData = []
    data.forEach(data => {
        webSiteData.push(data.website)
        nameData.push(data.name)
        emailData.push(data.email)
    });


    txtUserName.innerHTML = nameData[Math.floor(Math.random() * 9)]
    txtUserEmail.innerHTML = emailData[Math.floor(Math.random() * 9)]
    txtUserWebSite.innerHTML = webSiteData[Math.floor(Math.random() * 9)]
}

function darkMode() {
    if (localStorage.getItem('colorMode') == 'light') {
        localStorage.setItem('colorMode', 'dark')
        $.documentElement.style.backgroundColor = '#1e2939'
        btnDarkMode.classList.add('hidden')
        btnLightMode.classList.remove('hidden')
        btnLightMode.style.backgroundColor = '#1e2939'
        cardAbout.style.backgroundColor = '#fff'
        cardTitle.style.backgroundColor = '#d1d5dc'
        cardMain.style.borderColor = '#fff'
    }
}

function lightMode() {
    if (localStorage.getItem('colorMode') == 'dark') {
        localStorage.setItem('colorMode', 'light')
        $.documentElement.style.backgroundColor = '#ffff'
        btnDarkMode.classList.remove('hidden')
        btnLightMode.classList.add('hidden')
        cardTitle.style.backgroundColor = '#fefce8'
        cardMain.style.borderColor = '#000'
    }
}

function showNumberData(shots, following, follower) {
    let i = 0
    let setNumberShots = setInterval(() => {
        txtNumberShots.innerHTML = i
        if (i >= shots) {
            clearInterval(setNumberShots);
        }
        i++
    }, 50);

    let j = 0
    let setNumberFollowing = setInterval(() => {
        txtNumberFollowing.innerHTML = j
        if (j >= following) {
            clearInterval(setNumberFollowing);
        }
        j++
    }, 50);

    let x = 0
    let setNumberFollower = setInterval(() => {
        txtNumberFollower.innerHTML = x
        if (x >= follower) {
            clearInterval(setNumberFollower);
        }
        x++
    }, 10);
}

btnDarkMode.addEventListener('click', darkMode)
btnLightMode.addEventListener('click', lightMode)
window.addEventListener('load', showData, getAllUsers("https://jsonplaceholder.typicode.com/users"), showNumberData(17, 25, 128))


