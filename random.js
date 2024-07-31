const makeRandomColor = ()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button');
const spans = document.querySelectorAll('span')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        this.style.backgroundColor = makeRandomColor()
    })
})
spans.forEach(spans =>{
    spans.addEventListener('click', function (){
        this.style.backgroundColor = makeRandomColor()
    })
})
