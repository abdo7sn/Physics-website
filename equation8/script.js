Vi_input = document.getElementById('Vi');
Vf_input = document.getElementById('Vf');
a_input = document.getElementById('a');
t_input = document.getElementById('t');

dome = document.getElementById("dome");

function CFKE(){
    if (Vi_input.value != "" & a_input.value != "" & t_input.value != ""){
        Vi = Vi_input.value;
        a = a_input.value;
        t = t_input.value;

        Vf = +Vi + +a * t;
        dome.innerHTML = ` ${Vf} m/s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function CVi(){
    if (Vf_input.value != "" & a_input.value != "" & t_input.value != ""){
        Vf = Vf_input.value;
        a = a_input.value;
        t = t_input.value;

        Vi = +Vf - +a * t;
        dome.innerHTML = ` ${Vi} m/s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function Ct(){
   if(Vi_input.value != "" & a_input.value != "" & Vf_input.value != ""){
        Vi = Vi_input.value;
        Vf = Vf_input.value;
        a = a_input.value;
        
        ΔV = Vf - Vi;
        t = (ΔV / a).toFixed(2);
        dome.innerHTML = ` ${t} s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}