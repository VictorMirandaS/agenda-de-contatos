document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;

    var tabela = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);
    var colunaEmail = novaLinha.insertCell(2);
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;
    colunaEmail.innerHTML = email;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
});
