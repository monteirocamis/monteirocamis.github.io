
			document.getElementById('form').addEventListener("submit", function(event) {
				event.preventDefault();
				
				nome_filme = document.getElementById('nome-filme').value;
				tempo_filme = document.getElementById('tempo-filme').value;
				
				if(nome_filme != "" && tempo_filme != ""){
					this.submit();
				}else{
					alert("Preencha corretamente todos os campos");
				}
			});
			

			function pegarGet(url){
				qs = url.slice(url.indexOf('?')+1);
				qss = qs.split('&');
				return qss;
			}
			
			parametros = pegarGet(window.location.href);
			
			console.log(decodeURIComponent(parametros[1].split("=")[1]));
			
			controle = parametros[0].split("=")[1];
			filme = decodeURIComponent(parametros[1].split("=")[1]);
			tempo = parametros[2].split("=")[1];

			if(controle == 'OK'){
				document.getElementById('msg').style.display = 'block';
				document.getElementById('msg').innerHTML = "<i class='fas fa-check'></i> Você enviou os dados do filme [ " + filme + " ] que tem [ " + tempo + " ] minutos de duração";
			}

		