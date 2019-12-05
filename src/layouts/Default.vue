<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>Softplan Cadastro de pessoas</q-toolbar-title>

        <div>{{ usuario }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <div class="column items-center">
          <br />
          <q-avatar size="72px" >
            <img v-bind:src="foto" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{nome}}</div>

          <q-btn
            color="primary"
            label="Sair"
            @click="logout"
            push
            size="sm"
            icon="fas fa-sign-out-alt"
          />
          <br />
        </div>

        <q-separator />

        <q-item clickable tag="a" to="/registrar">
          <q-item-section avatar>
            <q-icon name="fas fa-user-circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Cadastrar Novo Usuário</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/about">
          <q-item-section avatar>
            <q-icon name="fas fa-info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre</q-item-label>
            <q-item-label caption>Informaçoes sobre o App</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  mounted(){
    this.dadosSessao();
  },

  data() {
    return {
      sessao: this.$session.get("usuario"),
      foto: '',
      nome: '',
      email: '',
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },

  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },

  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");  
      this.foto = '';
      this.nome = '';
    },

    dadosSessao(){
      this.foto = this.sessao.photoURL
      this.nome = this.sessao.displayName
    }
  }
};
</script>
