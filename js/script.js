const main = document.querySelector('main')
const input = document.getElementById('current-operation')
const resultado = document.getElementById('previous-operation')


document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function (){
        const value = charKeyBtn.dataset.value
        input.value += value  
    })
})

document.querySelectorAll('.charKeyCalc').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function (){
        const value = charKeyBtn.dataset.value
        input.value += value  
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    const result = eval(input.value)
    resultado.value = result
    
}