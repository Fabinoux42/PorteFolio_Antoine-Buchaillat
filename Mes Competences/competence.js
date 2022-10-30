/*bouton replay*/
const ouvertureSite = document.querySelector(".ouvertureSite");

function refresh() {
  ouvertureSite.style.display="block";
}

function handleReplay() {
  ouvertureSite.style.display="none";
  setTimeout(refresh, 50);
}

setTimeout(()=>ouvertureSite.style.display="none", 5000)
