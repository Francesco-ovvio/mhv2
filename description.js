function showDesc(id){
    var x = document.getElementById("descrizione"+id);
    if(x.style.display === "none"){
        x.style.display = "block"; 
    }else{
        x.style.display = "none";
    }
}