(function(){
	angular
		.module('app')
		.directive('addRecipe',addRecipe)
		.directive('editRecipe', editRecipe)

			function addRecipe() {

		return {
			restict : "E",
			template : "<button ng-click='openModal()'>Add Recipe</button>",
			replace : true

		};
	};
	
	
	function editRecipe() {

		return {
			restict : "E",
			template : "<button ng-click='preEditRecipe(recipe)'>Edit Recipe</button>",
			replace : true

		};
	};
})();