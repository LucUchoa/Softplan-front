<template>
  <div>
    <div>
      <q-table title="Pessoas" :data="lista" :columns="colunas" row-key="cpf"/>
    </div>

    <div class="q-pa-md q-gutter-sm">
          <q-input v-model="nome" label="Nome" dense="true"/>
          <q-input v-model="dtNasc" mask="##/##/####" label="Data Nascimento" dense="true"/>
          <q-input v-model="email" label="Email" dense="true"/>
          <q-input v-model="cpf" label="CPF" mask="###.###.###-##" dense="true"/>

          <q-btn type="submit" label="Salvar" @click="salvar()" />
        
    </div>
  </div>
</template>

<script>
import axios from "axios";
import notificacoes from "@/services/commons/notificacoes.js";

export default {
  data() {
    return {
      colunas: [
        { name: "nome", required: true, label: "Nome", align: "left", field: "nome", sortable: true },
        { name: "cpf", align: "center", label: "CPF", field: "cpf", sortable: true },
        { name: "email", label: "Email", field: "email", sortable: true },
        { name: "dtNasc", label: "Data de Nascimento", field: "dtNasc" }
      ],
      lista: [{}],
      nome: '',
      senha: '',
      erro: '',
      cpf: '',
      dtNasc: '',
      email: ''
    };
  },

  firestore() {
    return {
      pessoa: db.collection("pessoa")
    };
  },

  mounted() {

    axios
      .get("http://localhost:8089/pessoa")
      .then(response => ((this.lista = response.data)));
  },

  methods: {
    adicionar: function() {
      this.$firestore.pessoa
        .add({
          nome: this.lista[0].nome,
          email: this.lista[0].email,
          cpf: this.lista[0].cpf,
          nasc: this.lista[0].dtNasc
        })
        .then(dados => {
          notificacoes.methods.info("Registro Cadastrado com Sucesso");
        })
        .catch(error => {
          notificacoes.methods.info("Ocorreu um Erro ao Cadastrar Registro");
        });
    },

    salvar(data){
      axios.post("http://localhost:8089/pessoa", {
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        dtNasc: this.dtNasc
      }).then(function(response){
        data = response.data;
        console.log(data);
      }).catch(function(error) {
        data = error;
      })
    },

    logar(nome, senha){
      if(this.nome.length > 0 || this.senha.length > 0){
        axios.get('http://localhost:8089/usuario/' + this.nome + '/' + this.senha
          ).then(response => this.$router.push("produto")
            ).catch(error => this.erro = error)
      }
      if(this.nome.length == 0 || this.senha.length == 0){
        notificacoes.methods.alert("Digite o login e senha");
      }else if(this.erro){
        notificacoes.methods.error("Login e senha inválidas");
      }
    }

  }
};
</script>

<style lang="stylus" scoped>
.map {
  height: 100vh;
}
</style>