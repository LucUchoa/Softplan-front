<template>
  <q-list>
    <div class="column items-center">
      <br />
      <q-avatar size="72px">
      </q-avatar>

      <div class="text-subtitle1 q-mt-md q-mb-xs">SoftPlan</div>

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

    <q-item clickable tag="a" to="/formulario">
      <q-item-section avatar>
        <q-icon name="fas fa-adress-book" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Inicio</q-item-label>
        <q-item-label caption>Tela de Inicio</q-item-label>
      </q-item-section>
    </q-item>

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
</template>


<script>
export default {
  data() {
    return {
      
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
    }
  }
};
</script>