document.addEventListener('DOMContentLoaded', function(){
    var nprod = titoli.length;
    var prodGrid = document.getElementById('product-grid');

    for(let i = 0; i<nprod; i++){
        var div = document.createElement('div');
        div.className= 'product';
        div.id= 'prodotto'+ i;

            var titolo = document.createElement('div');
            titolo.className = 'titolo';

                var h1 = document.createElement('h1');
                h1.id = 'h1'+i;
                h1.textContent = titoli[i];
                titolo.appendChild(h1);

                var btnimg = document.createElement('img');
                btnimg.id = 'icon';
                btnimg.setAttribute('onclick', 'addFav('+i+')');
                btnimg.src= 'https://i.imgur.com/wgYNMRa.png';
                titolo.appendChild(btnimg); 

            div.appendChild(titolo);

            var img = document.createElement('img');
            img.setAttribute('onclick', 'showDesc('+i+')');
            img.src = immagini[i];
            div.appendChild(img);

            var descr = document.createElement('div');
            descr.className = 'descr';
            descr.id = 'descrizione'+i;
            descr.textContent = descrizione[i];
            div.appendChild(descr);

        prodGrid.appendChild(div);
    }
}, false);