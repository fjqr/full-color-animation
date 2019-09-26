let colors = ['#2E6BB4','#96DE98','#9386D3','#D25063','#FCE8B9','#43D3F1','#427AAD','#A7E493','#A59ACF',
'#A59ACF','#E3DE2A','#F523D7','#0B4DB3','#DF15ED','#9AF037','#D95B60','#0AB85E','#E9B6EC','#A19F37',
'#6FD955','#CD97FA','#6500DA','#D6143D','#74D3E7']


const randomIndex = () => {
   
    return colors[Math.round(Math.random() * colors.length)]

}

const index = () => {
   
    array= []
   
    for ( let i = 0; i <= 24; i++) {
        array.push(i)
    }
   
    return array[parseInt(Math.random() * array.length)]

}


const anim = () => {
    
    let boxes = Array.from(document.querySelectorAll('div')).slice(1)
    newColors = randomIndex()
    newNumber = index()
    boxes[newNumber].style.backgroundColor = newColors
    requestAnimationFrame(anim)

}

requestAnimationFrame(anim)


    
   
   
   
   


