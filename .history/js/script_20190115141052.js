document.addEventListener('load', carregamentoSuave, false);

function carregamentoSuave(){
  $(document).ready(() => {
    $("body").fadeIn(1000);
  });
}
