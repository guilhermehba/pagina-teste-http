// gerador de numero aleatorio
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// buscar data do dia atual
  const d = new Date();
  function dataHoje(){
    var Date = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()
    document.getElementById('dataHoje').innerHTML = Date
  }
  
// condição para confirmar a exclusão
function confirmarExclusao(){
  if($('#input_code').text() == $('#random_numero').text()){
    alert('exclusão autorizada')
  }
}
// test validation

// test validation
// função para aativar o sweet alert
function acionar() {
    
  swal({
    icon: "success",
    text: 'Data excluida com Sucesso!',
    buttons:{
      confirm: false
    }
  });
}
