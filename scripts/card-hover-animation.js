function handleMouseEnter(){
    console.log("handle  mouse enter called", this);
}
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');
    
    for (let index = 0; index < cardElements.length, index ++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter)
    }
}

document.addEventListener("DOMContentLoeaded", addEventListenersToCards, false);