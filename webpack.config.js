const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  getMyInfo,
  getTechnicalSkills,
  getExperience,
  getEducation,
  getProject,
  getOnlineCourses,
  getAcademicourses,
  getAchievements,
  getHackathons
} = require("./content-service/contentTypes.js");
const { on } = require("process");
const doAsync = async () => {
  var basicDetails = await getMyInfo();
  var techSkills = await getTechnicalSkills();
  var experience = await getExperience();
  var education = await getEducation();
  var project = await getProject();
  var onlineCourses = await getOnlineCourses();
  var academicCourses = await getAcademicourses();
  var achievements = await getAchievements();
  var hackathons = await getHackathons();

  //technical skills
  let skillsNames = techSkills.map(({ fields }) => fields.name);
  let skills = techSkills.map(({ fields }) => fields.list);
  let skillIcons = techSkills.map(({ fields }) => fields.icon);
  var skill1 = skills[0].split(",");
  var skill2 = skills[1].split(",");
  var skill3 = skills[2].split(",");
  var skill4 = skills[3].split(",");

  //work experience
  let position = experience.map(({ fields }) => fields.position);
  let duration = experience.map(({ fields }) => fields.duration);
  let company = experience.map(({ fields }) => fields.company);
  let description = experience.map(({ fields }) => fields.description);

  description = description.toString().replace(/(\r\n|\n|\r)/gm, " ");
  const regex = /theend,<span/gi;
  console.log(description)
  let desc = description.replace(regex, "theend <span");
  console.log(desc)
  let workExpIcon = experience.map(({ fields }) => fields.icon);

  //education
  let degree = education.map(({ fields }) => fields.degree);
  let place = education.map(({ fields }) => fields.place);
  let year = education.map(({ fields }) => fields.year);
  let course = education.map(({ fields }) => fields.course);
  course = course.toString().replace(/(\r\n|\n|\r)/gm, " ");
  const regex3 = /theend,/gi;
  let courseDesc = course.replace(regex3, "theend ");

  let educationIcons = education.map(({ fields }) => fields.icon);

  //project
  let projectName = project.map(({ fields }) => fields.name);
  let projectTechStack = project.map(({ fields }) => fields.techStack);
  let projectUrl = project.map(({ fields }) => fields.url);
  projectUrl = projectUrl.map(function (item) {
    return item == undefined ? "" : item;
  });
  let projectIcons = project.map(({ fields }) => fields.icon);
  const regex2 = /theend,/gi;
  projectStack = projectTechStack.toString().replace(regex2, "theend");

  let projectDesc = project.map(({ fields }) => fields.description);

  let projectDuration = project.map(({ fields }) => fields.duration);
  projectDesc = projectDesc.toString().replace(/(\r\n|\n|\r)/gm, " ");

  let projDesc = projectDesc.replace(regex, "theend <span");


  //onlineCourses
  let onlineCourseNames = onlineCourses.map(({ fields }) => fields.courseName);

  //academicCourses
  let academicCourseNames = academicCourses.map(
    ({ fields }) => fields.courseName
  );
  academicCourseNames = academicCourseNames.toString().replace(regex2,"theend")

  //achievements
  let accomplishments = achievements.map(({ fields }) => fields.achievements);
 accomplishments = accomplishments.toString().replace(regex2, "theend");
 

 //hackathons
 let hackathonName = hackathons.map(({ fields }) => fields.name);
 let hackathonVenue = hackathons.map(({ fields }) => fields.duration);
 let hackathonDesc = hackathons.map(({ fields }) => fields.desc);
 hackathonDesc = hackathonDesc.toString().replace(regex, "theend <span");


  let indexPlugin = new HtmlWebpackPlugin({
    template: "index.html",
    title: "HTML Webpack Plugin",
    basicInfo: basicDetails,
    skillNames: skillsNames,
    skill1: skill1,
    skill2: skill2,
    skill3: skill3,
    skill4: skill4,
    icon: skillIcons,
    position: position,
    duration: duration,
    company: company,
    desc: desc,
    degree: degree,
    place: place,
    year: year,
    workExpIcon: workExpIcon,
    course: courseDesc,
    educationIcons: educationIcons,
    projectName: projectName,
    projectDescription: projDesc,
    projectDuration: projectDuration,
    projectTechStack: projectStack,
    projectIcons: projectIcons,
    projectUrl: projectUrl,
  });
  let index1Plugin = new HtmlWebpackPlugin({
    filename: "index1.html",
    template: "./public/web_projects/index.html",
    title: "HTML Webpack Plugin",
    basicInfo: basicDetails,
    courseNames: academicCourseNames,
  });
  let index2Plugin = new HtmlWebpackPlugin({
    filename: "index2.html",
    template: "./public/web_projects/index2.html",
    title: "HTML Webpack Plugin",
    basicInfo: basicDetails,
    courseNames: onlineCourseNames,
  });
  let index3Plugin = new HtmlWebpackPlugin({
    filename: "index3.html",
    template: "./public/web_projects/index3.html",
    title: "HTML Webpack Plugin",
    basicInfo: basicDetails,
    accomplishments: accomplishments,
  });
  let index4Plugin = new HtmlWebpackPlugin({
    filename: "index4.html",
    template: "./public/web_projects/index4.html",
    title: "HTML Webpack Plugin",
    basicInfo: basicDetails,
    name : hackathonName,
    duration : hackathonVenue,
    desc : hackathonDesc
  });
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname + "/dist"),
    },
    target: "node",
    plugins: [
      indexPlugin,
      index1Plugin,
      index2Plugin,
      index3Plugin,
      index4Plugin,
    ],
  };
};

module.exports = doAsync;
