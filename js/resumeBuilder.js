//	Creating BIOGRAPHY object without JSON
var bio = {
	"name" : "Vikram Udyawer",
	"role" : "Aerospace Engineer",
	"ContactInformation" : {
		"mobile" : "+642040186515",
		"email" : "vickudyawer@hotmail.com",
		"github" : "witwiki",
		"twitter" : "@vikudyawer",
		"linkedin" : "de.linkedin.com/in/vikudyawer/en",
		"location" : "Auckland"
	},
	"welcomeMessage" : "Welcome to Vikram's Resume Page!",
	"skills" : [
		"linear optimal/pid control systems",
		"systems engineering process",
		"system-of-systems engineering process",
		"concurrent engineering process",
		"systems architecture process",
		 "electric propulsion", 
		 "solidworks",
		 "Javascript", 
		 "Java", 
		 "C/C++", 
		 "Python", 
		 "MATLAB/Simulink",
		 "Leadership",
		 "teamwork"
		],
	"bioPic" : "images/18a69d6.jpg"
};


//	Creating EDUCATION object using JSON {http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/}
var educaJSON = {
	"schools" : [
		{
			"name" : "University of Sydney",
			"city" : "Sydney, Australia",
			"degree" : "BE/BCom",
			"major" : ["Aerospace", "Finance"],
			"years" : "2008-2013",
			"url" : "http://sydney.edu.au/courses/bachelor-of-engineering-honours-aeronautical-space"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804",
			"githubRepo" : "https://github.com/witwiki/frontend-nanodegree-resume"
		},
		{
			"title" : "EECS149.1x Cyber Physical Systems",
			"school" : "edX",
			"dates" : 2014,
			"url" : "https://courses.edx.org/courses/BerkeleyX/EECS149.1x/2T2014/info",
			"certAuthentication" : "https://verify.edx.org/cert/6e088c77441c45e88953fd86e2c26b03",
			"githubRepo" : "https://github.com/witwiki/CyberPhysicalSystemsAlgorithms"

		},
		{
			"title" : "AUTONAVx Autonomous Navigation for Flying Robots",
			"school" : "edX",
			"dates" : 2014,
			"url" : "https://courses.edx.org/courses/TUMx/AUTONAVx/2T2014/info",
			"certAuthentication" : "https://verify.edx.org/cert/5dcce2bd987b4ec68ee31b6600608a3a",
			"githubRepo" : "https://github.com/witwiki/AutonomousNavigationAlgorithms"
		}
	]
}


//	Creating WORK object using JSON
var workJSON = {
	"jobs" : [
		{
			"employer" : "Space Generation Advisory Council in support of the United Nations Programme on Space Applications",
			"position" : "National Point of Contact (New Zealand)",
			"location" : "Auckland, New Zealand",
			"dates"    : "November 2012 - Present (2 years 4 months)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "German Aerospace Center (DLR)",
			"position" : "Space Systems Engineer",
			"location" : "Bremen, Germany",
			"dates"    : "Mar 2014 - Feb 2015 (1 year)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "International House Roundtable",
			"position" : "Cofounder/Space & Technology Chair",
			"location" : "Sydney, Australia",
			"dates"    : "January 2012 - December 2013 (2 year)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "Saber Astronautics LLC",
			"position" : "Aerospace Systems Engineer",
			"location" : "Sydney, Australia",
			"dates"    : "April 2012 - July 2013 (1 year 4 months)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "Rotary International House",
			"position" : "Assistant Director/Student Leadership Team",
			"location" : "Sydney, Australia",
			"dates"    : "June 2010 - March 2013 (2 years 10 months)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "MS Dental Ltd.",
			"position" : "Technical Solutions Architect",
			"location" : "Palmerston North, New Zealand",
			"dates"    : "February 2006 - January 2013 (7 years)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "Saber Astronautics LLC",
			"position" : "Junior Software Developer (Intern)",
			"location" : "Sydney, Australia",
			"dates"    : "January 2012 - March 2012 (3 months)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "Pratt & Whitney Canada",
			"position" : "Aeronautics Systems Engineer",
			"location" : "Brisbane, Australia",
			"dates"    : "November 2010 - January 2011 (3 months)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		},
		{
			"employer" : "The University of Otago",
			"position" : "Research Assistant",
			"location" : "Dundedin, New Zealand",
			"dates"    : "January 2007 - December 2007 (1 year)",
			"keyRepon" : " ",
			"empLogo"  : " placeholder for images "
		}
	]
}


//	Creating a PROJECTS object with JSON
var projectsJSON = {
	"projects" : [
		{
			"title"       : "Autonomous Navigation for AR Parrot Drone",
			"dates"       : "May 2014 - Jul 2014",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "Autonomous Navigation for iRobot Create",
			"dates"       : "May 2014 - Jul 2014",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "Cubesat Development Project (MineSAT)",
			"dates"       : "June 2011 - January 2012",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "Sunswift eVe (World Solar Challenge)",
			"dates"       : "June 2012 - December 2012",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "Our Turbulent Sun: Emerging tools for disaster management in the Global South",
			"dates"       : "January 2014 - February 2014",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "Advanced Engineering Challenge",
			"dates"       : "March 2008 - June 2008",
			"description" : " ",
			"imagesURL"   : " "
		},
		{
			"title"       : "GNC for Mars Lander (Powerhouse Museum, Sydney)",
			"dates"       : "March 2013 - June 2013",
			"description" : " ",
			"imagesURL"   : " "
		}
	]
}

//	Main Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);	// thats why we use .prepend()
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);	// want a name to appear first
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);	

var formattedMobile = HTMLmobile.replace("%data%", bio.ContactInformation.mobile);
$("#header").append(formattedMobile);	
var formattedEmail = HTMLemail.replace("%data%", bio.ContactInformation.email);
$("#header").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.ContactInformation.twitter);
$("#header").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.ContactInformation.github);
$("#header").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.ContactInformation.linkedin);
$("#header").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.ContactInformation.location);
$("#header").append(formattedLocation);




HTMLWelcomeMsg

if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);

	var formattedSkill;

	for (var i = 0; i < bio.skills.length; i++) {

		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);	
	};
}



//	Work Experience
function displayWork(){

	for (job in workJSON.jobs) {
		
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", workJSON.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", workJSON.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + "       " + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedworkedLocation = HTMLworkLocation.replace("%data%", workJSON.jobs[job].location);
		$(".work-entry:last").append(formattedworkedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", workJSON.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", workJSON.jobs[job].keyRepon);
		$(".work-entry:last").append(formattedDescription);

		//var formattedEmpLogo = HTMLworkEmpLogo.replace("%data%", workJSON.jobs[job].empLogo);
		// $(".work-entry:last").append(formattedEmpLogo);	
		
	};
}

displayWork();

//	Collection Click Locations for Analytics
//	Using Anonymous function loc
$(document).click(function(loc){

	var x = loc.pageX;	// x location of click
	var y = loc.pageY;	// y location of click

	logClicks(x, y);
});

/*	Internationalizing the Resume 
	-	Function to capitalize the surname and 
	the first letter of the first name.
	-	Simple string manipulation.
	-	Then appends to the main div
*/
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

//	Use of Encapsulation to display projectsJSON onto the webpage
projects.display = function(){
	for(project in projectsJSON.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projectsJSON.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projectsJSON.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projectsJSON.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projectsJSON.projects[project].imagesURL.length > 0) {
			for(image in projectsJSON.projects[project].imagesURL){
				var formattedImage = HTMLprojectImage.replace("%data%", projectsJSON.projects[project].imagesURL[image]);
				$(".project-entry:last").append(formattedImage);
			}
		};
	}
}

//	Appends the Google Map implemented in helper.js
$("#mapDiv").append(googleMap);
