$(document).ready(main);

// Fonction principale
function main(){
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	var figure= 3; 
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var random= (Math.random()*(20 - 0)+0).toFixed();
		console.log(random)
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		// Récupérer le contenu de mon input
		var number=$("#value").val();
		// Comparer ce contenu au nombre mystère.			
			// Si le contenu est égal : 
			// - afficher une alert Gagné
			// - démarrer une nouvelle partie
			if (number==random){ 
				alert("You Win");
			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			}else if(number>random){
				alert("You Lose, your number is too big, continue?");
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			}else if(number<random){
				alert("You Lose, your number is too small, continue?");
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			}if((number>random)||(number<random)){
				figure--
				console.log(figure);			
			}			
			// Actualiser la zone html affichant le nombre de tentatives
			$("#attempt").html("Remaining Attempt :\n"+figure)		 
			// Si le nb de tentatives est égal à 0,
			 // 	la partie est perdue :
			 // 	- afficher que c'est perdu
			 // 	- démarrer une nouvelle partie
			 // 		+ remettre le nombre de tentatives à sa valeur initiale
			 // 		+ générer un nouveau nombre mystère
			 	if(figure === 0){
			 		alert("Game Over");
			 		figure=3;
			 		
			 	}						
	// /Fin == Fonction clickValider == 
	}
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("#btn").click(function(){
		clickValider()			
	})

	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}