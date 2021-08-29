let usrName = prompt("Piliz Enter Your Beautiful First Name For Personalised Feel");
if(usrName == null || usrName == ""){
  usrName = "there";
} else {
  usrName = usrName.charAt(0).toUpperCase() + usrName.slice(1);
}

// ======== Info ========
let formattedAbout = `Hi ${usrName}, I'm <strong>Kashyap Kumar</strong>, a self-taught <strong>frontend web developer</strong>, also a student in the field of <strong>Computer Science</strong>. I'm from 127.0.0.1, Assam, India, Earth.<br/><br/>
I can create a personal website for you with mind blowing user interface to showcase your skills.<br/>
                You can send me an email if you want one.<br/><br/>
                My passion is <strong>coding</strong> and <strong>content creation</strong>. Also love to play football. Hacking is the another skill I like a little bit. Currently, I have 12K+ audience in total on social media.<br/>`;
let individualInfo = {
  about: formattedAbout,
  description: "A Tech Enthusiast Alien Learning MERN Stack.",
  education: {
    // level of education: institute name
    "Primary Education": "DBLPS",
    "High School Education": "PBKHSS",
    "HS Education": "PAJC",
    "UG Education": "PKC"
  },
  projects: ["Student Management System", "Bookmark Application", "Personal Website"],
  skills: ["Programming", "Designing", "Patience"],
};



// ======== Assign the info ========
const description = document.querySelector(".description");
description.innerHTML = individualInfo.description;

const about = document.getElementById("about");
const education = document.getElementById("education");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");

about.innerHTML = individualInfo.about;
Object.entries(individualInfo.education).forEach((e)=>{
  education.innerHTML += `<h4 class="education-category"><i class="fa fa-graduation-cap" aria-hidden="true"></i> ${e[0]}</h4>
                <p>${e[1]}</p>`;
});
individualInfo.projects.forEach((e)=>{
  projects.innerHTML += `<div class="project">${e}</div>`;
});
individualInfo.skills.forEach((e)=>{
  const skillColorSet = [[]]; /* [background color, border color] , no. of skill*/
  const randomHue = Math.floor(Math.random()*361) // random number between 0 and 360(both included)
  skills.innerHTML += `<span class="skill" style="background-color: hsl(${randomHue}, 100%, 80%); border: 1px solid hsl(${randomHue}, 94%, 28%); color: hsl(${randomHue}, 94%, 28%);">${e}</span>`;
});


// ======== Tabs ========
let tabLinks = document.getElementsByClassName("tabLink");
let tabContent = document.getElementsByClassName("tabContent");

Array.from(tabLinks).forEach((e)=>{
  e.addEventListener("click", changeTab);
});

function changeTab(event){
  for(let i=0; i<tabLinks.length; i++){
    tabLinks[i].classList.remove("active");
    tabContent[i].style.display = "none";
  }
  event.target.classList.toggle("active");
  console.log();
  tabContent[
    Array.from(event.target.parentElement.children).indexOf(event.target)
  ].style.display = "block";
  
  // for transition
  let content = document.getElementsByClassName("content")[0];
  content.style.minHeight =
  tabContent[
      Array.from(event.target.parentElement.children).indexOf(event.target)
    ].scrollHeight + "px";
}



// ======== ripple click effect, for better feeling ========
document.body.addEventListener("click", (e) => {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  ripple.style.animation = `ripple-effect .4s  linear`;
  ripple.onanimationend = () => {
    document.body.removeChild(ripple);
  };
})

onload = function hideLoader(){
  document.querySelector(".loader").style.display = "none";
}