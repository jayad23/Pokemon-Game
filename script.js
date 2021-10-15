window.addEventListener('DOMContentLoaded', e =>{
    const againButton = document.getElementById('again')
    const startDiv = document.getElementById('start')
    const startButton = document.getElementById('start')
    startButton.addEventListener('click', (e) => clicked(e))
    againButton.addEventListener('click', (e) => again(e))

    function clicked (event){
        startDiv.style.display = "none"
        game.style.visibility = "visible"
        gamePoke()
        block.classList = ('animateBall')
    }

    function again(){
        againButton.style.visibility = 'hidden'
        game.style.visibility = 'visible'
        block.classList = 'animateBall'
        block.style.display = 'visible'
        gamePoke()
    }
   
    function gamePoke (){
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
                block.classList.remove('animateBall')
                alert("U just Lose! ;) Atte: Kike")
                game.style.visibility = "hidden"
                againButton.style.visibility = "visible"

            }
        },10);
    }
    
    

})

