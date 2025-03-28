let form = document.querySelector('form')
let inp = document.querySelectorAll('#inp')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(inp.value = ''){
        console.log('Empty Inputs are not allowed')
        alert('Empty Inputs are not allowed')
    }
})