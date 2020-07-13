var client = require("./contentful-client").client;

var myInfo = {};
var techSkills = {};
var experience = {};
var project = {};
var onlineCourses = {};
var academicCourses = {};
var achievements = {};
var hackathons = {};
async function getMyInfo() {
  return client
    .getEntry("APL0VrANHz9JxfvbL0Bsb")
    .then((response) => (myInfo = response.fields))
    .catch((e) => console.log(e));
}

async function getTechnicalSkills() {
  return client
    .getEntries({
      content_type: "technicalSkills",
    })
    .then((resp) => (techSkills = resp.items))
    .catch(console.error);
}

async function getExperience() {
  return client
    .getEntries({
      content_type: "experience",
    })
    .then((resp) => (experience = resp.items))
    .catch(console.error);
}

async function getEducation() {
  return client
    .getEntries({
      content_type: "education",
    })
    .then((resp) => (experience = resp.items))
    .catch(console.error);
}

async function getProject() {
  return client
    .getEntries({
      content_type: "project",
    })
    .then((resp) => (project = resp.items))
    .catch(console.error);
}

async function getOnlineCourses() {
  return client
    .getEntries({
      content_type: "onlineCourses",
    })
    .then((resp) => (onlineCourses = resp.items))
    .catch(console.error);
}

async function getAcademicourses() {
  return client
    .getEntries({
      content_type: "academicCourses",
    })
    .then((resp) => (academicCourses = resp.items))
    .catch(console.error);
}

async function getAchievements() {
  return client
    .getEntries({
      content_type: "achievements",
    })
    .then((resp) => (achievements = resp.items))
    .catch(console.error);
}

async function getHackathons(){
  return client
    .getEntries({
      content_type: "hackathons",
    })
    .then((resp) => (hackathons = resp.items))
    .catch(console.error);
}
module.exports = {
  getMyInfo: getMyInfo,
  getTechnicalSkills: getTechnicalSkills,
  getExperience: getExperience,
  getEducation: getEducation,
  getProject: getProject,
  getAcademicourses: getAcademicourses,
  getOnlineCourses: getOnlineCourses,
  getAchievements: getAchievements,
  getHackathons:getHackathons
};
