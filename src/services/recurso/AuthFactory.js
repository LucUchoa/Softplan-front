import axios from 'axios'

const URL_BACK = process.env.VUE_APP_URL_BACK

export default {
  name: 'auth-factory',
  data() {
    return {}
  },
  methods: {
    autenticar(dado) {
		console.log(dado);
      return axios.get(URL_BACK + 'auth/front', {  
        params:{
		  username: dado.username,
          senha: dado.senha
        },
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
    }
  }
}
