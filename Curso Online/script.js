const form = document.getElementById("formAluno");
const lista = document.getElementById("listaAlunos");
const qtd = document.getElementById("quantidade");

let alunos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const curso = document.getElementById("curso").value;
  const modalidade = document.querySelector("input[name='modalidade']:checked").value;

 
  if (nome === "") {
    alert("O nome não pode estar vazio!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("E-mail inválido!");
    return;
  }

  
  const aluno = { nome, email, curso, modalidade };
  alunos.push(aluno);

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = "";

  alunos.forEach((aluno) => {
    const li = document.createElement("li");
    li.textContent = `${aluno.nome} - ${aluno.email} - ${aluno.curso} - ${aluno.modalidade}`;

    if (aluno.modalidade === "EAD") {
      li.classList.add("ead");
    }

    lista.appendChild(li);
  });

  qtd.textContent = `Total de alunos: ${alunos.length}`;
}
