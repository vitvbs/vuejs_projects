export default {
    name: "app",
    components: {},
    data: function() {
        return {
            start: false,
            finished: false,
            finishedMessage: '',
            playerHealth: '100',
            monsterHealth: '100',
            actionLog: []
        }
    },
    computed: {
    },
    methods: {

        startGame() {

            //Reseta as barras de vida
            this.playerHealth = '100'
            this.monsterHealth = '100'

            //Esconde a mensagem de encerramento
            this.finished = false

            //Mostra os botões de ação
            this.start = true

        },

        attack() {

            //Dano causado ao Lich
            let playerDamage = this.randomAttackPower(1, 10)
            this.monsterHealth -= playerDamage

            //Dano causado ao Player
            let lichDamage = this.randomAttackPower(2, 15)
            this.playerHealth -= lichDamage

            //Não permite que a vida do Lich seja um valor negativo
            if(this.monsterHealth <= 0) {
                this.monsterHealth = 0
                this.finishGame('WIN!')
                
            }

            //Não permite que a vida do Player seja um valor negativo
            if(this.playerHealth <= 0) {
                this.playerHealth = 0
                this.finishGame('LOSE!')
            }

            //Gera um log do ataque
            this.actionLog.push(
                {
                    'actor': 'Player',
                    'damage': playerDamage
                },
                {
                    'actor': 'Lich',
                    'damage': lichDamage
                },
            )

        },

        randomAttackPower(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },

        finishGame(message) {

            //Mostra a mensagem de Vitória ou Derrota
            this.finished = true
            this.finishedMessage = message

            //Esconde os botões de ação
            this.start = false
        }
    }
};