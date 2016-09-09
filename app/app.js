(function(angular) {
    "use strict";

var app = angular.module('zenApp',['ngRoute']);
	
	app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
    
    app.controller('SocialController',['$scope', function($scope){
        $scope.social = {
            facebook: 'https://www.facebook.com/barefootphilosopher',
            twitter: 'https://twitter.com/zenbrewmaster',
            instagram: '',
            google: 'https://plus.google.com/u/0/109614161319186969298',
            github: 'https://github.com/zenkitties'
        }
    }]);
    
    app.controller('ProjectController',['$scope', function($scope){
        $scope.projects = [
            {
                id: '01',
                project_name: 'Get Hitting Results Now (Video Sales Funnel)',
                pic: '/img/projects/getting-hitting-results-video.jpg',
                thumb:'/img/projects/getting-hitting-results-video-thumb.jpg',
                website_url: 'http://gethittingperformancelabresultsnow.com/video-sales-v1/',
                desc: 'This is the video sales funnel for the project below this one. This is meant to bring in traffic and send to the form. I used all of the same skills I used below including SCSS for easy variable usage utility for my CSS code. I also used bootstrap for framework/mobile friendliness. This is another project that will be getting tons of traffic sent to it so that large lists can be formed from that traffic. These are things marketers typically use for their projects to warm up cold traffic.',
                languages: ['HTML5','CSS3','Bootstrap','jQuery','Flexbox', 'SCSS', 'Node package handler','gulp']
            },
            {
                id: '02',
                project_name: 'Get Hitting Results Now (Sales Funnel)',
                pic: '/img/projects/getting-hitting-results.jpg',
                thumb:'/img/projects/getting-hitting-results-thumb.jpg',
                website_url: 'http://gethittingperformancelabresultsnow.com/',
                desc: 'This project was a Landing Page that I did for Hitting Perforamnce Lab for gathering a list of subscribers. I worked a lot with forms in this one in HTML5 and then used jQuery to pre populate data on a redirect to Click Bank after form submission. I utilized SCSS for variables to create better workflow, and bootstrap for my framework for user friendly/device mobility concerns. (scaling). This Landing Page will be one of many for this project that will be seeing tons of traffic and will win over thousands in revenue',
                languages: ['HTML5','CSS3','Bootstrap','jQuery','Flexbox', 'SCSS', 'Node package handler','gulp']
            },
            {
                id: '03',
                project_name: 'Tulare County Child Abuse Prevention Council',
                pic: '/img/projects/tulare-capc.jpg',
                thumb:'/img/projects/tulare-capc-thumb.jpg',
                website_url: 'http://tularecountycapc.org/',
                desc: 'This project was a non-profit organization based on child abuse prevention that I designed and completed the full structure from the inside-out. I utilized the Beaver Builder plugin in Wordpress as well as did custom graphics, textures, and headings in photoshop for them. This was mainly done through the Beaver Builder visual editor which is a pain in its own. However using my mastery of CSS3 and PHP as well as child themeing was able to create this beautiful website mostly of my own power. Content is now being maintained by the non-profit and Edit LLC team I was under when I started this project.',
                languages: ['HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','Flexbox','Beaver Builder Plugin', 'Photoshop','PHP']
            },
            {
                id: '04',
                project_name: 'Shift 3 Technologies',
                pic: '/img/projects/shift3-technologies.jpg',
                thumb:'/img/projects/shift3-technologies-thumb.jpg',
                website_url: 'http://shift3tech.com/',
                desc: 'This was a very demanding project that I worked with the development team I am on with Edit LLC. My part had a lot to do with custom modals done in jQuery, and custom styling of those modals in HTML5 and CSS3. I also helped in other styling aspects of this Custom Wordpress theme as well as utilizing Flexbox to allow scaleability and mobile friendly versions of this website. This was a big project for one of Fresnos biggest tech companies in the valley.',
                languages: ['HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','Flexbox']
            },
            {
                id: '05',
                project_name: 'Little Leaf Tea',
                pic: '/img/projects/little-leaf-tea.jpg',
                thumb:'/img/projects/little-leaf-tea-thumbnail.jpg',
                website_url: 'http://www.littleleaftea.com',
                desc: 'This was a project that was done for a friend who owns one of Fresnos best local Tea spots in town. I find myself often coming here for some peace and quiet as well as to enjoy so delicious tea blends with friends. This was a custom wordpress theme made from scratch by yours truly which I utilized PHP, Bootstrap, SCSS, CSS3 and jQuery.',
                languages: ['PHP','HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','mySQL']
            },
            {
                id: '06',
                project_name: 'Red Wave Communications',
                pic: '/img/projects/redwave-big.jpg',
                thumb:'/img/projects/redwave-thumb.jpg',
                website_url: 'http://www.redwavecomm.com',
                desc: 'This is one of the main projects I did for the Bitwise Cohort where we got real developer training by doing work for real clients. This was my first real project working on a team of two. We created this Word Press Custom theme from the ground up based off a loose framework visual. We integrated a number of wp-plugins as well as backend PHP knowledge and loops to complete it.',
                languages: ['PHP','HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','mySQL']
            },
            {
                id: '07',
                project_name: 'Hitting Performance Labs',
                pic: '/img/projects/hitting-performance-lab-big.jpg',
                thumb: '/img/projects/hitting-performance-lab-thumb.jpg',
                website_url: 'http://www.hittingperformancelab.com',
                desc: 'This project was also done using Wordpress. Although I didn\'t do the theme myself, my part in the project was to do modifications, fixes, and upkeep. Some of the things I worked on were the back-to-top button, social media buttons up top (and mobile), fixes to the newletter submit button, advertisement section on the right, and mobile friendliness.',
                languages: ['HTML5','CSS3','SCSS','Custom Wordpress','jQuery']    
            },
            {
                id: '08',
                project_name: 'Etna Sample Site (Dev Challenge)',
                pic: '/img/projects/etan-developer-challenge.jpg',
                thumb: '/img/projects/etan-developer-challenge-thumb.jpg',
                website_url: 'http://zenkitties.github.io/etna-sample-project/',
                desc: 'This was a developers challenge I did for a company out of SLO. They gave me a PSD file that they wanted converted into an HTML5 project using the skills I had at hand. They gave me 4 days to complete the project for both desktop and mobile friendly versions of the site.',
                languages: ['HTML5','CSS3','SCSS','Bootstrap','jQuery','AngularJS']    
            },
            {
                id: '09',
                project_name: 'Windermere Gardens (Dev Challenge)',
                pic: '/img/projects/windermere-gardens-large.jpg',
                thumb:'/img/projects/windermere-gardens-thumb.jpg',
                website_url: 'http://zenkitties.github.io/windermere-gardens/',
                desc: 'Another recent developers challenge put on by Edit LLC for me to do. I had 4 days to output this bad boy (mobile friendly version as well). I had to take Windermere Gardens home page which was done in WP and re-create it using my frontend web developing skills in bootstrap.',
                languages: ['HTML5','CSS3','SCSS','Bootstrap','jQuery','AngularJS']    
            }
        ]
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
            age: 29,
            current_residence: 'Fresno, CA',
            birthday: 'February 12th, 1987',
            position: 'Freelance Web Developer',
            img: '/img/about-me.jpg',
            github_img: 'zen-kitties-v3/img/about-me.jpg',
            skills: 
                [
                    'Javascript',
                    'jQuery',
                    'Anuglar JS',
                    'Meteor JS',
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
    
    app.controller('ContactFormController',['$scope', function($scope){
        $scope.emailAddress = 'zenfootphilosopher@gmail.com';
            
        $scope.submit = " ";
        
        $scope.clearForm = function(){
            $scope.firstName= "",
            $scope.lastName= "",
            $scope.from= "",
            $scope.subject= "",
            $scope.comments= ""
            
            $scope.form = form.$pristine;
        };

    }]);
    
        app.directive('zenForm', function(){
            return {
                templateUrl: 'app/views/contact-form.html',
                controller: 'ContactFormController'
            }
    });
    
})(window.angular);
