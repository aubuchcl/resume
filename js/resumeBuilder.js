$('document').ready(function(){
	$("#mapDiv").append(googleMap);
	projects.display();
	bio.display();
	work.display();
	education.display();
	$('img').addClass("img-responsive");
});

var formattedName, formattedRole, bio, work, education, projects;

formattedName = HTMLheaderName.replace("%data%", "Christopher Aubuchon");
formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

bio = {
	"name":						"Christopher Aubuchon",
	"role":						"Front End Engineer",
	"contacts":		{
		"mobile":				"618-497-4167",
		"email":				"aubuchcl@gmail.com",
		"github":				"http://www.github.com/aubuchcl",
		"twitter":      "https://twitter.com/ChrisAubuchon",
		"location":			"Lake Tahoe, CA"
	},
	"welcomeMessage":	"Dont click the links",
	"skills":			["Javascript", "HTML", "CSS"],
	"biopic":		"http://goo.gl/IjmdBp",
	"display": function display(){
		if(bio.skills.length > 0){
			var formattedSkill, formattedPic;
			$("#header").append(HTMLskillsStart);

			formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#skills-h3").append(formattedPic);

			formattedSkill = HTMLskills.replace("%data%",
				bio.skills[0]);
			$("#skills-h3").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%",
				bio.skills[1]);
			$("#skills-h3").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%",
				bio.skills[2]);
			$("#skills-h3").append(formattedSkill);
		}
	}
};

education = {
	"schools": [
	{
		"name": 			"Saint Louis University",
		"location": 	"Saint Louis",
		"major": 			"Entrepreneurship",
		"dates": 			"2008",
		"url":				"http://www.edu.org"
	},{
		"name": 			"Udacity",
		"location": 	"Online",
		"major": 			"Front End NanoDegree",
		"dates": 			"2016",
		"url":				"http://www.udacity.com"
	}],
	"onlineCourses":	[
	{
		"title":				"Intro to HTML and CSS",
		"school":				"Udacity",
		"dates":					"December 2015",
		"url":					"https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617"
	},
	{
		"title":				"Responsive Web Design Fundamentals",
		"school":				"Udacity",
		"dates":					"December 2015",
		"url":					"https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3523969367"
	},
	{
		"title":				"Responsive Images",
		"school":				"Udacity",
		"dates":					"December 2015",
		"url":					"https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851/m-3573228854"
	},
	{
		"title":				"Javascript Basics",
		"school":				"Udacity",
		"dates":					"January 2016",
		"url":					"https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/e-3471338563/m-2288608556"
	},
	{
		"title":				"Intro to jQuery",
		"school":				"Udacity",
		"dates":					"January 2016",
		"url":					"https://www.udacity.com/course/viewer#!/c-ud245-nd/l-5237351332/m-5058008537"
	}],
	"display":				function display(){
		var formattedSchoolName;
		var formattedSchoolLocation;
		var formattedSchoolMajor;
		var formattedSchoolDates;
		var formattedSchoolUrl;
	  var i;


		for(i in education.schools){
			$('#education').append(HTMLschoolStart);

			formattedSchoolName = HTMLschoolName.replace(
				'%data%', education.schools[i].name);

			formattedSchoolDegree = HTMLschoolDegree.replace(
				'%data%', education.schools[i].major);

			formattedSchoolDates = HTMLschoolDates.replace(
				'%data%', education.schools[i].dates);

			formattedSchoolLocation = HTMLschoolLocation.replace(
				'%data%', education.schools[i].location);

			$('.education-entry:last').append(formattedSchoolName);
			$('.education-entry:last').append(formattedSchoolDegree);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
		}


		$("#education").append(HTMLonlineClasses);

		for(i in education.onlineCourses){

			var formattedOnlineTitle,
					formattedOnlineDates,
					formattedOnlineSchool,
					formattedOnlineUrl,
					onlineSelector;

			onlineSelector = $('h3').last();
			formattedOnlineTitle = HTMLonlineTitle.replace(
				'%data%', education.onlineCourses[i].title);
			$(onlineSelector).append(formattedOnlineTitle);

			formattedOnlineSchool = HTMLonlineSchool.replace(
				'%data%', education.onlineCourses[i].school);
			$(onlineSelector).append(formattedOnlineSchool);

			formattedOnlineDates = HTMLonlineDates.replace(
				'%data%', education.onlineCourses[i].dates);
			$(onlineSelector).append(formattedOnlineDates);

			formattedOnlineUrl = HTMLonlineURL.replace(
				'%data%', education.onlineCourses[i].url);
			$(onlineSelector).append(formattedOnlineUrl);
		}
	}
};

var displayContactInfo = function displayContactInfo(){
	var contact;
  for(contact in bio.contacts){
		var formattedBioContact;
		console.log(bio.contacts[contact]);
		console.log(contact);
		formattedBioContact = HTMLcontactGeneric.replace(
			"%contact%", contact).replace("%data%", bio.contacts[contact]);
		$('#topContacts').append(formattedBioContact);
		$('#footerContacts').append(formattedBioContact);
	}
	}


work = {
	"jobs": [
	{
		"employer": 		"Myself",
		"title": 				"property manager",
		"location": 		"Kings Beach, CA",
		"dates":				"2015-present",
		"description": 	"I am responsible for all listings " +
		", reservations, and maintenance of the property as " +
		"well as guest communication and satisfaction.  " +
		"My primary goal is to create an environment that makes "+
		"guests feel at home and away from home at the same time, " +
		"as well as creating lifelong customers!"
	},{
		"employer": 		"Northstar",
		"title":				"Ski Instructor",
		"location": 		"Kings Beach, CA",
		"dates": 				"2010-2014",
		"description": 	"I spent five seasons teaching students to " +
		"love skiing.  I worked with just about anyone you can imagine.  "+
		"From first time 2 year olds to first time 80 year olds, I created "+
		"lesson plans that would allow for a safe, fun, and exciting experience "+
		"all while managing time, difficulty level, and overwhelming parent " +
		"expectations."
	}],
	"display":		function display(){
		var job;
    for(job in work.jobs){

			//set vars to aviod improper hoisting
			var formattedEmployer;
			var formattedTitle;
			var formattedDates;
			var formattedLocation;
			var formattedDescription;

			//set header or title bar
			$("#workExperience").append(HTMLworkStart);

			//set formatting of each property
			formattedEmployer = HTMLworkEmployer.replace("%data%",
				work.jobs[job].employer);

			formattedTitle = HTMLworkTitle.replace("%data%",
				work.jobs[job].title);

			formattedDates = HTMLworkDates.replace("%data%",
				work.jobs[job].dates);

			formattedLocation = HTMLworkLocation.replace("%data%",
				work.jobs[job].location);

			formattedDescription = HTMLworkDescription.replace("%data%",
				work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployer);
			$(".work-entry:last").append(formattedTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

projects = {
	"project": [
	{
		"title":				"MetaGame",
		"url":					"metagame.herokuapp.com",
		"dates":				"summer 2014",
		"description":	"A project that I built with friends.  "+
		"MetaGame was a Rails site that let users build competitions "+
		"and find other gamers based on the games that they were interested " +
		"in.  They found these games through our implementation of the giant bomb api.",
		"images":				["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJtfLXbsn1TT2JWO5eZXJfPzn6Py2aldQnNy94TP4p6KNmtz"]
	},
	{
		"title":				"NanoDegree",
		"url":					"http://www.udacity.com",
		"dates":				"2016",
		"description":	"Front End NanoDegree, or a certification "+
		"that helped me to build a portfolio of projects.  These projects " +
		"allow me to showcase the my skills as a front end developer.  The " +
		"main focus of the projects is to display responsive design and efficient " +
		"and practical javascript",
		"images":				["http://www.i-programmer.info/images/stories/News/2015/Sept/B/udnano.jpg"]
	}],
	"display":		function display(){
		var formattedProjectTitle;
		var formattedProjectDates;
		var formattedProjectDescription;
		var formattedProjectImages;
		var i;
		for(i in projects.project){
			$("#projects").append(HTMLprojectStart);

			formattedProjectTitle = HTMLprojectTitle.replace(
				"%url%", projects.project[i].url).replace(
				"%data%", projects.project[i].title);

			formattedProjectDates = HTMLprojectDates.replace(
				"%data%", projects.project[i].dates);

			formattedProjectDescription = HTMLprojectDescription
			.replace("%data%", projects.project[i].description);

			//if you add more images make this an internal loop to find array position
			formattedProjectImages = HTMLprojectImage.replace(
				"%data%", projects.project[i].images[0]);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImages);
		}
	}
};

var displayEducation = function displayEducation(){
	var formattedSchoolName;
	var formattedSchoolLocation;
	var formattedSchoolMajor;
	var formattedSchoolDates;
	var formattedSchoolUrl;
  var i;

	for(i in education.schools){
		$('#education').append(HTMLschoolStart);

		formattedSchoolName = HTMLschoolName.replace(
			'%data%', education.schools[i].name);

		formattedSchoolDegree = HTMLschoolDegree.replace(
			'%data%', education.schools[i].major);

		formattedSchoolDates = HTMLschoolDates.replace(
			'%data%', education.schools[i].dates);

		formattedSchoolLocation = HTMLschoolLocation.replace(
			'%data%', education.schools[i].location);

		$('.education-entry:last').append(formattedSchoolName);
		$('.education-entry:last').append(formattedSchoolDegree);
		$('.education-entry:last').append(formattedSchoolDates);
		$('.education-entry:last').append(formattedSchoolLocation);
	}

};

var displayContactInfo = function displayContactInfo(){
	var contact;
  for(contact in bio.contacts){
		var formattedBioContact;
		console.log(bio.contacts[contact]);
		console.log(contact);
		formattedBioContact = HTMLcontactGeneric.replace(
			"%contact%", contact).replace("%data%", bio.contacts[contact]);
		$('#topContacts').append(formattedBioContact);
		$('#footerContacts').append(formattedBioContact);
	}
};


