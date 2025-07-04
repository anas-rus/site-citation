//creation du tableau
const citations = ["je peense dont je suis.Rene descartes","le temps c est de l argent.benjamain franklin.","conais-toi toi-meme.Socrate.",
    "le coeur a ses raisons que la raison ignore.blaise pascal.","l enfer c est les autres. Jean-paul satre.",
   "rien ne se perd  ni ne se cree,tout se transforme.Antoine Lavoisie.","le style ,c est l homme meme Gorge",
   "vivre sans espoir,c'est cesser de vivre.Fiodor","la liberte commence ou l'ignorance finit.Victor hugo",
   "soit le changement que tu veux voir dans le monde.Mahatma.","l'imagination est plus important que le savoire.Albert Einstein",
   "le bonheur n;est reel que s il est partarge.Christopher","le doute est le commencement de la sagesse.Aristote",
   "agit comme sil etait impossible d'echouer.Churchill." 
];
//selection du bouton
let maCitation = document.getElementById("changer de citation");
//selection du paragraphe de la citation
let btn =document.querySelector(" btn");
console.log("citation");
//ajou d'ecouteur
btn.addEventListener("click", ()=>{
    console.log("citation");
})