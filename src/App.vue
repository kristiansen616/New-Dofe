<template>
  <div id="app">
    <sidebar/>
     <cabeca/>
    <router-view/>
    <rodape/>
  </div>
</template>

<style lang="scss">

</style>

<script>
// @ is an alias to /src
import rodape from '@/components/Footer.vue'
import cabeca from '@/components/Header.vue'
import sidebar from '@/components/Sidebar.vue'

export default {
  name: 'index',
  components: {
    rodape,
    cabeca,
    sidebar
  }
}
</script>
