function showDesc(id){
    var x = document.getElementById("descrizione"+id);
    if(x.style.display === "none"){
        x.style.display = "block"; 
    }else{
        x.style.display = "none";
    }
}

function search(){
    var input, filter, prodGrid, prod, h1, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    prodGrid = document.getElementById('product-grid');
    prod = prodGrid.getElementsByClassName('product');

    for(i = 0; i<prod.length; i++){
        h1 = prod[i].getElementsByTagName('h1')[0];
        txtValue = h1.innerText;
        console.log(filter);
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            prod[i].style.display = "";
        } else {
            prod[i].style.display = "none";
        }
    }
}