import { LeftPaneSkills } from "../store/store.js";
import { RightPaneSkill } from "../store/store.js";
import { GitHubRepo } from "../store/store.js";
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


    var githubContent = document.querySelector('.github_carousel')

    for(let x of GitHubRepo){
        console.log(x)
        x.innerHTML += `<div class=text-left><i class="mb-4 fa fa-3x fa-quote-left text-primary"></i><p class="mb-4 fs-4"><a href=https://github.com/rohanpin1/CoffeeApp_Desktop target=_blank>CoffeeBarista Desktop Application</a><br><a href=https://github.com/rohanpin1/CafeApp_api target=_blank>CoffeeBarista API Project</a><div class="align-items-center d-flex"><img class=img-fluid src=img/microsoft.png style=width:60px;height:60px><div class=ps-3><p class="text-primary fs-5 mb-1">.NET Winforms</p><i>rohanpin1</i></div></div></div>`
    }
});

