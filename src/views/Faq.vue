<template>
 <div id="content" class="pt-5">
  <div class="container">
    <div class="titulo">
      <p>FAQ - Perguntas Frequentes</p>
    </div>
  </div>

<div class="container justify-content-md-center">
<div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">O que é Fricke?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text> A dosimetria química Fricke foi primeiramente descrita por H. Fricke e J. Hart
                        em 1927 com muitos trabalhos publicados nas décadas de 50 e 60. O dosímetro
                        Fricke consiste em uma solução de 44 mL de ácido sulfúrico concentrado (95 a 98%
                         g/mol; densidade 1,84g/cm3) 1 L de água Milli-Q preparados em um balão
                        volumétrico de 2 L acrescentados de uma à mistura de 0,12 g de cloreto de sódio
                        (PM = 58,4 g/mol) e 0,784g de sulfato ferroso amoniacal (PM = 392,14 g/mol)
                        completando-se então o balão volumétrico com água Milli-Q. </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Como é obtida a resposta de dose pelo Dosímetro Fricke?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Através de medidas de absorbância. Essas medidas são realizadas através de um
                        espectrofotômetro, Varian – Cary 50 BIO – UV Visible Spectrometry, sendo a
                        medida obtida diretamente após a interação do feixe de luz (com um comprimento
                        de onda de 304nm) com o líquido depositado numa cubeta de quartzo de 1 cm de
                        largura.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
         <b-button block v-b-toggle.accordion-3 variant="info">Por que usar dosimetria Fricke?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>A dosimetria Fricke é de baixo custo em relação a outras dosimetrias. Além
                        disso, fornece uma leitura direta de absorbância a qual é diretamente
                        proporcional a dose no dosímetro Fricke, o que traz rapidez, confiabilidade e
                        eficiência</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info"> O que é a da doença do enxerto versus hospedeiro - DECH ou GVHD (do inglês-graft-versus-host disease)?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>   GvHD é uma possível reação transfusional e o principal motivo de se realizar
                            irradiação sanguínea atualmente.

                            Esta doença é uma complicação rara da transfusão de sangue, mas é fatal em > 90%
                            dos casos.

                            O GvHD se desenvolve devido à presença de linfócitos T do doador no sangue doado
                            e que pode ser evitado pela irradiação do sangue e dos componentes do sangue
                            doado antes da transfusão.

                            Em pacientes com sistema imunológico saudável, os linfócitos são normalmente
                            destruídos quando recebem o sangue da transfusão. No entanto, em pacientes
                            imunossuprimidos, essas células não são destruídas pelo sistema imunológico do
                            receptor e, portanto, após a proliferação e produção de citocinas, os linfócitos
                            podem causar uma resposta inflamatória relacionada ao GvHD.

                            Assim, o único método eficaz para prevenir esta doença é inativar os linfócitos
                            doadores, irradiando componentes sanguíneos.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info"> Quais os limites de dose para a irradiação de sangue permitidos pela RDC nº34 da ANVISA?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>A resolução RDC 34 Art. 62 § 1º, estipula que ‘o tempo de exposição deve ser
                        configurado de forma a garantir que todo o sangue e os componentes recebam a
                        dose mínima de 25 Gy (2.500 cGy) sobre o plano médio da unidade irradiada, sem
                        que nenhuma parte receba mais do que a dose de 50 Gy (5.000 cGy) e menos que 15
                        Gy (1.500 cGy)’ [1].</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 variant="info">Quando devo refazer a dosimetria no meu irradiador de sangue?</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>A dosimetria do irradiador deve ser anual como recomendado pela RDC nº 34 da ANVISA [1].</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="info">Quando houver não conformidade, como devo proceder?</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text> A não conformidade indica que algum ponto de medição apresentado pelo fantoma
                        DoFe apresentou limites fora dos permitidos segundo [1]. Recomenda-se o ajuste
                        da dose (Gy) pelo tempo estabelecido no irradiador pelo Físico(a) responsável,
                        de acordo com o decaimento da fonte, manutenções e calibrações anteriores.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-8 variant="info">Como proceder no dia da dosimetria?</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text> Para melhor realização da dosimetria do(s) irradiador(es) de sangue, pedimos a
                        colaboração da instituição envolvida pontuando alguns aspectos importantes para
                        o dia da dosimetria:
                        <ol>
                            <li>
                                Autorizar a entrada do profissional do DoFe no estabelecimento, dia e hora
                                marcada para realização da dosimetria;
                            </li>
                            <li>
                                Disponibilizar um responsável capacitado para operar o irradiador de sangue e
                                assinar o comprovante de realização de serviço, no dia e hora marcada, para
                                receber o profissional DoFe;
                            </li>
                            <li>
                                Reservar o horário marcado por 1 hora para realização da dosimetria garantindo
                                que não haja irradiação de bolsas de hemocomponentes no mesmo horário.
                            </li>
                        </ol></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
    @import '../assets/style.css';
</style>
