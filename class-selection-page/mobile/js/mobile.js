JSON = "http://apialuno.ergonsistemas.com.br:7073/SELECT?database=GEP_TESTE&TABELA=V_API_TurmasDiario&FILTRO=cdescola=21145660%20and%20exerc=2018%20and%20cpf=%27012.311.273-76%27"
var postData = 
[ 
  {
      "CDESCOLA": 21145660,
      "EXERC": 2018,
      "DSESCOLA": "ESCOLA DO JEFFINHO",
      "SEQUENCIAL": 1653,
      "CDCURSO": 6,
      "CDTUR": 1,
      "CDSERIE": 17,
      "CDDISC": 76,
      "CDTURMA": "B",
      "BIMESTRE": 1,
      "CPF": "012.311.273-76",
      "FATORCALCULO": 1,
      "CURSO": "ENSINO FUNDAMENTAL 1º/5º ANOS",
      "TURNO": "MATUTINO",
      "GRUPO": "ENSINO FUNDAMENTAL 1º/5º ANOS - MATUTINO",
      "SERIETURMA": "1º ANO - B",
      "SERIE": "1º ANO",
      "DISCIPLINA": "LÍNGUA PORTUGUESA,ARTE,EDUCAÇÃO FÍSICA,MATEMÁTICA,CIÊNCIAS,ENSINO RELIGIOSO",
      "STATUSDIARIO": 1,
      "DIAS_AULA": 1,
      "STATUS": "Em Digitação",
      "EXPORTADO": "0",
      "DATAINICIO1UNI": "19/02/2018 00:00:00",
      "DATAFINAL1UNI": "03/05/2018 00:00:00",
      "DATAINICIO2UNI": "04/05/2018 00:00:00",
      "DATAFINAL2UNI": "13/07/2018 00:00:00",
      "DATAINICIO3UNI": "31/07/2018 00:00:00",
      "DATAFINAL3UNI": "09/10/2018 00:00:00",
      "DATAINICIO4UNI": "10/10/2018 00:00:00",
      "DATAFINAL4UNI": "21/12/2018 00:00:00",
      "ABERTURA": "19/02/2018 00:00:00",
      "ENCERRAMENTO": "03/05/2018 00:00:00",
      "PROFESSOR": "CLEUDIMAR SANTOS DE MORAES              ",
      "FLAGIMPRESSAO": null,
      "EXER_DIASLETPREV": 160,
      "EXER_DIASLETDADOS": null,
      "BIM_DIASLETPREV": 40,
      "BIM_DIASLETDADOS": null,
      "DIVERSAS": "S",
      "DATAATUALIZADO": "17/11/2020 20:29:58",
      "ID_TURMA": 75,
      "CONTEUDOPORDISCIPLINA": "N"
  }
]



/* js template */
function append_json(data) {
    //Set Up the template
    var s = $("#diarioTemplate")[0].innerHTML.trim();
    var holder = document.createElement('div');
    holder.innerHTML = s;
    var template = holder.childNodes;

    var member = document.getElementById('diario');
    data.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();
    //Populate it
    $(newItem).find(".SERIETURMA").html(object.SERIETURMA);
    $(newItem).find(".DISCIPLINA").html(object.DISCIPLINA);
    $(newItem).find(".PROFESSOR").html(object.PROFESSOR);
    $(newItem).find(".CDSERIE").html(object.CDSERIE);
   
    //Append it

    $(".diario").append(newItem);

    });
}

$("document").ready(function() {
append_json(postData);
});









function test() {
    $(window).on('load resize', function () {
        if ($(window).width() > 950) {
            window.location = "/trunk/class-selection.html"
        }
    });
}

test();

function clicked_on_lock(){
    document.getElementById('class_lock').innerHTML = 'https';
}