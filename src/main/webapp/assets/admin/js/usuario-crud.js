/**
 * 
 */

window.addEventListener("load", function () {

	
var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var email = document.getElementById("email");
getValorEditar();


document.getElementById("btn-salvaUsu").addEventListener("click",function(){
	
	event.preventDefault(stop);
	
    var usuario = {
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
      edicao: false
  }
  setValorBanco(usuario);
    
});


document.getElementById("btn-listarUsu").addEventListener("click",function(){
	
	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		if(usuario != null && usuario.edicao === true){
			alert(usuario.edicao);
		
		 usuario.edicao = false;
		 localStorage.setItem(i,JSON.stringify(usuario));

		}
	}location.href= "usuarios.jsp";
	
});

});

const getValorEditar = () =>{
	

	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		if(usuario != null && usuario.edicao === true){
		
		nome.value = usuario.nome;
		telefone.value = usuario.telefone;
		email.value = usuario.email;

		}
	}
}

const setValorBanco = (usuario) =>{
	var verificarEmail = true;	
	var verificarEdicao = true;	
	for(var i = 0; i < localStorage.length;i++){
		var usuarioB = JSON.parse(localStorage.getItem(i));
		if(usuarioB != null){
		  if(usuarioB.edicao != true){
			if(usuarioB.email == usuario.email){
				verificarEmail = false;
				verificarEdicao = false;
			}
		  }else{
					localStorage.setItem(i,JSON.stringify(usuario));
					verificarEdicao = true;
					verificarEmail = false;
				}
		}
	}

	if(verificarEmail){
		localStorage.setItem(localStorage.length,JSON.stringify(usuario));
		//alert("Usuario salvo com sucesso!");
        location.href= "usuarios.jsp";
        console.log(usuario.nome+" "+usuario.telefone);
	}else if(verificarEdicao){
		alert("Usuario editado");
		location.href= "usuarios.jsp";
	}else{
		alert("Email já existe");
	}
}