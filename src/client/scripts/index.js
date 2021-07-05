
const stepBoxes = document.querySelectorAll('.step-box')
const stepContent = document.querySelectorAll('.step-content')
let curBox = stepBoxes[0]
let curCon = stepContent[0]
curBox.classList.add('click-box')
curCon.classList.add('active-content')

for(let i = 0; i < stepBoxes.length; i++) {
  stepBoxes[i].addEventListener('click', () => {

    curBox.classList.remove('click-box')
    stepBoxes[i].classList.add('click-box')
    curBox = stepBoxes[i]

    curCon.classList.remove('active-content')
    stepContent[i].classList.add('active-content')
    curCon = stepContent[i]
  })
}
