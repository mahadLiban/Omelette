
/* Personne */
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
        this.couper =(ingredient,outil) => {
            outil.couper(ingredient)
        }
        this.melanger=(nomMelange,outil)=>{
            outil.melanger(nomMelange)
        }
    }
}

/* Lieu */

class Lieu {
    constructor(nom,personnes,paniers){
        this.nom=nom
        this.personnes=personnes
        this.paniers=paniers
    }
}

/* ingredient */

class Ingredients {
    constructor(nom,etat,prix){
        this.nom=nom
        this.etat=etat
        this.prix=prix
    }

}


export {Personne, Lieu, Ingredients }