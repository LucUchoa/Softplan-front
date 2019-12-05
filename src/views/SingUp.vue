<template>
  <q-layout view="lhr LpR lfr">
    <q-page-container>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-12" id="titulo">Softplan cadastro de pessoas</div>
        </div>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <div class="row">
          <div class="col-12" id="login">
            <q-linear-progress query class="q-mt-sm" v-if="loading" />
            <q-avatar size="100px" font-size="100px" text-color="black" icon="fas fa-user-circle"></q-avatar>
            <br />
            <br />
            <strong>Criar uma conta</strong>

            <q-input
              type="text"
              dense="true"
              label="Nome *"
              v-model="formUsuario.nome"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-user"/>
              </template>
            </q-input>

            <q-input
              type="email"
              dense="true"
              label="Email *"
              v-model="formUsuario.email"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="far fa-envelope" />
              </template>
            </q-input>

            <q-input
              type="text"
              dense="true"
              label="CPF *"
              mask="###.###.###-##"
              v-model="formUsuario.cpf"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="far fa-address-card" />
              </template>
            </q-input>

            <q-input
              type="text"
              dense="true"
              mask="##/##/####"
              label="Data de Nascimento *"
              v-model="formUsuario.nascimento"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="far fa-calendar-alt" />
              </template>
            </q-input>

            <q-input
              type="text"
              dense="true"
              label="CEP *"
              mask="#####-###"
              v-model="formUsuario.cep"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-paper-plane" />
              </template>
            </q-input>

            <q-input
              type="text"
              dense="true"
              label="Endereço *"
              v-model="formUsuario.endereco"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="far fa-map" />
              </template>
            </q-input>

            <q-input
              type="text"
              dense="true"
              label="UF *"
              v-model="formUsuario.uf"
              maxlength="2"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-globe-americas" />
              </template>
            </q-input>

            <q-input
              type="password"
              dense="true"
              label="Senha *"
              v-model="formUsuario.senha"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="fa fa-eye-slash" />
              </template>
            </q-input>

            <q-input
              type="password"
              dense="true"
              label="Confirmar Senha *"
              v-model="formUsuario.confirmarSenha"
              :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="fa fa-eye-slash" />
              </template>
            </q-input>

            <q-btn color="primary" @click="singUp">Registrar</q-btn>
            <br />
            <br />

            <p>
              <router-link to="/">Retorne ao login</router-link>
            </p>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import notificacoes from "@/services/commons/notificacoes.js";

export default {
  name: "login",
  data() {
    return {
      formUsuario: {
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cpf: "",
        nascimento: "",
        cep: "",
        endereco: "",
        uf: ""
      },

      loading: false
    };
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