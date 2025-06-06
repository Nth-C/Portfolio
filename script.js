function masquerlediv(){
    var container_div = document.getElementById('ledivaffiche');
    var container_fleche = document.getElementById('laFlecheCache');
    container_div.classList.add("le_div_visible");
    container_div.classList.remove("le_div_masque");

    container_fleche.classList.add("fleche-bas-cache");
    container_fleche.classList.remove("fleche-bas-affiche");

    window.scrollTo({
        top: 880,
        behavior: "smooth"
    })
}