
document.getElementById("buscar-pacientes").addEventListener("click", editar);

function editar(){
    console.log("editou"); 
    var campoNome = document.getElementById("nome");
    var campoCPF = document.getElementById("cpf");
    var nome = campoNome.value;
    var cpf = campoCPF.value;
}