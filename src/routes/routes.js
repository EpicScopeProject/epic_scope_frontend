import { createRouter, createWebHistory } from "vue-router";
import Inicio from '../views/Inicio.vue';
import Eventos from '../views/Eventos.vue';


const routes = [
{
    path:'/',
    name:'inicio',
    component:''
},

{
    path:'/eventos',
    name:'eventos',
    component: function () {
        return import( '../views/Eventos.vue')
}},]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
