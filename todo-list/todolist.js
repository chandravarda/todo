

let todoele = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")
let addEle=document.querySelector('#add')

addEle.addEventListener('click',()=>{
    if(todoele.value.length==0){
        alert("Enter a task details")
    } else{
        tasklist.insertAdjacentHTML("afterbegin", 
    `<div class="task"> 
        <span id="work">${todoele.value}</span>
        <button class="del"><i class="fas fa-trash"></i></button>
    </div> ` )
        
        let alltasks = document.querySelectorAll('.del')
        for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick = function(){
                    console.log(this)
                    console.log(this.parentNode)
                this.parentNode.remove()
            }
        }
        todoele.value=""
    }
})
