<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { type IStaticMethods } from "preline/preline";


declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


onMounted(() => {

  setTimeout(() => {
    window.HSStaticMethods.autoInit();

    
    
  
  }, 100)
});
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>
<!-- /* Apply dark mode classes */ -->
<style>

</style>
