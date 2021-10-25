const input = document.querySelector('.pass input')
const eye = document.querySelector('.pass .fa-eye-slash')
const lock = document.querySelector('.pass .fa-lock')
const overlay = document.querySelector('.pass .overlay')

eye.addEventListener('click',()=>{
    if(input.type === "password"){
    input.type="text"
    
    // setTimeout(()=>{
    //     input.type="password"
    // },5000)
    
}
else{
    input.type="password"
}
})