<template>
  <div class="hidden">
    <template>
      <vs-button @click="activeSidebar = !activeSidebar" flat icon>
        <span class="material-icons"> menu </span>
      </vs-button>
    </template>
    <vs-sidebar
      hover-expand
      square
      reduce
      v-model="active"
      :open.sync="activeSidebar"
    >
      <template #logo size="70px">
        <img src="../assets/dofe - vert.png" alt="" />
      </template>
      <vs-sidebar-item id="home" to="/">
        <template #icon>
          <span class="material-icons"> home </span>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="login">
        <template #icon>
          <span class="material-icons"> face </span>
        </template>
        Login
      </vs-sidebar-item>
      <vs-sidebar-item id="cadastro" to="/cadastro">
        <template #icon>
          <span class="material-icons"> person </span>
        </template>
        Cadastro
      </vs-sidebar-item>
      <vs-sidebar-item id="equipe" to="/equipe">
        <template #icon>
          <span class="material-icons"> group </span>
        </template>
        Equipe
      </vs-sidebar-item>
      <vs-sidebar-item id="publicacoes"  to="/public">
        <template #icon>
          <span class="material-icons"> share </span>
        </template>
        Publicações
      </vs-sidebar-item>
      <vs-sidebar-item id="faq" to="/faq">
        <template #icon>
          <span class="material-icons"> assignment </span>
        </template>
        Faq
      </vs-sidebar-item>
      <vs-sidebar-item id="contato" to="/contato">
        <template #icon>
          <span class="material-icons"> contact_mail </span>
        </template>
        Contato
      </vs-sidebar-item>
      <vs-sidebar-item id="educacional" to="/educacional">
        <template #icon>
          <span class="material-icons"> book </span>
        </template>
        Educacional
      </vs-sidebar-item>
      <vs-sidebar-item id="Atendimento"  to="/atendimento">
        <template #icon>
          <span class="material-icons"> toc </span>
        </template>
        Atendimento
      </vs-sidebar-item>
      <template #footer> </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    activeSidebar: false
  })
}
</script>
