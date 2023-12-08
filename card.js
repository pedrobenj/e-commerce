let numero = document.getElementById('numero');
let bandeira = document.getElementById('bandeira')

function alteraBandeira() {
    if (numero.value.substr(0,1) == '4') {
        bandeira.innerHTML = '<img src="assets/imgs/visa.svg" style="width: 60px;">'
    }else if(numero.value.substr(0,1)== '5') {
        bandeira.innerHTML = '<img src="assets/imgs/mastercard.svg" style="width: 60px;">'
    }else {
        bandeira.innerHTML = 'Bandeira'
    }
 }

 let mes = document.getElementById('mes');

 let meses = [
{   
    'id': '01',
    'name': 'Janeiro'
},
{
    'id': '02',
    'name': 'Fevereiro'
},
{
    'id': '03',
    'name': 'Março'
},
{
    'id': '04',
    'name': 'Abril'
},
{
    'id': '05',
    'name': 'Maio'
},
{
    'id': '06',
    'name': 'Junho'
},
{
    'id': '07',
    'name': 'Junho'
},
{
    'id': '08',
    'name': 'Agosto'
},
{
    'id': '09',
    'name': 'Setembro'
},
{
    'id': '10',
    'name': 'Outubro'
},
{
    'id': '11',
    'name': 'Novembro'
},
{
    'id': '12',
    'name': 'Dezembro'
}

 ]
   
 

 for (let i = 0; i <= 12; i++) {
    mes.innerHTML += `<option value=0${meses[i].id}>${meses[i].name}</option>`
    
 }

