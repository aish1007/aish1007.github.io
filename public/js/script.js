var list0 = ["one", "something", "something", "something"];
var list1 = ["one", "something", "something", "something"];
var list2 = ["one", "something", "something", "something"];
var list3 = ["one", "something", "something", "something"];

$(document).ready(function () {
  console.log(htmlWebpackPlugin.options.favWord);
  $(".fa-chevron-up").click(function () {
    $("body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
  getMyInfo().then((resp) => {
    var personalInfo = resp.fields;
    document.getElementById("name").innerHTML = personalInfo.name;
    document.getElementById("title").innerHTML = personalInfo.title;
    //document.getElementById("company").innerHTML = personalInfo.company;
    var github = document.getElementById("github");
    github.setAttribute("href", personalInfo.github);
    var linkedIn = document.getElementById("github");
    linkedIn.setAttribute("href", personalInfo.linkedInLink);
    // document.getElementById("summary").innerHTML = personalInfo.aboutMe;
  });

  getTechnicalSkills().then((resp) => {
    console.log(resp);
  });
});

// inspired by
// https://dribbble.com/shots/920939-Portfolio-Redesign-2013-early-stage?list=searches&tag=portfolio&offset=22
