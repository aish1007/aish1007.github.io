(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var list0 = ["one", "something", "something", "something"];
var list1 = ["one", "something", "something", "something"];
var list2 = ["one", "something", "something", "something"];
var list3 = ["one", "something", "something", "something"];
$(document).ready(function () {
  console.log("Came here");
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
    console.log("came here");
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

},{}]},{},[1]);
