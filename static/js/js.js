function insert(num){
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

function clean(){
    document.getElementById('result').innerHTML = ''
}

function back(){
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero.substring(0, numero.length -1)
}

function calculate(){
    let numero = document.getElementById('result').innerHTML
    if(numero){
        document.getElementById('result').innerHTML = eval(numero)
    }
}