
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*
const username= "gepmobile"
const password="@#gepmobile#@"
const token =""
 */
const dominio = "https://apialuno.ergonsistemas.com.br:7073"
const selecao = "/SELECT?database=GEP_TESTE&TABELA=V_API_TurmasDiario&"
const filtro = "FILTRO=cdescola=21145660 and exerc=2019 and cpf='012.311.273-76'"


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

var url = dominio+selecao+filtro;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Basic Z2VwbW9iaWxlOkAjZ2VwbW9iaWxlI0A=");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

