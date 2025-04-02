let form = document.querySelector('form')
let inp = document.querySelectorAll("input[type='text']")
let head = document.createElement('h3')
let body = document.querySelector('body')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    inp.forEach(inps=>{
        if(inps.value == ''){
            head.innerHTML = 'Error';
            head.style.color = 'blue'
            body.appendChild(head)
        }
        else{
            console.log(inps.value)
            head.innerHTML = ''
            body.appendChild(head)
        }
    })
})