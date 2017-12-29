//Title constructor function that creates a Title object

function load(){
  var textArea = document.getElementsByClassName("dropDownTextArea")
     for(var i=0; i<textArea.length; i++){
         textArea[i].style.display="none";     
    }
}



var count = 0;
function checkboxFunction(currentObj){

   var row = currentObj.parentNode.parentNode;
   if(currentObj.checked){
     count++;
     buttonChange();
     row.style.backgroundColor="yellow";
    }else {
      count--;
      buttonChange();
      row.style.backgroundColor="white";
    }
}
   


function buttonChange(){
  var btn = document.getElementById("button");
  if(count > 0){
    btn.style.backgroundColor="orange";
    btn.style.border="2px solid orange";
    btn.disabled=false;
  }else{
    btn.style.backgroundColor="gray";
    btn.style.border="2px solid gray";
    btn.disabled=true;
  }
}
 
  function showHide(obj) {
   var textArea = document.getElementsByClassName("dropDownTextArea");
   for (var i = 0; i < textArea.length; i++) {
     if (textArea[i].previousElementSibling.firstElementChild.children[3] == obj) {
       if (textArea[i].style.display == "table-row") {
         textArea[i].style.display = "none";
       } else {
         textArea[i].style.display = "table-row"
       }
     } else {
       textArea[i].style.display = "none";
     }
   }
 }

function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return this.mytitle;
}

var t = new Title("CONNECT WITH ME!");
document.getElementById("title").innerHTML = (t.getName()+"<br/>");


var socialMedias = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

function social(){
  var output ="<ul id='icons'>";
  for(var i in socialMedias){
    output += "<li> <a href='" + socialMedias[i] + "'>  <img src='images/" + i +".png' /></a></li>";
  }
  output += "</ul>";
  document.getElementById("icons").innerHTML = output;
}
social();























// function Social(image, value){
//   this.image = image;
//   this.value = value;
// }

// Social.prototype.getImage=function(){
//   return this.image;
// }
// Social.prototype.getValue=function(){
//   return this.value;
// }

// function SocialMedia(){
//   this.socialMedias=new Array();
// }

// SocialMedia.prototype.addSocialMedias=function(image, value){
//   this.socialMedia = new Social(image, value);
// }




  //  var t1 = document.getElementById("myTr1")
  //  var t2 = document.getElementById("myTr2")
  //  var t3 = document.getElementById("myTr3")
  //  var currentObj = document.getElementsByName("myCheckbox").parentElement.parentElement;
  //  var chkbox = document.getElementsByName("myCheckbox");

  //  for(var i = 0; i < chkbox.length; i++){
  //    currentObj[i].addEventListener("change", function(){
     
      //  if(chkbox[1].checked){
      //     t2.style.backgroundColor="yellow";
      //     btn.style.backgroundColor="orange";
      //     btn.style.border="2px solid orange";
      //     btn.disabled=false;
      //  }else {
      //     t2.style.backgroundColor="white"
      //     btn.style.backgroundColor="gray";
      //     btn.style.border="2px solid gray";
      //     btn.disabled=true;
      //  }

      //  if(chkbox[2].checked){
      //     t3.style.backgroundColor="yellow";
      //     btn.style.backgroundColor="orange";
      //     btn.style.border="2px solid orange";
      //     btn.disabled=false;
      //  }else{
      //     t3.style.backgroundColor="white";
      //     btn.style.backgroundColor="gray";
      //     btn.style.border="2px solid gray";
      //     btn.disabled=true;
      //   }
  //    });
  //  }


