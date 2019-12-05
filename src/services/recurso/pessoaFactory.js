import axios from 'axios'

const URL_BACK = process.env.VUE_APP_URL_BACK

export default {
  name: 'auth-factory',
  data() {
    return {}
  },
  methods: {
    endereco(dado) {
      return axios.get(URL_BACK + 'v2/api-cadastro/pessoa/endereco/' + dado, {  
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
    },
	 buscarPessoasV1() {
      return axios.get(URL_BACK + 'v1/api-cadastro/pessoas/', {  
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
    },
	buscarPessoasV2() {
      return axios.get(URL_BACK + 'v2/api-cadastro/pessoas/', {  
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
    },
    salvarPessoaV2(dado) {
		console.log(dado);
      return axios.post(URL_BACK + 'v2/api-cadastro/pessoa/', null, { 
        params:{
          nome: dado.nome,
		  email: dado.email,
          cpf: dado.cpf,
		  nascimento: dado.nascimento,
          cep: dado.cep,
		  logradouro: dado.logradouro,
          cidade: dado.cidade,
          uf: dado.uf,
          sexo: dado.sexo,
          nacionalidade: dado.nacionalidade,
          numero: dado.numero,
          naturalidade: dado.naturalidade
        },	  
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
    },
	  salvarPessoaV1(dado) {
		console.log(dado);
      return axios.post(URL_BACK + 'v1/api-cadastro/pessoa/', null, { 
        params:{
          nome: dado.nome,
		  email: dado.email,
          cpf: dado.cpf,
		  nascimento: dado.nascimento,	
          sexo: dado.sexo,
          nacionalidade: dado.nacionalidade,
          naturalidade: dado.naturalidade
        },	  
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}		
      });
		}
  }
}