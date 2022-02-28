let windowHeight = window.innerHeight;
let introHeight = document.getElementById("introCont").clientHeight;
let listHeight = document.getElementById("listCont").clientHeight;
let projectDepth = (listHeight+introHeight)+ windowHeight*1.35+11;
let prGaps = []
let pContainer = document.getElementsByClassName("projectContainer")[0];
let projectLst = document.getElementsByClassName("pc");
let prLst = document.getElementsByClassName("psection")

// getting the active project showing divs
let activeDiv1 = document.getElementsByClassName("activeDiv1");
let activeDiv2 = document.getElementsByClassName("activeDiv2");
let activeDiv3 = document.getElementsByClassName("activeDiv3");
let activeDiv4 = document.getElementsByClassName("activeDiv4");
let activeDivLst = [activeDiv1, activeDiv2, activeDiv3, activeDiv4]

    ;
function pFontSize() {
    // this sets the font size of project text 
    let pTxtContainer = document.querySelector(".projectWritten");
    let pTxtWidth = pTxtContainer.clientWidth;
    let pTxtHeight = pTxtContainer.clientHeight;
    let fontSize = (29 * pTxtWidth / pTxtHeight) - 0.3;

    let pTxtlst = document.querySelectorAll(".projectTxt");
    pTxtlst.forEach(setFontSize)
    function setFontSize(item) {
        item.style.fontSize = `${fontSize}em`;
    }
}

// this will initialised on display project button click
function displayProject() {
    pContainer.style.display = "block"
    pFontSize()//this sets the fonts size of project text

    // this scrolls all the projects, in hidden area, so that it can be scrolled both upwards and downwards
    for (i = 0; i < projectLst.length; i++) {
        project = projectLst[i]
        repostition(project)
    }

    document.getElementById("pc1").scrollIntoView(top);
}


// this hides the projects
function hideProjects() {
    pContainer.style.display = "none"
}


// this scrolls the given project in the middle so that it can be scrolled in both directions
function repostition(ele) {
    ele.scrollTo(0, 2)
}


let lastScrollStatus = null
// this scrolls to the next prjoect when scrolled on a particular project

function showDiffPro(ele, eleId) {

    lastScrollStatus = scrollStatus(ele, lastScrollStatus);
    if (lastScrollStatus == "scrolledUp") { showPrePro(ele, eleId) }
    else if (lastScrollStatus == "scrolledDown") { showNextPro(ele, eleId) }
    else { addAnimation("pc1", "pc4") }




}

// This checks the direction of scroll
function scrollStatus(ele, lastScrollStatus) {
    let newGap = ele.scrollTop;
    if (newGap < 2) { return "scrolledUp" }
    else if (newGap > 2) { return "scrolledDown" }
    else { return lastScrollStatus }
}

// this shows the previous project
function showPrePro(ele, eleId) {
    // if the project scrolled is the first
    if (eleId == "pc1") {
        nextEle = "pc4";
        window.scrollTo(0, projectDepth + windowHeight * 3);

    }
    else {
        nextEle = "pc" + (eleId.slice(-1) * 1 - 1)
        window.scrollTo(0, projectDepth + windowHeight * ((eleId.slice(-1)) - 2))
    }

    repostition(ele)

    addAnimation(nextEle, eleId)
}






// This shows the next project
function showNextPro(ele, eleId) {
    // if the project is the last one 
    if (eleId == "pc4") {
        nextEle = "pc1";
        window.scrollTo(0, projectDepth);

    }
    else {
        nextEle = "pc" + (eleId.slice(-1) * 1 + 1)
        window.scrollTo(0, projectDepth + windowHeight * (eleId.slice(-1)))
    }
    // this repositions the previous project that was scrolled so that it can be scrlled in both ways
    repostition(ele)

    addAnimation(nextEle, eleId)
}




// this trigger the function to show next project when scrolled on them
document.getElementById("pc1").onscroll = function () { showDiffPro(this, this.id) };
document.getElementById("pc2").onscroll = function () { showDiffPro(this, this.id) };
document.getElementById("pc3").onscroll = function () { showDiffPro(this, this.id) };
document.getElementById("pc4").onscroll = function () { showDiffPro(this, this.id) };



// this adds the animation to current view page
function addAnimation(currentId, previousId = "") {
    currentId = currentId.slice(-1);
    previousId = previousId.slice(-1);

    // adding animatino to current project's active div sign
    let t1 = activeDivLst[previousId - 1][previousId - 1];
    let t2 = activeDivLst[currentId - 1][currentId - 1];

    t1.classList.remove("activeProject")//removing from previous
    t2.classList.add("activeProject")//adding to new


    // normal translate animations
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