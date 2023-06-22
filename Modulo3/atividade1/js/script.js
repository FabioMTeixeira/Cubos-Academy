const button = document.querySelectorAll('button');
const mainText = document.querySelectorAll('p');

button[0].onclick = () =>  {
    if (!mainText[1].style.textDecoration){
        mainText[1].style.textDecoration = 'underline'
    } else {
        mainText[1].style.textDecoration = ''
    }
}

button[1].onclick = () =>  {
    if (!mainText[1].style.fontStyle){
        mainText[1].style.fontStyle = 'italic'
    } else {
        mainText[1].style.fontStyle = ''
    }
}

button[2].onclick = () =>  {
    if (!mainText[1].style.fontWeight){
        mainText[1].style.fontWeight = 'bold'
    } else {
        mainText[1].style.fontWeight = ''
    }
}

button[3].onclick = () =>  {
    if (mainText[0].textContent > 10) {
        mainText[0].textContent = `${mainText[0].textContent - 2}`;
    }

    mainText[1].style.fontSize = `${mainText[0].textContent}px`;
}

button[4].onclick = () =>  {
    let letterSizeToNumber = parseInt(`${mainText[0].textContent}`)
    letterSizeToNumber = letterSizeToNumber + 2;

    mainText[0].textContent = letterSizeToNumber;
    mainText[1].style.fontSize = `${mainText[0].textContent}px`;
}

button[5].onclick = () =>  {
    if (!mainText[1].style.color){
        mainText[1].style.color = 'red'
    } else {
        mainText[1].style.color = ''
    }
}

button[6].onclick = () =>  {
    if (!mainText[1].style.color){
        mainText[1].style.color = 'blue'
    } else {
        mainText[1].style.color = ''
    }
}

button[7].onclick = () =>  {
    if (!mainText[1].style.color){
        mainText[1].style.color = 'purple'
    } else {
        mainText[1].style.color = ''
    }
}

button[8].onclick = () =>  {
    if (!mainText[1].style.color){
        mainText[1].style.color = 'black'
    } else {
        mainText[1].style.color = ''
    }
}
