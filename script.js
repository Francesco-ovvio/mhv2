function objectLenght(obj){
    let l = 0;
    for(let key in obj){
        l++;
    }
    return l; 
}

function selectAnswer(event){
    event.currentTarget.classList.add("selected");
    event.currentTarget.classList.remove("deselected");

    event
}