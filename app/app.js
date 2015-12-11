(function(angular) {
    "use strict";

var app = angular.module('zenApp',['ngRoute']);
    
    app.controller('SocialController',['$scope', function($scope){
        $scope.social = {
            facebook: 'https://www.facebook.com/barefootphilosopher',
            twitter: 'https://twitter.com/zenbrewmaster',
            instagram: '',
            google: 'https://plus.google.com/u/0/109614161319186969298',
            github: 'https://github.com/zenkitties'
        }
    }])
    
    app.controller('AboutController', ['$scope', function($scope) {
        $scope.about = {
            name: 'Nick Myers',
            age: 28,
            current_residence: 'Fresno, CA',
            birthday: 'February 12th, 1987',
            position: 'Freelance Web Developer',
            img: '/img/about-me.png',
            github_img: 'zen-kitties-v3/img/about-me.png',
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
            templateUrl: 'app/views/contact-form.html'
        }
    });
    
})(window.angular);
