
window.addEventListener('DOMContentLoaded', e =>{
    const character = document.getElementById('character')
    const block = document.getElementById('block')
    const game = document.getElementById('game')

    game.addEventListener('click', (e) => jump(e))


    function jump (event){
        if(character.classList != 'animate'){
            character.classList.toggle('animate')
        }
        setTimeout(function (){
            character.classList.toggle('animate')
        }, 500)
    }

    const checkDead = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
            block.style.animation = "none"
            block.style.display = "none"
            alert("U just Lose! ;) Atte: Kike")
        }
    },10);
})

