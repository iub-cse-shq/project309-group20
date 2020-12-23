

function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}


function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}
var addquestion = document.querySelectorAll('#next_btn')
var questionShow = document.querySelector('.container span')



for (let i = 0 ; i <addquestion.length; i++ ){
  addquestion[i].addEventListener('click', () =>{

    countQuestion()
  })
}
function countQuestion(){
 
 
  let precount = localStorage.getItem('questionCount');
  precount = parseInt(precount);
  if(precount){
   
    localStorage.setItem('questionCount', precount + 1);
    questionShow.textContent = precount + 1 ; 
    alert("You are going to enter question number: " + (precount + 1)) 
    }
                                                                                                                                                             
  
  else{
    localStorage.setItem('questionCount', 2);
    questionShow.textContent = precount = 2;
  }
}



function display(){
  let precount = localStorage.getItem('questionCount')
  if(precount){

       questionShow.textContent = precount;
  }
}
display();
$('#done_btn').click(function(){
      location.href = "showexams.html"
      let precount = localStorage.getItem('questionCount')
      localStorage.setItem('questionCount', 1);
        questionShow.textContent =  1 ; 
  })