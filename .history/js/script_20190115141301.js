(function() {
  function carregamentoSuave(){
    console.warn('oi')
    $(document).ready(() => {
      $("body").fadeIn(1000);
    });
  }

  document.addEventListener('load', carregamentoSuave(), false);

}());
