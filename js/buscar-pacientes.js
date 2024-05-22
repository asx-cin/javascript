var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    //XML - transporte de dados
    var xhr = new XMLHttpRequest();
    //tipo de requisição (open) e get.
    //console.log("buscando paciente")
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    //xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function() {

        if(xhr.status == 200){ //indica que deu tudo certo
            var resposta = (xhr.responseText);
            //console.log(typeof resposta);
            
            //vamos converter o arquivo de string para array
            var pacientes = JSON.parse(resposta)
            //console.log(pacientes)
            //console.log(typeof paciente)
            //técnica AJAX para fazer requisição de forma assíncrona
            pacientes.forEach(function(paciente) {
                adcionaPacienteNaTabela(paciente);
        });
        }else{ //erros 201, 402, 503, 404
            console.log(xhr.status);
            console.log(xhr.responseText);
        } //https://api-pacientes.herokuapp.com/paci1111entes --> api inexistente
        
    });
    //executa a requesição
    xhr.send();

//Está faltando a parte final de exibição de dados para o usuário

});

