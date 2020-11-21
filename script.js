function createGrid(size){
    const container = document.getElementById('container');
    for (i = 0; i < size; i++){
        let element = document.createElement('div')
        row = 'row' + String(i);
        element.id = row
        element.classList.add('row')
        container.appendChild(element)
    }
    for (i = 0; i < size; i++){
        let row = document.getElementById('row' + String(i))
        for (x = 0; x < size; x++){
            let element = document.createElement('div');
            element.classList.add('col')
            element.classList.add('box')
            row.appendChild(element)
        }
    }
    initialiseBoxes(size);
}



const refresh_button = document.getElementById('refresh');
var boxes = document.querySelectorAll('.box');
refresh_button.onclick = function(){
    container.innerHTML = '';
    boxes.forEach(box => {
        box.classList.remove('box-hover');
    })
    choice = 0;
    while (choice < 1 || choice > 65){
        choice = prompt('How large would you like the grid to be? (1-65)');
    }
    createGrid(choice);
    
    
}

createGrid(16)
function initialiseBoxes(size){
    var boxes = document.querySelectorAll('.box');
    var value = 520/size;
    console.log(value)
    var rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.style.height = value + 'px';
    })
    boxes.forEach(box => {
        box.style.height = value + 'px';
        box.style.width = value + 'px';
        box.onmouseover = function(){
            box.classList.add('box-hover');
        };
    });
}