var selSubj;
var SelChapter;
function getSubject() {
    var form = document.getElementById("mainform1");
    selSubj = form.elements["mainform1"].value;
    //window.alert(selSubj);
    var elm = document.getElementById("formArea");
    elm.style.opacity=0;
    elm.style.animation = "backw 0.5s";
    //setTimeout(displayChapter,500);

    displayChapter();
}

function displayChapter() {
    var elm = document.getElementById("formArea");

    var disp = "";
    disp += '<h4 id="selectChap" class="head4"><button class="backBtn ripple" onclick="displaySubject()"><</button>  Select Chapter</h4>'  +
        '<form id="mainform2" action="dashboard.html" >'+
        '<input type="radio" id="diff" name="mainform2" value="diff">' +
        '<label for="diff">Differentiation</label><br>' +
        '<input type="radio" id="integration" name="mainform2" value="integration">' +
        '<label for="integration">Integration</label><br>' +
        '<input type="radio" id="appNum" name="mainform2" value="appNum">' +
        '<label for="appNum" >Applied Numerics</label><br>' +
        '<button class="btn btn-primary continueBtn" >Continue</button></from>';
    elm.innerHTML = disp;
    elm.action = "dashboard.html";
    elm.style.opacity=1;
    //elm.style.animation="none";
}

function displaySubject() {
    var elm = document.getElementById("formArea");
    elm.style.animation = "forw 0.4s";
    var disp = "";
    disp += '<h4 id="selectSub" class="head4">Select Subject</h4>'+
        '<form id="mainform1" >' +
        '<input type="radio" id="ssc" name="mainform1" value="ssc" onclick="setTimeout(getSubject,300)">' +
        '<label for="ssc">Social Studies</label><br>' +
        '<input type="radio" id="science" name="mainform1" value="science" onclick="setTimeout(getSubject, 300)">' +
        '<label for="science">Science</label><br>' +
        '<input type="radio" id="maths" name="mainform1" value="maths" onclick="setTimeout(getSubject,300)">' +
        '<label for="maths" >Mathematics</label></from>';

    elm.innerHTML = disp;
    elm.elements["mainform1"].value = selSubj;
    selSubj = "";

}

function hideCont1() {
    current = document.getElementById("subchapterCont");
    if (current.style.display !== 'none') {
        current.style.display = 'none';
        document.getElementById("upBtn1").innerHTML = '<i class="fa fa-caret-square-o-down" style="font-size:24px"></i>';
    }
    else {
        current.style.display = 'block';
        document.getElementById("upBtn1").innerHTML = '<i class="fa fa-caret-square-o-up" style="font-size:24px"></i>';
    }
}

function hideCont2() {
    current = document.getElementById("subHeadingCont");

    if (current.style.display !== 'none') {
        current.style.display = 'none';
        document.getElementById("upBtn2").innerHTML = '<i class="fa fa-caret-square-o-down" style="font-size:24px"></i>';
    }
    else {
        current.style.display = 'block';
        document.getElementById("upBtn2").innerHTML = '<i class="fa fa-caret-square-o-up" style="font-size:24px"></i>';
    }
}

function hideCont3() {
    current = document.getElementById("subsubHeadingCont");
    if (current.style.display !== 'none') {
        current.style.display = 'none';
        document.getElementById("upBtn3").innerHTML = '<i class="fa fa-caret-square-o-down" style="font-size:24px"></i>';
    }
    else {
        current.style.display = 'block';
        document.getElementById("upBtn3").innerHTML = '<i class="fa fa-caret-square-o-up" style="font-size:24px"></i>';
    }
}