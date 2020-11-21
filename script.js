const container = document.getElementById('container');
for (i = 1; i < 17; i++){
    let element = document.createElement('div')
    row = 'row' + String(i);
    element.id = row
    element.classList.add('row')
    container.appendChild(element)
}
for (i = 1; i < 17; i++){
    let row = document.getElementById('row' + String(i))
    for (x = 1; x < 17; x++){
        let element = document.createElement('div');
        element.id= 'col-' + x
        element.classList.add('col')
        element.classList.add('box')
        row.appendChild(element)
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.onmouseover = function(){
        box.classList.add('box-hover');
    };

    box.onmouseout = function() {
        box.classList.remove('box-hover');
    }
});