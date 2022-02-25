let prGaps = []
let pContainer = document.getElementsByClassName("projectContainer")[0];
let projectLst = document.getElementsByClassName("pc");
let prLst = document.getElementsByClassName("psection")


function pFontSize(){
    // this sets the font size of project text 
    let pTxtContainer = document.querySelector(".projectWritten");
    let pTxtWidth = pTxtContainer.clientWidth ;
    let pTxtHeight = pTxtContainer.clientHeight;
    let fontSize = (29*pTxtWidth/pTxtHeight)-0.3;

    let pTxtlst = document.querySelectorAll(".projectTxt");
    pTxtlst.forEach(setFontSize)
    function setFontSize(item){
        item.style.fontSize = `${fontSize}em` ;
    }
}













// this will initialised on display project button click
function displayProject(){
    pContainer.style.display = "block"
    pFontSize()//this sets the fonts size of project text

    // this scrolls all the projects, in hidden area, so that it can be scrolled both upwards and downwards
    for(i=0;i<projectLst.length; i++){
        project = projectLst[i]
        repostition(project)
    }

    document.getElementById("pc1").scrollIntoView(top);
}


// this hides the projects
function hideProjects(){
    pContainer.style.display = "none"
}


    // this scrolls the given project in the middle so that it can be scrolled in both directions
function repostition(ele) {
    ele.scrollTo(0,2)
}


let lastScrollStatus = null
// this scrolls to the next prjoect when scrolled on a particular project

function showDiffPro(ele, eleId){

    lastScrollStatus = scrollStatus(ele,lastScrollStatus);
    if(lastScrollStatus =="scrolledUp"){showPrePro(ele,eleId)}
    else if(lastScrollStatus == "scrolledDown"){showNextPro(ele,eleId)}
    else{addAnimation("pc1","pc4")}


    
    
}

// This checks the direction of scroll
function scrollStatus(ele,lastScrollStatus){
    let newGap = ele.scrollTop;
    if(newGap<2){return "scrolledUp"}
    else if(newGap>2){return "scrolledDown"}
    else {return lastScrollStatus}
}

// this shows the previous project
function showPrePro(ele, eleId){
    if(eleId=="pc1"){preEle2="pc4"}
    else{
        preEle1 = eleId.slice(-1)*1-1;
        preEle2= "pc"+preEle1
    }
    preEle3 = document.getElementById(preEle2);
    preEle3.scrollIntoView(top);
    
    // this repositions the previous project that was scrolled so that it can be scrlled in both ways
    repostition(ele)
    
    addAnimation(preEle2, eleId)
}

// This shows the next project
function showNextPro(ele, eleId){
    // console.log("scrolled down");
// condition, if the element is the last then move to the first element
if(eleId=="pc4"){nextEle2="pc1"}
else{
    nextEle1 = eleId.slice(-1)*1+1;
    nextEle2= "pc"+nextEle1
}
nextEle3 = document.getElementById(nextEle2);
nextEle3.scrollIntoView(top);

// this repositions the previous project that was scrolled so that it can be scrlled in both ways
repostition(ele)

addAnimation(nextEle2, eleId)
}



// this trigger the function to show next project when scrolled on them
document.getElementById("pc1").onscroll =function() {showDiffPro(this, this.id)} ;
document.getElementById("pc2").onscroll =function() {showDiffPro(this, this.id)} ;
document.getElementById("pc3").onscroll =function() {showDiffPro(this, this.id)} ;
document.getElementById("pc4").onscroll =function() {showDiffPro(this, this.id)} ;



// this adds the animation to current view page
function addAnimation(currentId, previousId=""){

    
    currentId = currentId.slice(-1);
    previousId = previousId.slice(-1);
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

