<template>
  <div class="mt-5 pt-5 pb-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2 class="text">Horário de Funcionamento</h2>
          <p class="pr-5 text">Segunda a Sexta, das 09:00 as 17:00</p>
        </div>
        <div class="col-lg-3 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4 text">Localização</h4>
          <p class="text">
            Rua São Francisco Xavier, 524 – Maracanã - Pavilhão Haroldo Lisboa
            da Cunha, sala 136 Térreo - CEP 20.550-900
          </p>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4 text">Contato</h4>
          <p class="mb-0 text">
            <i class="fa fa-phone mr-3"></i>+55 (21)2334-0725 | (21) 98199-2493
          </p>
          <p class="text">
            <i class="fa fa-envelope mr-3"></i>Email: mantuanoandrea@gmail.com
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p class="text">
            <small class="text-white-50">© Todos Os Direitos Reservados.</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rodape'
}
</script>

<style scoped>
.footer {
  background-image: url(../assets/5359.jpg);
  color: white;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 10px;
}
.footer .links ul {
  list-style-type: none;
}
.footer .links li a {
  color: white;
  transition: color 0.2s;
  font-family: "Roboto", sans-serif;
}
.footer .links li a:hover {
  text-decoration: none;
  color: #4180cb;
}
.footer .about-company i {
  font-size: 25px;
}
.footer .about-company a {
  color: white;
  transition: color 0.2s;
}
.footer .about-company a:hover {
  color: #4180cb;
}
.footer .location i {
  font-size: 18px;
}
.footer .copyright p {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
