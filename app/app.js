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
    }]);
    
    app.controller('BlogController',['$scope', function($scope){
        $scope.sites = [
            {
            pic: '/img/emotional-alchemist.png',
            website_name: 'Art of Emotional Alchemy',
            website_url: 'http://artofemotionalalchemy.com/',
            description:
                'I am very big into emotional intelligence and what it is to live a good life. So I have a site dedicated to my living philosophy of what it means to live a happy life.These are philosophies that I have picked up over the years and have incorporated them into a "living philosophy".This way of practical living that allows me to relate to others more easily.Art of Emotional Alchemy seeks to bridge the gap between the illusion divided-ness between us as human beings.It hopes to expand compassion for each other on a human to human level through our unconditional loving nature.'
        },
            {
            pic: '/img/passion-flower-tea-lovers.png',
            website_name: 'Passion Flower Tea Lovers',
            website_url:'http://passionflowertealovers.org/',
            description: 'Being matcha powered is pretty easy when you know what you are looking for.Passion flower tea lovers is a site dedicated to healthy living through the art of tea drinking.It has the perfect blend of articles from green teas, black teas, herbal teas, and even brewcipes to promote overall wellness.So grab a cup and brew yourself a cup of tea as you venture on to some beautifully crafted tea loving content.'
        }
    ]}]);
    
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
