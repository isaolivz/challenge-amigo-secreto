//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigo à lista
document.getElementById("btnAdicionar").addEventListener("click", function() {
    let nome = document.getElementById("amigo").value.trim();  // Corrigido para "amigo" que é o ID correto
    
    // Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar nome à lista de amigos
    amigos.push(nome);

    // Atualizar a lista na interface
    atualizarLista();

    // Limpar o campo de texto
    document.getElementById("amigo").value = "";
});

// Função para sortear um amigo secreto
document.getElementById("btnSortear").addEventListener("click", function() {
    if (amigos.length === 0) {
        alert("Adicione ao menos um amigo para realizar o sorteio.");
        return;
    }

    // Sortear um amigo aleatório
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibir o resultado
    document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}`;
});

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpar a lista antes de adicionar os novos nomes
    
    amigos.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

