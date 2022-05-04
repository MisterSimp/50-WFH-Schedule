const gridMay = document.querySelector('#gridMay')

function generateMonthMay(days) {
    for (let i = 1; i < days + 1; i++) {
        gridMay.innerHTML += `
        <div class='days'>${i}<div>
        `
    }
}

generateMonthMay(31)

const gridJune = document.querySelector('#gridJune')

function generateMonthJune(days) {
    for (let i = 0; i < 3; i++) {
        gridJune.innerHTML += `
        <div><div>`
    }
    for (let i = 1; i < days + 1; i++) {
        gridJune.innerHTML += `
        <div class='days'>${i}<div>
        `
    }
}

generateMonthJune(30)

const gridJuly = document.querySelector('#gridJuly')

function generateMonthJuly(days) {
    for (let i = 0; i < 5; i++) {
        gridJuly.innerHTML += `
        <div><div>`
    }
    for (let i = 1; i < days + 1; i++) {
        gridJuly.innerHTML += `
        <div class='days'>${i}<div>
        `
    }
}

generateMonthJuly(31)

const days = document.querySelectorAll('.days')

function generateColor() {
    var flag = 0;
    var rot = 0;
    for (let day of days) {
        if (flag === 0) {
            day.classList.add('off')
            flag = 1
        } else if (flag === 1 && rot === 0) {
            day.classList.add('office')
            flag = 0
            rot++
        } else if (flag === 1 && rot === 1) {
            day.classList.add('wfh')
            flag = 0
            rot--
        }
    }
}

generateColor()

