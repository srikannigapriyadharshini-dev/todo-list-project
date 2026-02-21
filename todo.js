var ol=document.getElementById("tasklist")
var input=document.getElementById("input")
function add(){
    var task = document.createElement("li")
    task.innerHTML=input.value + "<button id='change' onclick='completetask(event)'>Completed</button> " + "<button id='colorchange' onclick='pendingtask(event)'>Pending</button>" + "<button onclick='deletetask(event)'>Delete</button>"
    ol.append(task)
}
function completetask(event){
    let button = event.target;
    button.classList.toggle("completed-btn");
    var li =event.target.parentElement
    li.classList.add("completed")
    li.classList.remove("pending")
    updateCount()

}
function pendingtask(event){
    let button =event.target;
    button.classList.toggle("pending-btn");
    var li =event.target.parentElement
    li.classList.add("pending")
    li.classList.remove("completed")
    updateCount()
}
function deletetask(event){
    event.target.parentElement.remove()
    updateCount()
}
function updateCount(){
    var total = document.querySelectorAll("#tasklist li").length
    var completed = document.querySelectorAll(".completed").length
    var pending = total - completed
    

    document.getElementById("pendingCount").textContent = 
        "Pending count: " + pending

    document.getElementById("completedCount").textContent = 
        "Completed count: " + completed
}
