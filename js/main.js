var app = new Vue ({
    el: '#root',
    data: {
        path: 'img/',
        contatore: 0,
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg'
        ]
    },
    methods: {
        next: function() {
            this.contatore++;

            if(this.contatore > (this.images.length - 1))
            this.contatore = 0;
        },

        prev: function() {
            this.contatore--;

            if(this.contatore < 0)
            this.contatore = (this.images.length - 1);
        },

        click: function(index) {
            console.log(index);
        }
    },

    mounted(){
        setInterval(this.next , 3000);
    }
})