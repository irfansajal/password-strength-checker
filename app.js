let pass = document.getElementById('password')
let msg = document.getElementById('msg')
let str = document.getElementById('strength')


pass.addEventListener('input',() => {
    if(pass.value.length > 0){
     msg.style.display = 'block'
    }
    else{
        msg.style.display ='none'
    }
    if(pass.value.length < 4){
        str.innerHTML = 'week'
        pass.style.borderColor = 'yellow'
        msg.style.color = 'white'
    }
  else  if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = 'medium'
        pass.style.borderColor = 'red'
        msg.style.color = 'yellow'
    }
    else if(pass.value.length >= 8){
        str.innerHTML = 'Strong'
        pass.style.borderColor = 'blue'
        msg.style.color = 'green'
    }
})
