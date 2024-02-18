function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColor(elementId){
     const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400');
    
}