	
var rodada = 1;
var matriz_jogo = Array(3);



			 /*jquery base do jogo*/
$(document).ready(function(){

	$('#btn_iniciar_jogo').click(function(){ //qd algm clicar nesse elemento vai fazer uma função

		/*valida a digitação dos apelidos dos jogadores, nao deixa que de alert sem preencher nome jogador*/
		if($('#entrada_apelido_jogador1').val() == ''){
			alert('Apelido jogador 1 nao foi preenchido');
			return false;
		}
		if($('#entrada_apelido_jogador2').val() == ''){
			alert('Apelido jogador 2 nao foi preenchido');
			return false;
		}


		/* alertzinho so pra testar se os nomes estao sendo pegos
		alert($('#entrada_apelido_jogador1').val());
		alert($('#entrada_apelido_jogador2').val()); */



		/*colocar os apelidos nos bonequinhos do jogo*/
		$('#nome_jogador1').html($('#entrada_apelido_jogador1').val());
		$('#nome_jogador2').html($('#entrada_apelido_jogador2').val());


		/*controle visualização das divs /  telas*/
		$('#pagina_inicial').hide();
		$('#palco_jogo').show();

	})

	/*açao clique em cada posição do jogo, no caso clica na div e aparece imagem*/
	$('.jogada').click(function() {
		var id_campo_clicado = this.id;
		jogada(id_campo_clicado);								/*alert(id_campo_clicado); mostra o nome do id, da posição clicada*/
	})


	/*marcações nas jogadas , em JS puro*/
	function jogada(id){
		var icone = '';
		var ponto = 0;

		/*logica de posiçoes com base nos restos de divisões das posições, deixando os jogadores relacionados a numeros pares ou impares*/
		if ((rodada % 2) == 1) {
			icone = 'url("imagens/marcacao_1.png")';							/* alert('vez do jogador 1'); jogador 1, par, resto 1*/
			ponto = -1;
		} 
		else{
			icone = 'url("imagens/marcacao_2.png")';								/*alert('vez do jogador 2'); jogador 2, impar, resto 0*/
			ponto = 1;
		}
																						/*alert(rodada);*/
		rodada++;
		$('#'+id).css('background-image', icone);
	}


} );