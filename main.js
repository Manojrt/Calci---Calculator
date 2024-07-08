var display = document.getElementById('display')

function displayNum(num){
    display.value += num
}

function ClearValue(){
    display.value = "";
}

function deleteLeft(){
    display.value = display.value.slice(0,-1)
}

function Calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        alert("Please Enter The Valid Input to Evaluate")
    }
}