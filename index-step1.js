$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		var number= $("#value").val() ;
		var chiffre=21 ;
		// Récupérer le contenu de mon input
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné
			if(number == chiffre){
				alert("You Win");
			}
			// Sinon,
			// Afficher une alert Perdu
			else{
				alert("You Lose");
			}
	// /Fin == Fonction clickValider == 
		}
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("#btn").click(function(){
		clickValider();
			
		
	})
}