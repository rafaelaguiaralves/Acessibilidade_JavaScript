const inputBusca = document.getElementById('inputBusca');
const resultado = document.getElementById('resultados');

    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
resultado.innerHTML = '';
          }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            resultado.innerHTML  = (`<h2> <p> Resultado da busca </p></h2><br> `+
            `CEP: ${conteudo.cep} <br> `+
                `Logradouro: ${conteudo.logradouro} <br> `+
                `Bairro: ${conteudo.bairro} <br> `+
                `Cidade/Estado: ${conteudo.localidade} - `+
                `${conteudo.uf} `+
                `<br> <a href='#' onclick='copiarEndereco()' title='Clique para copiar o endereço para a área de transferência.'> Copiar </a> `);
            }
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
resultado.innerHTML = "CEP não encontrado.";
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = inputBusca.value; 
        cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
             resultado.innerHTML ="...";
                
                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                resultado.innerHTML = `Formato de CEP inválido`; 
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

    inputBusca.addEventListener('input', () => {
pesquisacep(inputBusca.value);
    });


    function copiarEndereco() {

        // Cria um elemento temporário para copiar o texto
        var tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = resultado.textContent.replace(' Copiar ', '');
        tempInput.select();

        // Copia o texto para a área de transferência
        document.execCommand("copy");
        alert("O endereço foi copiado para a área de transferência.");

        // Remove o elemento temporário
        document.body.removeChild(tempInput);       
    }
