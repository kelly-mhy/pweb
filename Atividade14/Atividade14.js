
function validar(){

	var nome = document.pesquisa.elements["nome"].value;
	var email = document.pesquisa.elements["email"].value;
	var comentario = document.pesquisa.elements["comentario"].value;

	var mensagem = "";
	var erro = false;
	
	if(nome.length < 10){
		mensagem += "Nome não pode ter menos do que 10 caracteres. \n";
		erro = true;
	}
	if(!(email.includes('.') && email.includes('@'))){
		mensagem += "Digite um e-mail válido. Deverá obrigatoriamente conter @ e .\n";
		erro = true;
	}
	if(comentario.length < 20){
		mensagem += "Comentário não pode ter menos do que 20 caracteres. \n";
		erro = true;
	}
	
	if(erro){
		alert(mensagem);
	}else{
		mensagem = "Dados preenchidos corretamente!\n";
        
		var visita = document.pesquisa.elements["visita"].value;
		
		if(visita == 'n'){
			mensagem += "Que bom que você voltou a visitar esta página!";
		}else{
			mensagem += "Volte sempre a esta página.";
		}
		alert(mensagem);
	}
	
}