//var awesomeThoughts = "I am witwiki and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

var name = "Vikram Udyawer";
var role = "Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["Javascript", "HTML/CSS", "JQuery"];

$("#header").prepend(formattedRole);	// want a name to appear first
$("#header").prepend(formattedName);	// thats why we use .prepend()
//$("#main").append(skills.length);

//	Creating biography object
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
		"control systems",
		 "electric propulsion", 
		 "Javascript", 
		 "Java", 
		 "C/C++", 
		 "Python", 
		 "MATLAB/Simulink"
		],
	"bioPic" : "images/18a69d6.jpg"
};

//	Creating work experience object
var currentJob = {};
currentJob.position = "Space Systems Engineer";
currentJob.employer = "German Aerospace Center (DLR)";
currentJob.years = 1;
currentJob.city = "Bremen";

//	Creating education object
var educated = {};
	educated["name"] = "University of Sydney";
	educated["degree"] = "B.Eng. (Aerospace)/ B.Com. (Finance)";
	educated["years"] = "2008 - 2013";
	educated["city"] = "Sydney";

//	Creating education object using JSON {http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/}
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

$("#main").append(bio.name);
$("#main").append(currentJob["position"]);
$("#main").append(educated.name);

