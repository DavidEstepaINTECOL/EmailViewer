import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";



const app = createApp(App)

app.use(PrimeVue)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Card', Card)
app.use(ElementPlus)
app.mount('#app')
