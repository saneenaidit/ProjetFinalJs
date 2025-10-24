

// Fonction appelée au survol ou focus
function upDate(previewPic) {
    console.log("upDate called");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    // Mettre à jour le texte
    document.getElementById("image").innerHTML = previewPic.alt;

    // Mettre à jour l'image de fond
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

// Fonction appelée au départ de la souris ou blur
function unDo() {
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
    document.getElementById("image").style.backgroundImage = "none";
}

// Initialisation après le chargement de la page
window.onload = function() {
    let images = document.querySelectorAll(".gallery img");

    for(let i = 0; i < images.length; i++) {
        // Ajouter l'attribut tabindex pour navigation clavier
        images[i].setAttribute("tabindex", 0);

        // Gestion focus et blur pour accessibilité clavier
        images[i].onfocus = function() { upDate(this); };
        images[i].onblur = function() { unDo(); };
    }

    console.log("Tabindex ajouté et événements clavier initialisés");
};