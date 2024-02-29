
const cards = document.querySelectorAll('.card')

const randomCards = function () {
  alert ('Начало игры')
  const arrCards = Array.from(cards)
  for (let i = 0; i < arrCards.length; i++) {
  let numCard = Math.floor(Math.random() * 32) + 1
  arrCards[i].style.order = numCard
  }
}

randomCards()

const startGame = function () {
    let count = 0
    let opacity = []
    let isFlipping = false //указывает, что происходит анимация переворота карточки
    cards.forEach((card) => {
          card.addEventListener('click', () => {
            if (isFlipping) 
            return // если анимация идет, клик не обрабатывается
            card.classList.add('active')
            const cardActive = document.querySelectorAll('.active')
            
             if (cardActive.length === 2) {
                count++
                isFlipping = true // анимация началась

                     if (cardActive[0].classList.value !== cardActive[1].classList.value) {
                        setTimeout (() => {
                            cardActive.forEach(c => c.classList.remove('active'))// удаляем класс 'active' если картинки не совпадают
                            isFlipping = false // убираем флаг
                        }, 1000)
                       } else {
                        cardActive.forEach(c => c.style.opacity = 0) // делаем нивидимыми выбранные одинаковые карточки
                        opacity.push(cardActive) // добавляем карточки в коллекцию где будут хранится пары карточкек co стилями opacity
                       
                        setTimeout (() => {
                            cardActive.forEach(c => c.classList.remove('active'))// удаляем класс 'active' что бы функция работала дальше
                            isFlipping = false // убираем флаг
                            if (opacity.length === 16) {  // если все пары найдены
                            alert(`Вы победили за ${count} ходов`)
                            }
                        }, 1000)
                       }
                      }
                    })      
                  })
                 }
               
startGame()                
