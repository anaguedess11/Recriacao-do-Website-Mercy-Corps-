//VARIÁVEIS PARA OS EVENT LISTNERS:
const donate = document.querySelector('.donation');
const form = document.querySelector('.formulario');
const spanx = document.querySelector('.spanX');
const donationMensal = document.querySelector('.donMensal');
const inputDonationMensal = document.querySelector('.doacaoMensal');
const inputDonationUnico = document.querySelector('.doacaoUnica');
const pagUnico = document.querySelector('.pagamentoUnico');
const pagMensal = document.querySelector('.pagamentoMensal');
const inputParticular = document.querySelector('.particular');
const inputEmpresa = document.querySelector('.empresa');
const addParticular = document.querySelector('.divParticular');
const addEmpresa = document.querySelector('.divEmpresa');
const doar = document.querySelector('.btnDoar');
const resetar = document.querySelector('.btnReset');
const iban = document.querySelector('.hidden');
const iban2 = document.querySelector('#iban');

//VARIÁVEIS PARA O SUBMENU:
const colunas = document.querySelector('.colunas');
const separadores = document.querySelector('.separadores, .colunas');
const btnSandwich = document.querySelector('.sandwich');
const spanx2 = document.querySelector('.spanx2');
const a1img = document.querySelector('.a1img');
const a1 = document.querySelector('.a1');
const submenuSandwich = document.querySelector('.colunas');

//VARIÁVEIS PARA O FORMULÁRIO:
const valorDoacaoRadio = document.querySelectorAll('input[name="valorDoacao"]');
const customAmountInput = document.querySelector('.inputDoacao');
const informacaoParagrafo = document.querySelector('.paragrafoInfo');
const tipoDoacaoRadio = document.querySelectorAll('input[name="tipoDoacao"]');

//EVENT LISTNERS:
spanx.addEventListener('click', reset);
resetar.addEventListener('click', resetbtn);

donate.addEventListener('click', function(){
    form.style.display='block'; //evento que ao carregar no btn DONATE aparece o menu das doações
    form.scrollIntoView({ block: 'start', behavior: 'smooth' }); //
});

inputDonationMensal.addEventListener('click', function(){
    donationMensal.style.display='flex';// evento que ao carregar no donativo mensal aparece mais opçoes relativos a esse donativo
    pagMensal.style.display='block';
    pagUnico.style.display='none';
});

inputDonationUnico.addEventListener('click', function(){
    donationMensal.style.display='none'; // evento que fecha as opçoes do donativo mensal que nao serao necessarios para o donativo unico
    pagUnico.style.display='block'; //evento para abrir meio de pagamento relativo ao donativo unico
    pagMensal.style.display='none';
});

inputParticular.addEventListener('click', function(){
    addParticular.style.display='flex'; // evento que abre a parte relativa ao particular
    addEmpresa.style.display='none'; // evento que fecha a parte que nao pertence ao particular
 });

inputEmpresa.addEventListener('click', function(){
    addEmpresa.style.display='flex'; // evento que abre a parte relativa a empresa
    addParticular.style.display='none'; //evento que fecha a parte que nao pertence a empresa
});

doar.addEventListener('click', function(){
    resetar.style.display='block';//evento para quando clicar no btn doar aparecer outro btn para dar reset
})

pagMensal.addEventListener('change', function(){
    if(pagMensal.value=='debitoDireto'){
        iban.classList.remove('hidden');
    }
    else{
        iban.classList.add('hidden');
    }
});

btnSandwich.addEventListener('click', function(){
    btnSandwich.style.display='none';
    spanx2.style.display='block';
    submenuSandwich.style.display='flex';
});

spanx2.addEventListener('click', function(){
    spanx2.style.display='none';
    btnSandwich.style.display='block';
    submenuSandwich.style.display='none';
});

separadores.addEventListener('mouseover', function(){
    colunas.style.display='flex';
});

separadores.addEventListener('mouseout', function(){
    if (!separadores.contains(event.relatedTarget) && !colunas.contains(event.relatedTarget)) {
    colunas.style.display='none';
}});

colunas.addEventListener('mouseout', function (event) {
    // Verificar se o mouse está fora do submenu
    if (!colunas.contains(event.relatedTarget)) {
      colunas.style.display = 'none';
    }
});


//FUNÇÕES:
function reset(){ //funcao que da display none em todas as partes e fechar o formulario
    form.style.display='none';
    pagUnico.style.display='none';
    addParticular.style.display='none';
    pagMensal.style.display='none';
    donationMensal.style.display='none';
    addEmpresa.style.display='none';
    resetar.style.display='none';
    iban.classList.add('hidden');
    informacaoParagrafo.textContent="";
    document.querySelector('.formulario').reset();
}

function resetbtn(){//funcao para dar reset no formulario sem dar display none no mesmo
    pagUnico.style.display='none';
    addParticular.style.display='none';
    pagMensal.style.display='none';
    donationMensal.style.display='none';
    addEmpresa.style.display='none';
    iban.classList.add('hidden');
    informacaoParagrafo.textContent="";
    document.querySelector('.formulario').reset();
}

valorDoacaoRadio.forEach(valorDoacaoInput=>{ 
    
    function updateRefeicoesInfo(){  //verifica se está selecionada a opção de adicionar o valor e poe o input obrigatorio
        let valorDoacao = parseFloat(valorDoacaoInput.value);
        if(valorDoacaoInput.value == "inputDoacao"){
            valorDoacao = customAmountInput.value;
            customAmountInput.required = true;
        }else{
            customAmountInput.required = false;
        }

        const refeicoes = Math.round(valorDoacao / 1.5);
        const dias = Math.round(refeicoes / 2);
0
        const tipoDoacao = document.querySelector("input[name='tipoDoacao']:checked").value;
        if(tipoDoacao == "unica" && !isNaN(valorDoacao)){ //verifica que é numero

            if(valorDoacao > 40){
                informacaoParagrafo.textContent = `O seu donativo permitirá alimentar diariamente ${dias} pessoas.`;
            }else{
                informacaoParagrafo.textContent = `O seu donativo permitirá fornecer aproximadamente ${refeicoes} refeições.`;
            }
        }else if(tipoDoacao == "periodica" && !isNaN(valorDoacao)){
            if(valorDoacao < 90){
                informacaoParagrafo.textContent = `O seu donativo permitirá alimentar uma pessoa durante ${dias} dias.`;
            }else{
                informacaoParagrafo.textContent = `O seu donativo permitirá alimentar ${Math.floor(refeicoes / 60)} pessoas durante este mês.`;
            }
        }else{
            informacaoParagrafo.textContent = "";
        }
    }

    valorDoacaoInput.addEventListener("change", updateRefeicoesInfo); //quando altera os valores a função volta a correr
    tipoDoacaoRadio.forEach(function(radio){ //quando altera o donativo unico/ mensal a função volta a correr
        radio.addEventListener("change", updateRefeicoesInfo);
    });
});

const vinte = document.querySelector (".vinte");
vinte.addEventListener('click', function(){
    customAmountInput.value="20";
});
const quarenta = document.querySelector (".quarenta");
quarenta.addEventListener('click', function(){
    customAmountInput.value="40";
});
