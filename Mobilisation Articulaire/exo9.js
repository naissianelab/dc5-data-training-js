class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }
    afficherDetails() {
        console.log(this.nom + " " + this.prenom + ", " + this.age + " ans");
    }
}