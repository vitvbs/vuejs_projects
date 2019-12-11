new Vue({
	el: '#desafio',
	data: {
		classeEfeito: '',
		success: true,
		classeInput1: '',
		classeInput2: '',
		classeInput3: '',
		cor: '',
		largura: '',
		loading: false,
		larguraBarra: 0,
		alturaBarra: 40,
		corBarra: 'pink'
	},
	methods: {
		iniciarEfeito() {
			this.classeEfeito = 'destaque'
			setInterval(() => {
				this.classeEfeito = this.classeEfeito == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			this.loading = true
			setInterval(() => {
				this.larguraBarra+= 20
			}, 200);
		},
		setSuccess(event) {
			if (event.target.value == 'true') {
				this.success = true
			} else if (event.target.value == 'false') {
				this.success = false
			}
		}
	},
	computed: {
		estiloInput() {
			return {
				backgroundColor: this.cor,
				width: this.largura
			}
		}
	}
})
