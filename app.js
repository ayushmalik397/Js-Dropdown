const arr = ["Apple","Mango","Orange","Grapes","Banana"]

const btnEle = document.getElementById("btn")
const ulEle = document.getElementById("ul")

arr.forEach((ele, idx) => {
    let li = document.createElement('li')
    li.id = idx;
    li.innerHTML = ele;
    ulEle.appendChild(li)
})

window.addEventListener('click', function(e){
    if(e.target.id !== "btn" && e.target.id !== "ul" && !(arr[e.target.id])){
        ulEle.classList.add('display')
    }
})

btnEle.addEventListener('click', function(){
    ulEle.classList.toggle('display')
})

ulEle.addEventListener('click', function(e){
    if(arr[e.target.id])
        btnEle.innerHTML = arr[e.target.id]
    ulEle.classList.add('display')
})