// new fullpage(".projectContainer",{
//     autoScrolling : true,
//     navigation: true,

//     afterLoad: function(origin, destination){

//         let idCurrent = destination["item"].id;
//         let idPrevious = origin["item"].id;

//         addAnimation(idCurrent, idPrevious)
		
// 	}
// })
// let trailEle = document.getElementsByClassName("projectContainer");
// trailEle.onscroll = function(){
//     console.log("scrolled");
// }
function inform(ele){
    projectNo = ele.slice(-1)*1 +1
    nextEle = `project${projectNo}` 
    // console.log("this is project no. : ",projectNo);

    console.log(nextEle, "will be the next element");
    // location.href = `#${nextEle}`
}

document.getElementById("project1").onwheel =function() {inform(this.id)} ;
document.getElementById("project2").onwheel =function() {inform(this.id)} ;
document.getElementById("project3").onwheel =function() {inform(this.id)} ;
document.getElementById("project4").onwheel =function() {inform(this.id)} ;

// e.onwheel = function() {inform()};

function addAnimation(currentId, previousId){
    currentId = currentId.slice(-1);
    previousId = previousId.slice(-1);

    // getting Element of preceding page
    let projectSlider = document.getElementById(`projectSlider${previousId}`);
    let projectRank = document.getElementById(`projectRank${previousId}`);
    let projectHeading = document.getElementById(`projectHeading${previousId}`);
    let projectWritten = document.getElementById(`projectTxt${previousId}`);
    let prjoectButton = document.getElementsByClassName(`buttons${previousId}`)
    
    projectSlider.style.animation = ""
    projectRank.style.animation = ""
    projectHeading.style.animation = ""
    projectWritten.style.animation = ""
    prjoectButton[0].style.animation = ""
    prjoectButton[1].style.animation = ""
    
    
    
    
    // getting elements of exceding page
    projectSlider = document.getElementById(`projectSlider${currentId}`);
    projectRank = document.getElementById(`projectRank${currentId}`);
    projectHeading = document.getElementById(`projectHeading${currentId}`);
    projectWritten = document.getElementById(`projectTxt${currentId}`);
    prjoectButton = document.getElementsByClassName(`buttons${currentId}`)
    

    projectSlider.style.animation = "slideOnImg 0.6s linear"
    projectRank.style.animation = "projectRank 1s ease-out"
    projectHeading.style.animation = "projectHeading 1s ease-out"
    projectWritten.style.animation = "projectWritten 1s ease-out"
    prjoectButton[0].style.animation = "projectButtons 1s linear"
    prjoectButton[1].style.animation = "projectButtons 1s linear"
}


let pTxtContainer = document.querySelector(".projectWritten");
let pTxtWidth = pTxtContainer.clientWidth ;
let pTxtHeight = pTxtContainer.clientHeight;
let fontSize = 29*pTxtWidth/pTxtHeight;
let pTxtlst = document.querySelectorAll(".projectTxt");
pTxtlst.forEach(setFontSize)
function setFontSize(item){
    item.style.fontSize = `${fontSize-0.3}em` ;
}