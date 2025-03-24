let body = document.querySelector('body')

var btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    btn.innerHTML = 'Download started..'
})
btn.addEventListener('dblclick', ()=>{
    btn.innerHTML = 'Download ended..'
})

let h1 = document.createElement('h1')

h1.innerHTML = 'Heya, wasuupp'
h1.style.color = 'pink'
h1.style.fontFamily = 'Sans-serif'

body.appendChild(h1)

body.addEventListener('mousemove', ()=>{
    console.log('Moving..')
})