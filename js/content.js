import { LeftPaneSkills } from "../store/store.js";
import { RightPaneSkill } from "../store/store.js";
import { GitHubRepo } from "../store/store.js";
import { Services } from "../store/store.js";

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

        var projectLinksAndName =''
        if(x.projectName.length > 1) {
            for(var i=0;i<x.projectName.length;i++){                
                    projectLinksAndName = `<a href=${x.projectUrl[i]} target=_blank>${x.projectName[i]}</a><br>` + projectLinksAndName
            }            
        }else{
            projectLinksAndName = `<a href=${x.projectUrl} target=_blank>${x.projectName}</a><br>`
        }

        githubContent.innerHTML += `<div class=text-left><i class="mb-4 fa fa-3x fa-quote-left text-primary"></i><p class="mb-4 fs-4">${projectLinksAndName}</p><div class="align-items-center d-flex"><img class=img-fluid src=img/${x.img} style=width:60px;height:60px><div class=ps-3><p class="text-primary fs-5 mb-1">${x.techName}</p><i>${x.githubProfileName}</i></div></div></div>`
    }

    $(githubContent).owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });


    var servicesBlock = document.querySelector('.services_section')

    for(let x of Services){
        servicesBlock.innerHTML += `<div class=col-md-6><div class=service-item><i class="${x.isFaIconSupport == true ? 'fa' : x.iconModule} fa-2x ${x.icon} mb-4 mx-auto"></i><h5 class=mb-2>${x.serviceText}</h5></div></div>`

        
    }
});

