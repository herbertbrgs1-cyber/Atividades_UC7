 function cadastrarFuncionario() {
      const nome = document.getElementById("nome").value;
      const salario = document.getElementById("salario").value;
      const cargo = document.getElementById("cargo").value;
      const idade = document.getElementById("idade").value;
      const cpf = document.getElementById("cpf").value;
      const departamento = document.getElementById("departamento").value;
      const estadoCivil = document.querySelector("input[name='estadoCivil']:checked")?.value;

      if (!estadoCivil) {
        alert("Selecione o estado civil!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = `Nome: ${nome}, Salário: R$${salario}, Cargo: ${cargo}, Idade: ${idade}, CPF: ${cpf}, Departamento: ${departamento}, Estado Civil: ${estadoCivil}`;

      document.getElementById("listaFuncionarios").appendChild(li);

      document.getElementById("formFuncionario").reset(); // limpa o formulário
    }
 