let btn = document.querySelector('button')
let para = document.querySelector('#para')

btn.addEventListener('click', ()=>{
    para.innerHTML = 'Lo ho gya change'
    para.style.color = 'lightblue'
})