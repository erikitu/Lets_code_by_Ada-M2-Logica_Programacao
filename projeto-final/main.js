const toDoLista = []

function showAllTodo(){
    console.log("----------Lista de Tarefas-----------")
    toDoLista.forEach((tarefa, index) => console.log(`${index + 1}. ${tarefa}`))
    console.log("-------------------------------------")
}
function createTask(task){
    toDoLista.push(task)
}


function editTask(index, newDescription) {
    if (index >= 0 && index < toDoLista.length) {
        toDoLista[index] = newDescription;
        console.log(`Tarefa ${index + 1} editada com sucesso: ${newDescription}`);
    } else {
        console.log("Índice de tarefa inválido.");
    }
}

function removeTask(index) {
    if (index >= 0 ) {
        const deletedTask = toDoLista.splice(index,1)
        console.log(`Tarefa ${deletedTask} removida com sucesso!`);
    } else {
        console.log("Índice de tarefa inválido.");
    }
}
function askUser(){
    const decision = prompt("Escolha uma opção(1 - listar tarefas pendentes, 2 - adicionar tarefas, 3 - editar tarefa salva, 4 remover tarefa ou 0 para sair): ")
       
    switch(decision) {
        case "1":
            showAllTodo()
            askUser()
            break;
        case "2":
            const task = prompt("Digite uma tarefa: ")
            createTask(task)
            showAllTodo()
            askUser()
            break;
        case "3":
            const indexToEdit = parseInt(prompt("Digite o indice da tarefa: "))
            const taskChanged = prompt("Insira a alteração da tarefa: ")
            editTask(indexToEdit-1, taskChanged)
            showAllTodo()
            askUser()
            break;
        case "4":
            if(toDoLista.length < 1){
                console.log("Lista de tarefas ainda vazia! Adicione uma tarefa na lista")
            }else{
            const taskToDelete = parseInt(prompt("Digite o indice da tarefa a ser excluida: "))
            removeTask(taskToDelete-1)
            }
            askUser()
            break;
        case "0":
            console.log("To-do List Finalizado com sucesso!")
            break;
        default:
            console.log("Opção inválida. Vamos tentar de novo")
            askUser()
            break;
    }
}
console.log("Iniciando o To-do List")
askUser()