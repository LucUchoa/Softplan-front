import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import LoginLayout from './layouts/LoginTemplate.vue'
import login from '@/views/Login.vue'

let registrar = {
    path: '/registrar',
    component: () =>
        import ('@/views/SingUp.vue'),
    children: [{
        path: '',
        component: () =>
            import ('@/views/SingUp.vue')
    }]
}




let formulario = {
  path: '/formulario',
  component: () => import('@/views/cadastro/Formulario.vue'),
  children: [{
    path: '',
    component: () => import('@/views/cadastro/Formulario.vue')
  }],
      meta: {
        requeresAuth: true
    }
}


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: DefaultLayout,
        meta: {
            showLeftDrawer: true // Para habilidade ou desabilitar o menu lateral esquerdo. Opcional, padrão 'true'.
        },
        children: [ // onde as páginas do projeto devem ser configuradas
            {
                path: '/',
                name: 'login',
                component: login
            },
			formulario,
            registrar,
        ]
    }]
})