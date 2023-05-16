function carregarCurso(){
	var curso = document.getElementById("cursos").value;
	
	if(confirm("Deseja obter mais informações do curso " + curso + "?")){
		var portal = "http://fatecsorocaba.edu.br/curso_<SIGLA>.asp";
		
		var siglaPortal = "";
		switch(curso){
			case "Análise e Desenvolvimento de Sistemas": siglaPortal = "ads"; 
                break;
			case "Eletrônica Automotiva": siglaPortal = "ea"; 
                break;
			case "Fabricação Mecânica": siglaPortal = "fm"; 
                break;
			case "Gestão Empresarial - EAD": siglaPortal = "ead-ge"; 
                break;
			case "Gestão da Qualidade": siglaPortal = "gq"; 
                break;
			case "Logística": siglaPortal = "log"; 
                break;
			case "Manufatura Avançada": siglaPortal = "ma";
                break;
			case "Processos Metalúrgicos": siglaPortal = "pm"; 
                break;
			case "Polímeros": siglaPortal = "pol"; 
                break;
			case "Projetos Mecânicos": siglaPortal = "proj"; 
                break;
			case "Sistemas Biomédicos": siglaPortal = "sb"; 
                break;
		}
		
		portal = portal.replace("<SIGLA>", siglaPortal);
		
		window.open(portal, "_blank", "height=600, width=300");
	}else{
		
	}
}