//Uploading a file

const fileInput = document.getElementById('fileInput')
const upload = document.getElementById('upload')

upload.addEventListener('click', () => {
    fileInput.click();
})

//changing tabs
const enc = document.getElementById('enc')
const dec = document.querySelector('.dec')
const sentence = document.getElementById('click-sentence')

//button control

const submit = document.querySelector('.submit')
let fname = document.getElementById('name')
let fsize = document.getElementById('size')
let password;

submit.addEventListener('click', ()=>{
    password = document.getElementById('password').value

    let file = fileInput.files[0]

    if(!file){
        alert('Error 🚫 Choose File')
        return
    } else if(!password){
        alert('Error 🚫 Enter Password')
        return
    }
})

let isShowing = true;

const displayFile = ()=>{
      let file = fileInput.files[0]

    if(file){
        fname.textContent = `📄 File Name: ${file.name}`
        fsize.textContent = `📦 File Size: ${Math.floor(file.size/1024)}KB`
    }
}
fileInput.addEventListener('change', ()=>{
  displayFile()
})


dec.addEventListener('click', (event)=>{
    sentence.innerHTML = 'Click to Decrypt Files'
    event.preventDefault();
    enc.classList.remove('active')
    dec.classList.add('active')
    fname.innerHTML = ''
    fsize.innerHTML = ''
})

//summon the info box
const Info = document.getElementById('Information-Box')
const credits = document.getElementById('Information')
const gridContainer = document.querySelector('.grid-container');
const back = document.getElementById('back')

Info.addEventListener('click', () =>{
    gridContainer.style.display = 'none'
    credits.style.display = 'block'
})

back.addEventListener('click', () => {
    credits.style.display = 'none'
    gridContainer.style.display = 'grid'
})