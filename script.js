let addTarefa = document.querySelector(".addTarefa");
let deleteTarefa = document.querySelector(".delete");

addTarefa.addEventListener("click", () => {
  const tarefa = document.querySelector(".addTarefa").value;
  console.log(tarefa); // até aqui tudo certo!

  const lista = document.querySelector(".lista");

  const novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;

  lista.appendChild(novaTarefa);
});


novaTarefa.addEventListener("click", () => {
  novaTarefa.classList.toggle("feito"); // você cria a classe 'feito' no CSS
});