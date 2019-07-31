new Vue ({
    el: '#desafio',
    data: {
        nome: 'Victor Baptista Silva',
        idade: 20,
        imgGoogle: 'https://media1.tenor.com/images/6c694726c00d5b526790878676273aab/tenor.gif?itemid=13369215'
    },
    methods: {
        multIdade() {
            return this.idade * 3
        },
        zeroOuUm() {
            num = Math.random()
            return num
        }
    }
})