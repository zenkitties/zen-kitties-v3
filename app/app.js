(function(angular) {
    "use strict";

var app = angular.module('zenApp',['ngRoute']);
    
    app.controller('AboutController', ['$scope', function($scope) {
        $scope.about = {
            name: 'Nick Myers',
            age: 28,
            current_residence: 'Fresno, CA',
            birthday: 'February 12th, 1987',
            position: 'Freelance Web Developer',
            img: '/img/about-me.png',
            github_img: '/zen-kitties-v3/img/about_me.png',
            skills: 
                [
                    'Javascript',
                    'jQuery',
                    'Anuglar JS',
                    'Node JS',
                    'Custom Wordpress Templating',
                    'PHP',
                    'Laravel',
                    'Ruby on Rails',
                    'HTML5',
                    'CSS3',
                    'SCSS',
                    'Bootstrap',
                    'Some Python',
                    'Some MySQL',
                    'Some MonogoDB',
                    'Jekyll',
                    'Photoshop',
                    'SEO',
                    'Copywriting',
                    'Professional Blogging',
                    'Content Creation',
                    'Affiliate Marketing',
                ]
        }
    }]);
    
    app.directive('zenForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/views/contact-form.html'
        }
    });
    
})(window.angular);
