const form = document.getElementById("formReserva");
const lista = document.getElementById("listaReservas");

let reservas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const tipoQuarto = document.getElementById("tipoQuarto").value;
  const cafe = document.querySelector("input[name='cafe']:checked").value;
  const entrada = new Date(document.getElementById("entrada").value);
  const saida = new Date(document.getElementById("saida").value);

  if (nome === "") {
    alert("O nome não pode estar vazio!");
    return;
  }

  
  if (reservas.some(r => r.nome === nome)) {
    alert("Esse hóspede já possui uma reserva!");
    return;
  }

 
  if (saida <= entrada) {
    alert("A data de saída deve ser depois da entrada!");
    return;
  }

  
  const precos = {
    simples: 100,
    duplo: 150,
    suite: 200
  };

  
  const umDia = 24 * 60 * 60 * 1000;
  const dias = Math.round((saida - entrada) / umDia);


  const valorTotal = precos[tipoQuarto] * dias;

 
  const reserva = { nome, tipoQuarto, cafe, entrada, saida, valorTotal };
  reservas.push(reserva);

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = "";

  reservas.forEach((reserva) => {
    const li = document.createElement("li");
    li.textContent = `${reserva.nome} - ${reserva.tipoQuarto} - Café: ${reserva.cafe} - Valor: R$${reserva.valorTotal}`;
    lista.appendChild(li);
  });
}