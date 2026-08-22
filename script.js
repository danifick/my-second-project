const billInput = document.querySelector('#bill-input')
const peopleNum = document.querySelector('#people-input')
const customInput = document.querySelector('.custom__input')
const tipBtn = document.querySelectorAll('.tip-btn')
const resBtn = document.querySelector('.btn__reset')
const Amount = document.querySelector('.tip-amount-result')
const Total = document.querySelector('.total-result')

let billValue = 0;
let peopleValue = 0;
let tipValue = 0


billInput.addEventListener('input', function() {

billValue = Number(billInput.value)
if (peopleValue > 0) {
    Total.textContent = `$${(billValue / peopleValue).toFixed(2)}`
}
})

peopleNum.addEventListener('input', function() {
peopleValue = Number(peopleNum.value)
if(peopleValue > 0) {
    Total.textContent = `$${(billValue / peopleValue).toFixed(2)}`
}
})

tipBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
   tipBtn.forEach(function(b) {
    b.classList.remove("active")
   })
    btn.classList.add("active")
     tipValue = parseFloat(btn.textContent)
     if(peopleValue > 0) {
        Amount.textContent = `$${(billValue * tipValue / 100 / peopleValue).toFixed(2)}`
     }
    })
})
