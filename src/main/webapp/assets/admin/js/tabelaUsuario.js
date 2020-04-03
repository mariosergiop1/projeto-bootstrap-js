/**
 * 
 */

const getValorBanco = () =>{
	
	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		if(usuario != null){
		
			criarLinhaTabela(usuario,i);		

		}
	}
}

const criarLinhaTabela = (usuario,id) =>{

	//Criar elementos
	var linha = document.createElement("tr");
	var campoId = document.createElement("td");
	var campoNome = document.createElement("td");
	var campoTelefone = document.createElement("td");
	var campoEmail = document.createElement("td");
	var campoAcaoE = document.createElement("button");
	var campoAcaoEd = document.createElement("button");
	//Aplicar estilo
	campoAcaoE.setAttribute("id", id);
	campoAcaoE.setAttribute("value",id);
	campoAcaoE.setAttribute('onClick',"excluirBanco(value);");
	campoAcaoE.setAttribute("class", "btn btn-danger");
	campoAcaoEd.setAttribute("id", "0"+id);
	campoAcaoEd.setAttribute("value",id);
	campoAcaoEd.setAttribute('onClick',"editarBanco(value);");
	campoAcaoEd.setAttribute("class", "btn btn-warning");
	campoId.setAttribute("class", "bold");
	//Criar nós
	var textoId = document.createTextNode(id);
	var textoNome = document.createTextNode(usuario.nome);
	var textoTelefone = document.createTextNode(usuario.telefone);
	var textoEmail = document.createTextNode(usuario.email);
	var textoAcaoE = document.createTextNode("Excluir");
	var textoAcaoEd = document.createTextNode("Editar");
	//Vincular os nós aos elementos
	campoId.appendChild(textoId);
	campoNome.appendChild(textoNome);
	campoTelefone.appendChild(textoTelefone);
	campoEmail.appendChild(textoEmail);
	campoAcaoE.appendChild(textoAcaoE);
	campoAcaoEd.appendChild(textoAcaoEd);
	linha.appendChild(campoId);
	linha.appendChild(campoNome);
	linha.appendChild(campoTelefone);
	linha.appendChild(campoEmail);
	linha.appendChild(campoAcaoE);
	linha.appendChild(campoAcaoEd);
	//Vincular os elementos ao documento
	tabelaUsuario.appendChild(linha);
	
	
}