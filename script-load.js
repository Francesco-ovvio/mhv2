document.addEventListener('DOMContentLoaded', function(){
    var nprod = titoli.length;
    var prodGrid = document.getElementById('product-grid');

    for(let i = 0; i<nprod; i++){
        var div = document.createElement('div');
        div.className= 'product';
        div.id= 'prodotto'+ i;

            var h1 = document.createElement('h1');
            h1.textContent = titoli[i];
            div.appendChild(h1);

            var img = document.createElement('img');
            img.setAttribute('onclick', 'showDesc('+i+')');
            img.src = immagini[i];
            div.appendChild(img);

            var button = document.createElement('button');
            button.className = 'btn';
            button.id = 'btn'+i;
            button.setAttribute('onclick', 'addFav('+i+')');
            button.textContent = 'Aggiungi ai preferiti';
            div.appendChild(button);

            var descr = document.createElement('div');
            descr.className = 'descr';
            descr.id = 'descrizione'+i;
            descr.textContent = descrizione[i];
            div.appendChild(descr);

        prodGrid.appendChild(div);
    }
}, false);