
            /* PERSONNE */
class Personne {
    constructor(nom,lieu,argent){
        this.nom=nom
        this.lieu=lieu
        this.argent=argent
        this.mainDroite=[]
        this.mainGauche=[]
        this.seDeplacer = (depart,arrive) =>{
            this.lieu = arrive,
            arrive.personnes.push(depart.personnes.shift())  
}
        this.payerArticle =(article) => {

        }
        this.couper =(ingredient) => {
            couteau.couper(ingredient)
        }
        this.melanger=(nomMelange)=>{
            bol.melanger(nomMelange)
        }
    }
}
let mahad = new Personne ("mahad","",300)
                /* LIEU */
class Lieu {
    constructor(nom,personnes,paniers){
        this.nom=nom
        this.personnes=personnes
        this.paniers=paniers
    }
}

let epicerie = new Lieu("Epicerie",[],[
    {type : "Panier 1", contenu : []},
    {type : "Panier 2", contenu : []},
    {type : "Panier 3", contenu : []}
])


let maison = new Lieu("Maison",[mahad])
mahad.lieu=maison

            /* Outil */

let couteau = {
    nom : "couteau",
    contenu : [],
    couper (ingredient) {
        ingredient.forEach(e => {
            if (e.etat =="entier") {
              e.etat = "coupé"  
            }
        });
    }
}
let poele = {
    nom : "poele",
    contenu : [],
    cuire () {
        this.contenu.push(bol.contenu[0]) 
        bol.contenu.shift()
        this.contenu[0].etat="cuit"
    }
}
let bol = {
    nom : "bol",
    contenu : [],
    melanger (nomMelange) {
        let newMelange= {
            nom : nomMelange,
            etat: "pas cuit"
        }
        while (this.contenu.length>0) {
            this.contenu.shift()
        }
        this.contenu.push(newMelange)
    }
}


            /* Ingredients */

class Ingredients {
    constructor(nom,etat,prix){
        this.nom=nom
        this.etat=etat
        this.prix=prix
    }

}

let oignon = new Ingredients ("oignon","coupé",10)
let oeuf = new Ingredients ("oeuf","entier",20)
let epice = new Ingredients ("epice","moulu",10)
let fromage = new Ingredients ("fromage","entier",30)

epicerie.ressource=[oignon,oeuf,epice,fromage]


        /**** DEBUT DE L'OMELETTE ****/     


mahad.seDeplacer(maison,epicerie)
console.log(`${mahad.nom} est actuellement à la  ${mahad.lieu.nom}`);

mahad.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.shift()

console.log(`${mahad.nom} a pris le ${mahad.mainDroite[0].type}`)

epicerie.ressource.forEach(e => {
    mahad.mainDroite[0].contenu.push(e)
    console.log("Vous avez pris un/une/du "+ e.nom+' au prix de '+e.prix +" $");
    mahad.argent-=e.prix

});
console.log('il vous reste ' + mahad.argent+ " $");
console.log(mahad.mainDroite[0])

mahad.seDeplacer(epicerie,maison)
console.log(`${mahad.nom} est actuellement à la  ${mahad.lieu.nom}`);

let i =0

while (mahad.mainDroite[0].contenu.length > 0) {
    bol.contenu.push(mahad.mainDroite[0].contenu.shift())
    
    console.log("Tu as mis dans le bol de/du/des " +bol.contenu[i].nom)
    i++
}

mahad.seDeplacer(maison,epicerie)
console.log(`${mahad.nom} est actuellement à la  ${mahad.lieu.nom}`)
epicerie.paniers.push(mahad.mainDroite.shift())
console.log(epicerie.paniers);
/* Retourner à la maison pour continuer l'omelette */
mahad.seDeplacer(epicerie,maison)
console.log(`${mahad.nom} est actuellement à la  ${mahad.lieu.nom}`)
/* // Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
 */

mahad.couper(bol.contenu)
console.log(bol.contenu);

/* Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param). */


mahad.melanger("omelette")
console.log("elle est pas cuite fraté " +bol.contenu);
/* Cuire l'omelette avec la méthode de la poele  */

poele.cuire()
console.log(poele.contenu);

console.log("Merci said, j'ai cuit l'omelette insha on est prof enssemble bebe ");