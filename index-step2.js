$(document).ready(pied);

// Fonction principale
function pied(){
	var random= (Math.random()*(20 - 0)+0).toFixed();
		console.log(random)
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		// Récupérer le contenu de mon input
		var number= $("#value").val()	
		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné
			if (number==random){ 
				alert("You Win")
			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			}else if(number>random){
				alert("You Lose, your number is so high, continue?")
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			}else if(number<random){
				alert("You Lose, your number is so small, continue?")
			}	
	// /Fin == Fonction clickValider == 
 	}
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("#btn").click(function(){
		clickValider()			
	})

}