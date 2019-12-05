<template>
  <div class="q-pa-md">
    <q-card style="margin-left: -2%; margin-right: -2%;">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-00000
      >
        <q-tab name="cadastro" label="Cadastrar" />
        <q-tab name="pesquisa" label="Pesquisar" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="cadastro">
          <q-form v-on:submit.prevent="salvar" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              dense="true"
              label="Nome *"
              lazy-rules
              type="text"
              v-model="formCadastro.nome"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            />

            <q-input
              filled
              dense="true"
              label="E-mail"
              type="text"
              v-model="formCadastro.email"	
            />
			
            <q-input
              filled
              dense="true"
              label="CPF *"
              lazy-rules
              mask="###.###.###-##"
              v-model="formCadastro.cpf"
			  :rules="[ val => val && val.length > 0 || 'Campo Obrigatório', v => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v) || 'CPF tem que ser valido']"
              bottom-slots
            />
			
            <q-input
              type="text"
              dense="true"
              mask="##/##/####"
              label="Data de Nascimento *"
              v-model="formCadastro.nascimento"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="far fa-calendar-alt" />
              </template>
            </q-input>

            <q-input
              id="sexo"
              filled
              dense="true"
              label="Sexo"
              lazy-rules
              type="text"
              v-model="formCadastro.sexo"
            />

            <q-input
              filled
              dense="true"
              label="Nacionalidade"
              lazy-rules
              type="text"
              v-model="formCadastro.nacionalidade"
            />
            <br />
			
			<q-input
              id="naturalidade"
              filled
              dense="true"
              label="Naturalidade"
              lazy-rules
              type="text"
              v-model="formCadastro.naturalidade"
            />

            <q-input
              id="cep"
              filled
              dense="true"
              label="CEP (caso entre com um valor será obrigatorio)"
              lazy-rules
              mask="#####-###"
              v-on:keyup="buscarCep"
              v-model="formCadastro.cep"
            />
			
			<q-input
              filled
              label="Número (Caso tenha colocado cep será obrigatorio)"
              lazy-rules
              dense="true"
              v-model="formCadastro.numero"
              type="number"
            />
			
		   <q-input
              filled
              label="Bairro"
              lazy-rules
			  readonly
              dense="true"
              v-model="formCadastro.bairro"
              type="text"
            />
			
			
		    <q-input
              filled
              label="Logradouro"
              lazy-rules
			  readonly
              dense="true"
              v-model="formCadastro.logradouro"
              type="text"
            />
			


            <q-input
              id="cidade"
              filled
              dense="true"
              label="Cidade"
              lazy-rules
			  readonly
              type="text"
              v-model="formCadastro.cidade"
            />

            <q-input
              id="uf"
              filled
              dense="true"
              label="UF"
              lazy-rules
			  readonly
              maxlength="2"
              v-model="formCadastro.uf"
            />

            <div>
              <q-btn label="Cadastrar" type="submit" color="primary" />
              <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="pesquisa">
          <q-table
            grid
            :data="data"
            :columns="columns"
            row-key="id"
            :filter="filter"
            hide-header
            selection="single"
            :selected.sync="selected"
          >
            <template v-slot:top-left>
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Procurar" >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-btn icon="delete" size="14px" color="red" @click="deletar()"/>
              <q-btn icon="update" size="14px" color="primary" style="margin-left: 5%;"/>
            </template>
          </q-table>


        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import notificacoes from "@/services/commons/notificacoes.js";
import pessoaFactory from '@/services/recurso/pessoaFactory.js'
import axios from "axios";

export default {
  components: {
    name: "Adicionar"
  },



  data() {
    return {
      selected: [],
      tab: "cadastro",
      formCadastro: {
		id: "",
        nome: "",
        cpf: "",
		nascimento :"",
        cep: "",
		bairro: "",
        cidade: "",
        uf: "",
        sexo: "",
		numero: "",
        nacionalidade: "",
		logradouro: "",
        naturalidade: "",
      },
      loading: false,
      filter: "",
      columns: [
        {
          name: "nome",
          required: true,
          label: "cadastro",
          align: "left",
          field: "nome",
          sortable: true
        },
		{ name: "email", label: "E-mail", field: "email" },
		{ name: "nascimento", label: "Data Nascimento", field: "nascimento" },
        { name: "cpf", label: "CPF", field: "cpf" },
        { name: "cep", label: "CEP", field: "cep" },
        { name: "cidade", label: "Cidade", field: "cidade" },
        { name: "uf", label: "UF", field: "uf" },
        { name: "sexo", label: "Endereço", field: "sexo" },
        { name: "nacionalidade", label: "Nacionalidade", field: "nacionalidade" },
		{ name: "logradouro", label: "logradouro", field: "logradouro" },
        { name: "numero", label: "Número", field: "numero" },
		{ name: "bairro", label: "Bairro", field: "bairro" },
        { name: "naturalidade", label: "Naturalidade", field: "naturalidade" }
      ],
    };
  },

  mounted() {
      pessoaFactory.methods.buscarPessoasV1().then((response) => {
        if(response.status == 200){
			this.data = response.data;
		
			console.log(response.data);
        }      
      })
	  
	
	
  },

  methods: {
    salvar: function(data) {	
	  if (this.formCadastro.email !== undefined){
		var re = /\S+@\S+\.\S+/;
		if(!re.test(this.formCadastro.email)){
			notificacoes.methods.error("Insira um e-mail valido");
			return;
		}
		}
		
	  if (this.formCadastro.cep !== ""){
		console.log(this.formCadastro.cep);
		var recep = /[0-9]{5}-[\d]{3}/;
		if(!recep.test(this.formCadastro.cep)){
			notificacoes.methods.error("Insira um cep valido");
			return;
		}
	    if(this.formCadastro.numero === ""){
			notificacoes.methods.error("Voce inseriu cep sem um numero");
			return;
		}
		}
		console.log(this.formCadastro.numero);
	    if(this.formCadastro.numero === "" && this.formCadastro.cep !== ""){	
			notificacoes.methods.error("Voce inseriu um cep mas nao inseriu um numero");
			return;
		}
		
		
		
		

      this.$q.loading.show({
        message: "Gravando dados..."
      });
	  
	  if (this.formCadastro.cep !== undefined && this.formCadastro.cep !== ""){
	  console.log(this.formCadastro);
	  this.formCadastro.nascimento = this.formCadastro.nascimento.replace("-","");
	  this.formCadastro.nascimento = this.formCadastro.nascimento.replace("-","");
	  console.log(this.formCadastro.nascimento);
	  
	
	
	   pessoaFactory.methods.salvarPessoaV2(this.formCadastro).then((response) => {
        if(response.status == 200){
		  data = response.data;
          this.$q.loading.hide();
          notificacoes.methods.info("Pessoa Cadastrada com Sucesso");
		
			console.log(response.data);
        }else{
            notificacoes.methods.error("Cpf ja esta na base");
        } 
		});
	  
	  }else{
	  
	   pessoaFactory.methods.salvarPessoaV1(this.formCadastro).then((response) => {
        if(response.status == 200){
		  data = response.data;
          this.$q.loading.hide();
          notificacoes.methods.info("Pessoa Cadastrada com Sucesso");
		
			console.log(response.data);
        }else{
            notificacoes.methods.error("Cpf ja esta na base");
        } 
		});
	  }
	  
    },

    deletar: function(selected){
	console.log(this.selected[0].id);
      axios.delete("http://localhost:8081/v1/api-cadastro/pessoa/" + this.selected[0].id, {
		
		auth: {
		  username: 'softplan',
		  password: 'softplan'
		}
	  })
    },


    buscarCep: function() {
	  if(this.formCadastro.cep.length == 9){
	  var cep = this.formCadastro.cep.replace("-","");
		console.log(cep);

      pessoaFactory.methods.endereco(cep).then((response) => {
        if(response.status == 200){
		this.formCadastro.cidade = response.data.localidade;
		this.formCadastro.uf = response.data.uf;
		this.formCadastro.logradouro = response.data.logradouro;
		this.formCadastro.bairro = response.data.bairro
		
			console.log(response.data);
        }else{
            notificacoes.methods.error("Cep Não existe");
        }        
      })
	  }
	  
    }
  }
};
</script>



