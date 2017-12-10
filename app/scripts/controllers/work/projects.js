'use strict';

/**
 * @ngdoc function
 * @name portfolioWebsiteDeveloperApp.controller:WorkProjectsCtrl
 * @description
 * # WorkProjectsCtrl
 * Controller of the portfolioWebsiteDeveloperApp
 */
angular.module('app')
  .controller('WorkProjectsCtrl', function($scope, Popeye) {

    this.projects = [
        {
            'name' : 'Galiboo, Inc.',/*
            'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
            */'short_desc' : [
                "An early-stage AI startup that I've just founded.",
                "Currently working on our 1st product: an AI-powered music service that gets you the right music for your moment, automagically.", 
                "Accepted into UC San Diego's official startup incubator, The Basement."],
            'tech' : ['Python', 'Artificial Intelligence', 'Google Cloud', 'Startup'],
            'link' : 'http://www.galiboo.com',
            'desc' : '',
            'css_class': 'text-white bg-primary mb-3 p-3',
            'badge_css' : 'badge-light',
            'view_proj_btn_css' : 'btn-dark text-white',
            'view_text' : 'Visit website',
            'has_view' : true,
            'has_learn' : true,
            'links' : [
                ['Visit website','http://galiboo.com','btn btn-primary'],
                ['See a demo of our technology','http://demo.galiboo.com','btn btn-secondary']
            ]
        },
    	{
    		'name' : 'Olympus',
    		//'img' : 'https://raw.githubusercontent.com/galiboo/olympus/master/Assets/olympus_logo.png',
    		'short_desc' : [
    			'A tool that creates a REST API for any A.I./machine learning model, automatically.',
    			'Trended on Reddit & 70+ stars on Github within a month of release.'],
    		'tech' : ['Python', 'REST API', 'Artificial Intelligence', 'Open Source'],
    		'link' : 'https://github.com/galiboo/olympus',
    		'desc' : '',
    		'css_class' : '',//bg-light mb-3',
    		'badge_css' : '',
    		'has_view' : true,
    		'has_learn' : true
    	},/*,
        {
            'name' : 'LEGO Robotics.',/*
            'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
            'short_desc' : [
                "An early-stage AI startup that I've just founded.",
                "Currently working on our 1st product: an AI-powered music service that gets you the right music for your moment, automagically.", 
                "Accepted into UC San Diego's official startup incubator, The Basement."],
            'tech' : ['Python', 'Artificial Intelligence', 'Google Cloud', 'Startup'],
            'link' : 'galiboo.com',
            'desc' : '',
            'css_class': 'text-white bg-primary mb-3 p-3',
            'badge_css' : 'badge-light',
            'view_proj_btn_css' : 'btn-dark text-white',
            'has_view' : true,
            'has_learn' : true
        },*/
    	
    	{
    		'name' : 'Intern @ Decitech Consulting, Inc.',/*
    		'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
    		*/'short_desc' : [
                "I worked on multiple projects as a software intern at Decitech, during my 10th grade summer.",
    			"I built a feature in the company's existing IT training platform (built on top of the popular Moodle LMS) to accept online payments from users",
    			"Their product was written in PHP, which I didn't know at the time. So, I quickly taught myself PHP over a few days and successfully completed the project.", 
    			"I also developed a cloud-based payslip system that the company uses to easily manage the generation & storage of payslips for their employees, internally. I built this with Python/Django and deployed it to Amazon Web Services.",
                "They loved my work, so they gave me a second internship opportunity to work as an IT trainer on their platform. I created a 6-month long online course on Web Development with PHP.",
                "I was able to make a positive impact on the life of my 1st trainee, who, after being unemployed for many months, landed a nice web development job in India within a month.",
    			],
    		'tech' : ['Python (Django)', 'AWS', 'PHP', 'Moodle', 'MySQL', 'Payment gateway'],
    		'desc' : [
    			"Integrated a payment gateway into the company's existing IT training platform (built on top of the popular Moodle LMS)",
    			"Their product was written in PHP, which I did not know at the time. However, I quickly taught myself PHP over a few days and successfully extended their existing training app to accept payments from users.", 
    			"They loved my work, so they gave me a second internship opportunity to work as an IT trainer on their platform. I created a 6-month long online course on Web Development with PHP.",
    			"I was very involved in coaching my 1st trainee, offering him frequent support, as I continued 11th grade HS.", 
    			"After completion, my 1st trainee, who was unemployed for many months prior, landed a nice job within a month.",
    			],
    		'css_class': 'bg-warning mb-3 p-3',
    		'badge_css' : 'badge-light',
    		'view_proj_btn_css' : 'btn-primary text-white',
    		'has_view' : false,
    		'has_learn' : true
    	},
        {
            'name' : 'Jarvis A.I.',/*
            'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
            */'short_desc' : [
                "I was inspired to create my own AI virtual assistant after watching Tony Stark rock the skies with his Jarvis A.I., in the Iron Man movies.",
                "Through this amusing project in 8th grade, I began to learn to code.",
                "My assistant can do many things, like accessing my computer remotely, creating reminders, setting alarms, managing shopping lists, & much more!",
                "After months of failure, iteration, & improvement, I had built a basic Android app on my phone, through which I can talk with my Jarvis A.I. using natural langauge commands.",
                "I wrote the backend server in Java, using tools like OpenNLP, Maluuba API, and Wit.AI for enabling my A.I. to understand natural language (without pattern matching).",
                "I also used Twilio to make my assistant accessible via phone call!"
                ],
            'tech' : ['C#', 'Java', 'Android', 'Machine Learning', 'Google Cloud', 'Twilio', 'Maluuba API', 'Wit.AI'],
            'desc' : '',
            'badge_css' : 'badge-info',
            'view_proj_btn_css' : 'btn-primary text-white',
            'pics_link' : 'https://photos.app.goo.gl/FCkpcuD0GfE22U2D3',
            'has_view' : false,
            'has_learn' : true
        },
        {
            'name' : 'Spellify',/*
            'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
            */'short_desc' : [
                "A web app that I made for my younger sister to help her study for her weekly spelling tests.",
                "Automatically parses my sister's spelling test study guide PDF and starts an interactive study session by speaking out each word, giving it's definition, and using it in an example sentence."
                ],
            'tech' : ['NodeJS', 'Heroku', 'Wordnik API', 'jQuery'],
            'link' : 'https://github.com/techscientist/spellify',
            'desc' : 'spellifygithublinkgoeshere.com',
            'css_class': '',//text-white bg-primary mb-3 p-3',
            'badge_css' : '',
            'has_view' : true,
            'has_learn' : true,
            'links' : [
                ['See live demo', 'https://spellifyapp.herokuapp.com/', 'btn btn-primary']
            ]
        },
    	{
    		'name' : 'CityBus',/*
    		'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
    		*/'short_desc' : [
                    "An Arduino-based bus tracker system sends its live location, in realtime, to our Google App Engine servers, which then streams this data to our Android app via Google Cloud Messaging.",
    				"As the arduino moves, the Android app shows the bus's updated location on a map, in realtime.",
                    "The app then notifies the user when the bus comes near him/her.",
                    "A few of my friends in India and I built this in 2 days.",
    		],
    		'tech' : ['Python', 'Realtime', 'Java', 'Android', 'Google Cloud', 'Push Messaging', 'Arduino'],
    		'desc' : '',
    		'learn_btn_css' : 'btn-primary',
    		'css_class': '',//text-white bg-primary mb-3 p-3',
    		'badge_css' : '',
    		'has_view' : false,
    		'has_learn' : true
    	},
    	{
    		'name' : 'ChatApp',/*
    		'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
    		*/'short_desc' : [
                "A voice chat app, that enables users to chat by speaking in their respective languages, which my app then automatically decodes, translates, & speaks (using text-to-speech) to the end-user in their language.",
    			"Built this hack in a few hours during Koding.com's 1st Global Hackathon, sponsored by companies like Google, Intuit, & Paypal.",
    			// "Basically, this is a voice chat app for the web, that automatically translates all of the messages to each end-user's language when showing/s it to them, regardless of the language in which the user sends them.",
    			// "AKA, a basic 'universally translating' chat app, hacked together in a few hours.",
    			"Selected in the 1st judging round, among the top few hundred projects."
    			],
    		'tech' : ['NodeJS', 'HTML/CSS', 'jQuery', 'Redis', 'PubNub API', 'Google Speech API', 'Realtime', 'Hackathon', 'Open Source', 'Yandex Translation API'],
    		'link' : 'https://github.com/techscientist/ChatsApp-Koding-Hackathon-Submission',
    		'desc' : '',
    		'css_class': 'bg-info text-white mb-3 p-3',
    		'badge_css' : 'badge-light',
    		'view_proj_btn_css' : 'btn-dark text-white',
    		'has_view' : true,
    		'has_learn' : true
    	},
    	{
    		'name' : 'DNA Analyzer',/*
    		'img' : 'http://www.galiboo.com/wp-content/uploads/2017/08/logo-small-transparent-black.png',
    		*/'short_desc' : [
    			"In my 9th grade AP Biology class, we conducted a lot of labs involving DNA analysis, such as counting the number of certain bases, longest similar subpattern between DNA samples, predicting evolutionary history, etc.  Hmmm... sounds like an idea for a program, right?",
    			"So, in a few hours one day, I built a Python script that can process any number of DNA samples simultaneously, and compute interesting statistics that we often needed for our labs, such as those mentioned above.",
    			"I shared this with my teacher, who really loved the program and how I went beyond the lab's requirements to do something extra!",
    			"But since I'm a sucker for aesthetic design, I didn't really prefer the command-line version of my initial script. So, I later packaged it into a small AngularJS desktop app, using ElectronJS."
    			],
    		'tech' : ['Python', 'AngularJS', 'GitHub\'s Electron'],
    		'desc' : '',
    		'badge_css' : 'badge-warning',
    		'view_proj_btn_css' : 'btn-primary text-white',
    		'has_view' : false,
    		'has_learn' : true
    	},
    ];

    this.openProjectDetail = function(proj_index) {

        if (proj_index + 1 > this.projects.length || proj_index < 0)
            return;

        var sc = $scope.$new(true);
        sc.proj = this.projects[proj_index];

        var modal = Popeye.openModal({
            templateUrl: "views/project_detail_modal.html",
            controller: "WorkProjectsCtrl as wpctrl",
            scope: sc,
            containerClass : 'modal-container'
        });

    };


  });
