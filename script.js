const billInput = document.querySelector('#bill-input')
const peopleNum = document.querySelector('#people-input')
const customInput = document.querySelector('.custom__input')
const tipBtn = document.querySelectorAll('.tip-btn')
const resBtn = document.querySelector('.btn__reset')
const Amount = document.querySelector('.tip-amount-result')
const Total = document.querySelector('.total-result')

let billValue = 0
let peopleValue = 0
let tipValue = 0


billInput.addEventListener('input', function() {

billValue = Number(billInput.value)
if (peopleValue > 0) {
  const checkPerPerson = billValue / peopleValue
  const tipPerPerson = (billValue * tipValue / 100) / peopleValue  
  Total.textContent = `$${(checkPerPerson + tipPerPerson).toFixed(2)}`
}
})

peopleNum.addEventListener('input', function() {
peopleValue = Number(peopleNum.value)
if(peopleValue > 0) {
 const checkPerPerson = billValue / peopleValue
 const tipPerPerson = (billValue * tipValue / 100) / peopleValue  
 Total.textContent = `$${(checkPerPerson + tipPerPerson).toFixed(2)}`
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
        const checkPerPerson = billValue / peopleValue
        const tipPerPerson = (billValue * tipValue / 100) / peopleValue 
        Total.textContent = `$${(checkPerPerson + tipPerPerson).toFixed(2)}`
     }
    })
})

customInput.addEventListener ('input', function() {
  tipBtn.forEach(function(c) {
   c.classList.remove("active")
  })
  if (customInput.value === "") {
    tipValue = 0
  } else {
    tipValue = parseFloat(customInput.value) / 100
  }
   if(peopleValue > 0) {
        Amount.textContent = `$${(billValue * tipValue / peopleValue).toFixed(2)}`

        const checkPerPerson = billValue / peopleValue
        const tipPerPerson = (billValue * tipValue) / peopleValue 
        Total.textContent = `$${(checkPerPerson + tipPerPerson).toFixed(2)}`
     }
})

resBtn.addEventListener('click', function() {
billInput.value = ""
peopleNum.value = ""
customInput.value = ""

billValue = 0
peopleValue = 0
tipValue = 0

Amount.textContent = "$0.00"
Total.textContent = "$0.00"


tipBtn.forEach(function(d) {
  d.classList.remove("active")
}
)
})

customInput.addEventListener('focus', function() {
tipBtn.forEach(function(e) {
  e.classList.remove("active")
}
)
tipValue = 0
if(peopleValue > 0 ) {
  Amount.textContent = "$0.00"
  Total.textContent = `$${(billValue / peopleValue).toFixed(2)}`
}
})
