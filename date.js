const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

// months isminde bir dizi oluşturalım
console.log(year , day, month, hour, minute, second, dayNumber)
//date.js: 2023 15 4 13 29 45 1

let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]} ${hour}:${minute}:${second}`
console.log(humanReadableDate)

/*
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`
console.log(text)
*/