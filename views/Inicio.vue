<template>
    <div class="inicio">
        <h2>soy el inicio</h2>
    </div>
    <eventos/>
</template>
<script>
import Eventos from './Eventos.vue';
export default{
    name: 'Inicio',
    components:{
        Eventos,
    }
}
</script>