
var button = document.querySelector('#submit');
button.addEventListener('click',runEvent);

function runEvent (e) {
    e.preventDefault();
    var input = document.querySelector('.input').value;
    
    var newitem = document.createElement('div');
    newitem.className = 'items';
    var newli = document.createElement('li');
    newli.className = 'li';
    newitem.appendChild(newli);
    
     newli.appendChild(document.createTextNode(input));
     var btn = document.createElement('button');
    btn.className = 'btn';
    btn.addEventListener('click',deleteitem);
    newli.appendChild(btn);
    btn.appendChild(document.createTextNode('x'));
     var items = document.querySelector('.items2');
     items.appendChild(newitem);
     var input = document.querySelector('.input');
     input.value = '';

     
     
     
     
}

var btn = document.querySelectorAll('.btn');

for(i=0;i<btn.length;i++){
    btn[i].addEventListener('click',deleteitem);
}


function deleteitem(e){
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    console.log();
    
    
}






