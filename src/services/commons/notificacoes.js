import {
  Notify
} from 'quasar'

Notify.setDefaults({
  position: 'bottom-left',
  timeout: 2500,
  textColor: 'white'
})

export default {
  name: 'notificacoes-principal',
  data() {
    return {}
  },
  methods: {
    alert(mensagem) {
      Notify.create({
        position: 'bottom-left',
        message: mensagem,
        color: 'yellow',
        textColor: 'black',
        actions: [{
          icon: 'close',
          color: 'black'
        }]
      })
    },
    error(mensagem) {
      Notify.create({
        message: mensagem,
        color: 'red',
        actions: [{
          icon: 'close',
          color: 'white'
        }]
      })
    },
    info(mensagem) {
      Notify.create({
        message: mensagem,
        color: 'blue',
        actions: [{
          icon: 'close',
          color: 'white'
        }]
      })
    }
  }
}
