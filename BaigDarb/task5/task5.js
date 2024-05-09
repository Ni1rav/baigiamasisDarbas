const orgCount = 5
let count = orgCount
let operationValues = [5, 2, 1]

let body = document.querySelector('body')

let content = document.createElement('div')
content.setAttribute('id', 'numbers')

let counter = document.createElement('h3')
let input = document.createElement('input')
input.setAttribute('type', 'number')

let operatorButtons = []

operatorButtons.push(document.createElement('button'))
operatorButtons[0].textContent = '-5'

operatorButtons.push(document.createElement('button'))
operatorButtons[1].textContent = '--'

operatorButtons.push(document.createElement('button'))
operatorButtons[2].textContent = '-'

operatorButtons.push(document.createElement('button'))
operatorButtons[3].textContent = '+'

operatorButtons.push(document.createElement('button'))
operatorButtons[4].textContent = '++'

operatorButtons.push(document.createElement('button'))
operatorButtons[5].textContent = '+5'

let resetButton = document.createElement('button')
resetButton.textContent = 'Reset Button'

body.append(content)
content.append(counter)
content.append(input)
operatorButtons.forEach((button) => {
    content.append(button)
})
content.append(resetButton)
reset()

operatorButtons[0].addEventListener('click', function(){
    doOperation(-5)
})

operatorButtons[1].addEventListener('click', function(){
    doOperation(-2)
})

operatorButtons[2].addEventListener('click', function(){
    doOperation(-1)
})

operatorButtons[3].addEventListener('click', function(){
    doOperation(1)
})

operatorButtons[4].addEventListener('click', function(){
    doOperation(2)
})

operatorButtons[5].addEventListener('click', function(){
    doOperation(5)
})

resetButton.addEventListener('click', reset)

input.addEventListener('change', matchHeader)

function doOperation(value){
    if(count + value >= 1  && count + value <= 10){
        count += value
        counter.textContent = count
        colorChange()
    }

    matchInput()
    resetAllButtons()
}

function colorChange(){
    if(count > 4){
        counter.style.color = 'green'
    }else{
        counter.style.color = 'red'
    }
}

function resetAllButtons(){
    for(let i = 0; i < 3; i++){
        resetButtonGroup(operatorButtons[operatorButtons.length - i - 1], operatorButtons[i], operationValues[i])
    }
}

function resetButtonGroup(buttonPlus, buttonMinus, value){
    
    if(count + value > 10){
        buttonPlus.setAttribute('disabled', true)
        buttonMinus.removeAttribute('disabled')
    }else if(count - value < 1){
        buttonMinus.setAttribute('disabled', true)
        buttonPlus.removeAttribute('disabled')
    }else{
        buttonPlus.removeAttribute('disabled')
        buttonMinus.removeAttribute('disabled')
    }
}

function reset(){
    count = orgCount
    counter.textContent = orgCount
    input.value = orgCount

    resetAllButtons()

    colorChange()
}

function matchHeader(){
    count = Number(input.value)
    counter.textContent = input.value
    resetAllButtons()
    colorChange()
}

function matchInput(){
    input.value = count
}