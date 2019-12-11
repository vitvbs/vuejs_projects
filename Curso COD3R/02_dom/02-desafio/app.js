new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('You clicked on the button!')
        },
        saveValue(event) {
            this.valor = event.target.value;
        }
    }
})