class Cercle {
    constructor(rayon) {
        this.rayon = rayon
    }
    calculerCirconference() {
        let diametre = (this.rayon * 2)
        return diametre * Math.PI
    }
}