const form = document.getElementById("formConsulta");
const lista = document.getElementById("listaConsultas");
const estatisticas = document.getElementById("estatisticas");

let consultas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const especialidade = document.getElementById("especialidade").value;
  const turno = document.querySelector("input[name='turno']:checked").value;

  if (nome === "") {
    alert("O nome não pode estar vazio!");
    return;
  }

  if (consultas.some(c => c.nome === nome && c.turno === turno)) {
    alert("O paciente já possui consulta neste turno!");
    return;
  }

  const totalTurno = consultas.filter(c => c.turno === turno).length;
  if (totalTurno >= 5) {
    alert("Este turno já possui 5 consultas agendadas!");
    return;
  }

  const consulta = { nome, especialidade, turno };
  consultas.push(consulta);

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = "";

  consultas.forEach((consulta) => {
    const li = document.createElement("li");
    li.textContent = `${consulta.nome} - ${consulta.especialidade} - ${consulta.turno}`;
    lista.appendChild(li);
  });

  atualizarEstatisticas();
}

function atualizarEstatisticas() {
  let resumo = {};
  consultas.forEach(c => {
    resumo[c.especialidade] = (resumo[c.especialidade] || 0) + 1;
  });

  let texto = "Consultas por especialidade: ";
  for (let esp in resumo) {
    texto += `${esp}: ${resumo[esp]} | `;
  }

  estatisticas.textContent = texto;
}