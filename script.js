const colors = ['green', 'red', 'rgba(133,122,200)', 'rgba(0, 0, 255, 0.5)'];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    //get random number between 0 - 3 colors [3]
    const randomNumber = getRanodomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRanodomNumber(){
    return Math.floor(Math.random() * colors.length);
}

