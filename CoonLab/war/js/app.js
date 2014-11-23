var app = angular.module('TheCoonLab', [ 'ngRoute', 'ngAnimate' ]);
		app.config(function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'partial/home.html',
				controller : 'HomeCtrl'
			}).when('/post/:id', {
				templateUrl : 'partial/post.html',
				controller : 'PostCtrl'
			}).when('/contact', {
				templateUrl : 'partial/contact.html'
			}).when('/about', {
				templateUrl : 'partial/about.html'
			}).otherwise({
				redirectTo : '/'
			});
		});

		app
				.factory(
						'PostFactory',
						function() {
							var factory = {
								posts : [
										{
											"index" : 0,
											"picture" : "http://placehold.it/1400x650",
											"name" : {
												"first" : "Naomi",
												"last" : "Mitchell"
											},
											"date" : 1405972485717,
											"email" : "naomi.mitchell@undefined.us",
											"titre" : "incididunt adipisicing ea proident excepteur sint ex",
											"soustitre" : "eiusmod ullamco consectetur nostrud aliquip consequat ad qui esse occaecat",
											"content" : "Dolor elit sit velit ad laborum mollit. Ad reprehenderit veniam minim incididunt voluptate exercitation labore reprehenderit anim est. Dolor cillum aute deserunt cupidatat non sunt. Eu Lorem ullamco ex sint do fugiat qui ipsum quis elit commodo anim adipisicing adipisicing.\r\nEiusmod laborum minim in cillum aliqua. Sit incididunt laborum cillum consequat aliquip adipisicing cupidatat. Eiusmod cupidatat nulla cillum cillum Lorem minim adipisicing sunt consectetur dolore velit esse.\r\nCommodo excepteur sunt fugiat commodo anim. Eu commodo mollit adipisicing irure. Aute nisi est duis laborum labore quis irure commodo. Exercitation incididunt ullamco cillum non commodo duis sunt aute aliquip dolor ullamco cupidatat quis dolor. Tempor quis pariatur enim mollit duis elit aliquip laborum enim ipsum aliquip veniam. Culpa occaecat reprehenderit esse aliqua ad nulla aliqua tempor id. Aute ipsum deserunt minim officia non sint est incididunt ea anim mollit quis irure.\r\n"
										},
										{
											"index" : 1,
											"picture" : "http://placehold.it/1400x650",
											"name" : {
												"first" : "Perry",
												"last" : "Griffith"
											},
											"date" : 1399036927724,
											"email" : "perry.griffith@undefined.co.uk",
											"titre" : "magna aute cupidatat cillum voluptate anim consectetur",
											"soustitre" : "nulla reprehenderit officia fugiat ullamco eiusmod fugiat deserunt non et",
											"content" : "Ad excepteur esse cupidatat voluptate magna nostrud aliqua laborum labore commodo cupidatat dolore. Lorem quis irure officia consequat sunt reprehenderit in fugiat sunt cillum consequat consectetur nulla et. Aliquip velit qui quis incididunt exercitation quis nostrud incididunt labore elit non magna. Amet pariatur ullamco non aliqua laboris. Labore elit excepteur proident proident cupidatat veniam aliquip eiusmod.\r\nDo veniam ad elit laboris. Aute elit laborum proident excepteur exercitation aliqua anim amet fugiat aliqua tempor incididunt. Ipsum proident mollit proident veniam cupidatat fugiat mollit excepteur in nostrud veniam irure laborum minim. Adipisicing est ex nisi duis id. Sint consectetur occaecat eiusmod laborum quis velit officia deserunt labore aute. Velit esse minim eu qui veniam id.\r\nQui irure cupidatat Lorem Lorem nisi. Eiusmod occaecat sit qui anim mollit ad dolor. Nulla amet enim excepteur reprehenderit esse pariatur magna velit elit labore laborum officia enim. Aute aliquip sunt ipsum ipsum ad voluptate commodo anim aute esse aliqua. Velit aliqua eiusmod Lorem reprehenderit culpa mollit labore ut exercitation.\r\n"
										},
										{
											"index" : 2,
											"picture" : "http://placehold.it/1400x650 	",
											"name" : {
												"first" : "Webster",
												"last" : "Bauer"
											},
											"date" : 1399991897236,
											"email" : "webster.bauer@undefined.biz",
											"titre" : "excepteur officia dolore aliquip magna qui proident",
											"soustitre" : "ex tempor ex reprehenderit est id proident nulla duis irure",
											"content" : "Veniam est consectetur id anim non cillum velit cupidatat ipsum. Ad sit laborum ex eiusmod irure qui commodo adipisicing anim aliqua enim. Sint qui eiusmod voluptate mollit consectetur cupidatat non incididunt nulla mollit duis id elit. Irure quis ea cillum sunt elit culpa qui nisi deserunt sunt duis eu ex nulla. Nisi excepteur exercitation reprehenderit incididunt nostrud id anim magna ullamco aliquip proident eu tempor. Nisi est nostrud anim voluptate duis dolore ut dolore enim do reprehenderit fugiat.\r\nConsequat elit esse nisi consectetur excepteur eiusmod. Laboris voluptate pariatur nostrud dolore nisi adipisicing id mollit. Laborum adipisicing enim cillum ut id irure esse duis.\r\nEiusmod veniam ullamco irure laborum. Deserunt irure ad aliquip in officia commodo aliqua aliqua aliqua et. Sint ipsum velit eiusmod laborum nostrud ea id occaecat non enim deserunt exercitation magna. Adipisicing enim aliqua deserunt cillum aliquip amet ea fugiat. Ipsum culpa nulla cupidatat eiusmod aliqua et enim aliquip minim ad. Anim magna veniam veniam eu Lorem qui enim sit irure.\r\n"
										} ],

								getPosts : function() {
									return factory.posts;
								},

								getPost : function(id) {
									var post = {};
									angular.forEach(factory.posts, function(
											value, key) {
										if (value.index == id) {
											post = value;
										}
									});
									return post;
								},

							}
							return factory;

						});

		app.factory('TemplatesFactory', function() {
			var factory = {
				templates : [ {
					name : 'homeheader',
					url : 'partial/headerHome.html'
				}, {
					name : 'postheader',
					url : 'partial/headerPost.html'
				} ],
				template : {
					name : 'homeheader',
					url : 'partial/headerHome.html',
					id : 0
				},
				ui : { direction : ''},
				getTemplates : function() {
					return factory.templates;
				},
				getTemplate : function() {
					return factory.template;
				},
				getDirection : function(){
					return factory.ui.direction;
				}

			};
			return factory;
		});

		app.controller('HomeCtrl', function($scope, PostFactory,$timeout) {
			$timeout(function(){
			$scope.posts = PostFactory.getPosts();				
			},100);

		});

		app.controller('PostCtrl', function($scope, PostFactory, $routeParams,
				TemplatesFactory,$timeout) {
			$timeout(function(){
			$scope.template = TemplatesFactory.getTemplate();
			$scope.templates = TemplatesFactory.getTemplates();
			$scope.post = PostFactory.getPost($routeParams.id);
			},100);

		});

		app.controller('TemplateCtrl', function($scope, PostFactory,
				TemplatesFactory,$timeout,$window,$route) {
			$scope.ui = TemplatesFactory.getDirection();
			  $scope.gotoTop = function() {
			      // set the location.hash to the id of
			      // the element you wish to scroll to.
			      $location.hash('top');

			      // call $anchorScroll()
			      $anchorScroll();
			    };
			
			$timeout(function(){
			$scope.templates = TemplatesFactory.getTemplates();
			$scope.template = TemplatesFactory.template;
			},100);

			$scope.$on("$routeChangeSuccess",function(event,next,current){
				if($window.location.hash == '#/'){
					$scope.ui.back = false;
				}else{
					$scope.ui.back = true;
				}
				$timeout(function(){
					$scope.ui.direction = 'left';
					$scope.back = function(){
						$scope.ui.direction = 'right';
						//$window.history.back();
					}
				},1000)
			});
			
			
			
			console.log($scope);
		});
		
	

		