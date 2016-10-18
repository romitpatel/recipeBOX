(function(){
	angular
		.module('app')
		.controller("DemoController",DemoController)

	DemoController.$inject = ['$scope','$localStorage','$sessionStorage'];

	function DemoController($scope, $localStorage, $sessionStorage) {


		$scope.openModal = function() {
			$scope.myModal = true;
		}

		$scope.closeModal = function() {
			if($scope.modal) {
				$scope.modal = false;
			}
			
			if($scope.editModal) {
				$scope.editModal = false;
			}
			
		}

		$scope.onLoad = function() {
			if($localStorage.RecipeBook == null) {
				$localStorage.RecipeBook = [
					{
						title: "Pasta",
						ingredients: ["Flour", "Oil",'Garlic','Marinara Sauce','Veggies'],
						open: false,
					},
					{
						title: "Pulav",
						ingredients: ["Rice", "Oil","Spices","Veggies"],
						open: false,
					}
				];


			}
			$scope.RecipeBook = $localStorage.RecipeBook;


		}
		

		$scope.preEditRecipe = function(recipe) {
			console.log("Old recipe "  + JSON.stringify(recipe));
			$scope.toEdit = recipe;
			$scope.temp = recipe;
			$scope.editModal = true;
			$scope.index = $localStorage.RecipeBook.indexOf(recipe);
		}
		
		$scope.edit = function(recipe) {
			$scope.editModal = false;
			console.log("New Recipe " +  JSON.stringify(recipe));
			recipe.ingredients = recipe.ingredients.split(",");
			$localStorage.RecipeBook[$scope.index] = recipe;
		}
		
		

		$scope.onLoad();

		console.dir($localStorage.RecipeBook)



		$scope.add = function(recipe) {
			alert("The new recipe has been added. Thank you " +  JSON.stringify(recipe));
			$localStorage.RecipeBook.push({
				title: recipe.title,
				ingredients: recipe.ingredients.split(","),
				open: false
			});



			$scope.RecipeBook = $localStorage.RecipeBook;
			$scope.myModal = false;
		}



		$scope.delete = function(recipe) {
			var index = $localStorage.RecipeBook.indexOf(recipe);
			$localStorage.RecipeBook.splice(index,1);
			$scope.RecipeBook = $localStorage.RecipeBook
		}
		


	};
})();