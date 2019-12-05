<template>
  <q-layout view="lhr LpR lfr">
    <q-page-container>
      <q-linear-progress query class="q-mt-sm" v-if="loading" />
      <div class="q-pa-md">
        <div class="row">
          <div class="col-12" id="titulo">Softplan Cadastro de Pessoas</div>
        </div>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <div class="row">
          <div class="col-12" id="login">
            <q-avatar size="100px" font-size="100px" text-color="black" icon="fas fa-user-circle"></q-avatar>
            <br />
            <br />
            <strong> Entre no Sistema</strong>

            <q-input type="username" label="User" v-model="login.username">
              <template v-slot:prepend>
                <q-icon name="far fa-user" />
              </template>
            </q-input>

            <q-input type="password" label="Senha" v-model="login.senha">
              <template v-slot:prepend>
                <q-icon name="fa fa-eye-slash" />
              </template>
            </q-input>
            <br />
            <q-btn color="primary" @click="loginAuth" icon="arrow_forward">Entrar</q-btn>
            <br />
            <br />
              <q-btn
                round
                color="red"
                size="lg"
                icon="fab fa-google"
                style="margin-left: 0%;"
                @click="loginEmail"
              />
            </p>

          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import authFactory from '@/services/recurso/AuthFactory.js'
import notificacoes from '@/services/commons/notificacoes.js'


export default {
  name: "login",
  data() {
    return {
      login: {
        username: null,
        senha: null
      },
      loading: false
    };
  },
  
  methods: {
    loginAuth() {
      this.loading = true;
      authFactory.methods.autenticar(this.login).then((response) => {
        if(response.data == "Sucesso"){
			console.log(response);
			this.$router.replace("formulario");
			this.loading = false;
        }else{
            notificacoes.methods.error("Login ou Senha Inválidas");
			this.loading = false;
        }        
      })
    }
  }
  }
 

</script>
  
<style lang="stylus" scoped>
#titulo {
  text-align: center;
  font-size: 20px;
}

#login {
  text-align: center;
}
</style>