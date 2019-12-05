export default {
  name: 'stepper-principal',
  data() {
    return {
      stepPrincipal: [{
          "titulo": "Contribuinte",
          "url": "/contribuinte",
          "icone": "person",
          "step": 1
        },
        {
          "titulo": "Contrato",
          "url": "contribuinte/contrato",
          "icone": "file_copy",
          "step": 2
        }, 
        {
          "titulo": "Amortização",
          "url": "contribuinte/amortizacao",
          "icone": "trending_up",
          "step": 3
        },
        {
          "titulo": "Pagamento",
          "url": "contribuinte/pagamento",
          "icone": "payment",
          "step": 4
        },
        {
          "titulo": "Simulação",
          "url": "contribuinte/simulacao",
          "icone": "settings",
          "step": 5
        },
        {
          "titulo": "Receitas e Despesas",
          "url": "contribuinte/contrato",
          "icone": "attach_money",
          "step": 6
        },
        {
          "titulo": "Avaliação Financeira",
          "url": "contribuinte/contrato",
          "icone": "assessment",
          "step": 7
        }        
      ]
    }
  },
  methods: {
    removerBodyStepperPrincipal() {
      let stepperPrincipal = document.getElementById('stepper-principal');
      let filhoStepperPrincipal = document.getElementsByClassName('q-stepper__content q-panel-parent');
      stepperPrincipal.removeChild(filhoStepperPrincipal[0]);
    }
  }
}
