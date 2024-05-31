<template>
    <div class="inicio">
        <h2>soy el inicio</h2>
        <RouterLink to="/"></RouterLink>
    </div>
    <eventos/>
</template>
<script>
import { RouterLink } from 'vue-router';
import Eventos from './Eventos.vue';
export default{
    name: 'Inicio',
    components:{
        Eventos,
    }
}
</script>