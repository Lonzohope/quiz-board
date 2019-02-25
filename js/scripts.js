$(document).ready(function() {
  $(".hope").submit(function(event) {
    var answer1 = $("input:radio[name=querry1]:checked").val();
    var answer2 = $("input:radio[name=querry2]:checked").val();
    var answer3 = $("input:radio[name=querry3]:checked").val();
    var answer4 = $("input:radio[name=querry4]:checked").val();
    var answer5 = $("input:radio[name=querry5]:checked").val();
    var answer6 = $("input:radio[name=querry6]:checked").val();
    var answer7 =$("input:radio[name=querry7]:checked").val();
    var answer8 =$("input:radio[name=querry8]:checked").val();
    var answer9 =$("input:radio[name=querry9]:checked").val();
    var answer10 =$("input:radio[name=querry10]:checked").val();

var value1=parseInt(answer1);
var value2=parseInt(answer2);
var value3=parseInt(answer3);
var value4=parseInt(answer4);
var value5=parseInt(answer5);
var value6=parseInt(answer6);
var value7=parseInt(answer7);
var value8=parseInt(answer8);
var value9=parseInt(answer9);
var value10=parseInt(answer10);

var give=(value1+value2+value3+value4+value5+value6+value7+value8+value9+value10)/50*100;
document.getElementById("results").innerHTML="Total percentage="+ give + "%";

if(give>50){
  alert("Excelent")

  if((give<=50)){
    alert("Fair")
  }
else{
  alert("Poor. Retake Test")
}
}
event.preventDefault();
  });
});
