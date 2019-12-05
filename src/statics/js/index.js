import notificacoes from '@/services/commons/notificacoes.js'
export default {
    mounted: function() {},
    data() {
        return {
            novoUsuario: {
                username: null,
                senha: null
            },
        }
    },

    firebase: {
        users: usersRef
    },

    watch: {

    },
    methods: {
        cadastrar() {
            usersRef.push(this.novoUsuario)
            this.novoUsuario.username = ''
            this.novoUsuario.senha = ''
        },

    }
}