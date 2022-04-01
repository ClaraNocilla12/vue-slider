
// Partendo da un array di immagini, realizziamo uno slider 
// con Vue.js come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider 
// cambierà l'immagine visibile passando alla successiva oppure 
// alla precedente.

// Bonus
// applicare l'autoplay allo slider: ogni 3 secondi, cambia 
// immagine automaticamente ( riguardare la documentazione su i 
// lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di 
// riferimento associata ( il terzo pallino sarà associato 
// alla terza immagine e così via..)



var app = new Vue({
    el: '#app',
    data: {
        images: [
            
                'https://source.unsplash.com/random/?shoes',
                'https://source.unsplash.com/random/?fruit',
                'https://source.unsplash.com/random/?color', 
                'https://source.unsplash.com/random/?people',
        ],
        currentSrc: 0
    },
    methods: {
        
        changeImageNext() {
            if (this.currentSrc < this.images.length - 1) {
                this.currentSrc++
            } else {
                this.currentSrc = 0
            }
        },

        changeImagePrev() {
            if (this.currentSrc > 0) {
                this.currentSrc--
            } else {
                this.currentSrc = 3
            }
        }
        
    },
});


