//normal fonk.
function add2 (a,b){
    return a+b
}

//ok fonksiyonu şu şekilde tanımlanır:
var sum = 0
const addition = (...numbers) => {
    for(number of numbers){
        sum+=number
    }
    return sum
}

console.log(addition(2,8,3,7,5))
console.log(add2(2,3))

// higher order funs.: cube fonksiyonu parametre olarak fonk(callback) alıp return eder
const callback = (n) =>{
    return n**2
}

function cube(callback, n) {
    return callback(n)*n
}

console.log(cube(callback,3))


//returnin an other func.
const a = n=>{
    const b = m =>{
        const c = t =>{
            return 2*n+3*m+t
        }
        return c
    }
    return b
}
console.log(a(2)(3)(10))

//dizi içi elemanları gezmek için forEach kullanabiliriz
let total = 0
const numbers = [1,2,3,4,5,6,7,8,9]
numbers.forEach(number => total += number)
console.log(total)


//setInterval() içine yazılan fonksiyonun ne kadar aralıklarla tekarralanacağını belirlemek 
//için kullanıyoruz. o aralığıda parametre olarak veriyoruz
function sayHello(){
    console.log('hello')
}
setInterval(sayHello,3000) // 3sn de bir sayHello yu çağır
// tekrarlamasından ziyade belli bir zaman sonra yazmasını istersek setTimeout(funct,milisecond) şeklinde yazmamız yeterli

const interval = setInterval(sayHello,1000)
//clearInterval
//clearTimeout

setTimeout(() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi!vv')
},5000)


//Set is a collection of elements. Set can only contains unique elements.
const companies = new Set()
companies.add('c1')
companies.add('c2')
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  /* the result : (unique values)
  0: "English"
  1: "Finnish"
  2: "French"
  3: "Spanish"*/


  //----------------------

  //difference between objects and map is that you can give any value type to keys 
  let students = new Map();