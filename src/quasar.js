import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
    Quasar,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QTabs,
    QTab,
    QRouteTab,
    QToolbar,
    QTabPanels,
    QDialog,
    QChip,
    ClosePopup,
    QTabPanel,
    QSelect,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    Loading,
    QItemLabel
} from 'quasar'

Vue.use(Quasar, {
    config: {
        loading: {}
    },
    components: {
        QLayout,
        QHeader,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QDialog,
        ClosePopup,
        QTabs,
        QTab,
        QRouteTab,
        QBtn,
        QIcon,
        QChip,
        QList,
        QSelect,
        QTabPanels,
        QTabPanel,
        QItem,
        QItemSection,
        QItemLabel,
        QAvatar,
        QBreadcrumbs,
        Loading,
        QBreadcrumbsEl
    },
    directives: {
        ClosePopup
    },
    plugins: {
        hello,
        Loading
    },
    lang: lang,
    iconSet: iconSet
})
