import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Leaflet, { LMap, LTileLayer, LMarker, LCircle, LIcon } from 'vue2-leaflet'
import vueSession from 'vue-session';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
import "leaflet/dist/leaflet.css";
import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
    Quasar,
    QBreadcrumbs,
    QBreadcrumbsEl,
    QAvatar,
    QLayout,
    QSelect,
    QHeader,
    QChip,
    QFooter,
    QMenu,
    QDrawer,
    QPageContainer,
    QPage,
    Loading,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
    QTabPanels,
    QTabs,
    QTab,
    QRouteTab,
    QTabPanel,
    QSeparator,
    QStepper,
    QStep,
    QStepperNavigation,
    QCard,
    QDialog,
    ClosePopup,
    QCardSection,
    QCardActions,
    QLinearProgress,
    QTable,
    QTh,
    QTr,
    QTd,
    QForm,
    Notify
} from 'quasar'

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(vueSession)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-circle', LCircle)
Vue.component('l-icon', LIcon)

Vue.use(Quasar, {
    config: {
        Loading
    },
    components: {
        QLayout,
        QBreadcrumbs,
        QBreadcrumbsEl,
        QAvatar,
        QSelect,
        QTabs,
        QTab,
        QDialog,
        ClosePopup,
        QRouteTab,
        QHeader,
        QFooter,
        QTabPanels,
        QTabPanel,
        QMenu,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        Loading,
        QToolbarTitle,
        QChip,
        QBtn,
        QIcon,
        QList,
        QItem,
        QItemSection,
        QItemLabel,
        QInput,
        QSeparator,
        QStepper,
        QStep,
        QStepperNavigation,
        QCard,
        QCardSection,
        QCardActions,
        QLinearProgress,
        QTable,
        QTh,
        QTr,
        QTd,
        QForm
    },
    directives: {
        ClosePopup
    },
    plugins: {
        Notify,
        Loading
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')