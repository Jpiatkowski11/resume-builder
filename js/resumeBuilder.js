/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Jennifer")
//var awesomeThoughts = "I am Jenn and I am Awesome!";
//var funThoughts = awesomeThoughts.replace ("Awesome", "Fun");
//$("#main").append(funThoughts)

//var formattedName = HTMLheaderName.replace("%data%", "Jennifer Piatkowski");
//var formattedRole = HTMLheaderRole.replace("%data%", "Graphic Designer");

//$("#header").append(formattedName);
//$("#header").append(formattedRole);

//var skills = ["UX", "UI"]



//$("#header").append(bio);
//$("#header").prepend(bio.bioPic);

var work = {
	"jobs" : [{
		"title" : "Creative Designer II",
		"employer" : "USAA Federal Savings Bank",
		"dates" : 1,
		"location" : "San Antonio, Texas"
		},

		{
		"title" : "Web Designer",
		"employer" : "Giles Parscale",
		"dates" : 1,
		"location" : "San Antonio, Texas"
		},

		{
		"title" : "Senior Designer",
		"employer" : "WILDDESIGN Shanghai",
		"dates" : 2,
		"location" : "Shanghai, China"
		},
	]
};

var projects = {
	"projects" : [{
		"title" : "USAA Auto App",
		"employer" : "USAA Federal Savings Bank",
		"dates" : 1,
		"desription" : "San Antonio",
		"images" : ""
		},

		{
		"position" : "Creative Designer II",
		"employer" : "USAA Federal Savings Bank",
		"dates" : 1,
		"desription" : "San Antonio",
		"images" : ""
		},
	]
};
var bio = {
	"name" : "Jenn Piatkowski",
	"role" : "Designer",
	"contacts" : 
		{	"phone" : "210-952-6366",
			"email" : "jennifer@creative-curls.com",
			"github" : "@jpiatkowski11",
			"twitter" : "@Creative_Curls",
			"location" : "San Antonio"
	},
	"welcomeMessage" : "Life is too short to play it safe; be bold, try something new, and give it everything you got. We all have the power to become better. 七転八起.",
	"skills" : ["UX", "UI", "Graphic Design", "Design Thinking", "Illustration"],
	"bioPic" : "" 
};

var education = {
	"schools": [{
			"name": "University of the Incarnate Word",
			"dates": 4,
			"degree": "Communication Arts",
			"majors" : ["Comminucation Arts"]
			"graduationYear": 2013,
			"url" : "",
			"location": "San Antonio"
		},
		{
			"name": "San Antonio College",
			"dates": 2,
			"degree": "Transfer",
			"majors" : ["Comminucation Arts"],
			"graduationYear": 2009,
			"url" : "",
			"location": "San Antonio"
		}],
	"onlineCourse": [{
			"school": "Udacity",
			"dates": .6,
			"title": "Front End Developer",
			"url" : "",
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", "bio.name");
var formattedRole = HTMLheaderRole.replace("%data%", "bio.role");

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill =  HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	formattedSkill =  HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	formattedSkill =  HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	formattedSkill =  HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
	formattedSkill =  HTMLskills.replace("%data%", bio.skills[4]);
	$("#header").append(formattedSkill);

};

for(jobs in work) {
	$("#main").append(work[jobs]);

	}
}


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedSkill);

