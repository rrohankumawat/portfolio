import { LeftPaneSkills } from "../store/store.js";
import { RightPaneSkill } from "../store/store.js";
document.addEventListener('DOMContentLoaded', function() {
    var row = document.querySelector('.skills_leftrow')

for(let x of LeftPaneSkills){
    row.innerHTML +=`<div class="skill mb-4"> <div class="d-flex justify-content-between"> <p class="mb-2">${x.skillName}</p> <p class="mb-2">${x.skillVal}%</p> </div> <div class="progress"> <div class="progress-bar bg-${x.color}" role="progressbar" aria-valuenow="${x.skillVal}" aria-valuemin="0" aria-valuemax="100"></div> </div> </div>`
}

var rightRow = document.querySelector('.skills_rightrow');

for(let i of RightPaneSkill){
    rightRow.innerHTML += `<div class="skill mb-4"> <div class="d-flex justify-content-between"> <p class="mb-2">${i.skillName}</p> <p class="mb-2">${i.skillVal}%</p> </div> <div class="progress"> <div class="progress-bar bg-${i.color}" role="progressbar" aria-valuenow="${i.skillVal}" aria-valuemin="0" aria-valuemax="100"></div> </div> </div>`
}

$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});
});

