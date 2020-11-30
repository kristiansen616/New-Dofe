<template>
  <div id="content" class="pt-5">
    <div class="container">
      <div class="titulo">
        <p>Contato</p>
      </div>
    </div>
    <br />
    <div class="container">
      <form id="myform" action="recaptcha.php" method="POST">
        <div class="form-row">
          <div class="form-group col-md-4 text-sub">
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              required
              class="form-control1 text-sub"
              id="name"
              placeholder="Nome"
            />
          </div>
          <div class="form-group col-md-4 text-sub">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              required
              class="form-control1 text-sub"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4 text-sub">
            <label for="city">Cidade</label>
            <input
              type="text"
              class="form-control1 text-sub"
              required
              name="city"
              id="city"
              placeholder="Cidade"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4 text-sub">
            <label for="subject">Assunto</label>
            <select
              id="subject"
              name="subject"
              required
              class="form-control1 text-sub"
            >
              <option selected>Selecionar...</option>
              <option value="1">Cobrança</option>
              <option value="2">value Documentção Técnica</option>
              <option value="3">Cadastro e Orçamento</option>
              <option value="4">Problemas no site</option>
              <option value="5">Reclamações</option>
            </select>
          </div>
        </div>
        <div class="form-group text-sub">
          <label for="message">Mensagem</label>
          <textarea
            class="form-control1 text-sub"
            required
            name="message"
            id="message"
            rows="2"
          ></textarea>
        </div>
        <div
          class="g-recaptcha"
          data-sitekey="6LfKX98UAAAAAK4V9IR14zwX3gsZ78Gnpu0B8gDv"
          required
          name="recaptcha"
          id="recaptcha"
        ></div>
        <br />
        <input
          type="submit"
          value="Enviar"
          class="btn btn-secondary botao rounded-pill text-sub"
          style="color: #fff"
        />
      </form>
    </div>

    <div
      class="modal fade"
      id="mymodal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mymodal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mymodal">Obrigado pelo Contato.</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Mensagen Enviada!</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary botao rounded-pill text-sub"
              data-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import '../assets/style.css';
</style>

<script>
export default {
  mounted () {
    const externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(externalScript)
  }
}
</script>
