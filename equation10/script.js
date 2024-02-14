Vi_input = document.getElementById("Vi");
a_input = document.getElementById("a");
d_input = document.getElementById("d");
Vf_input = document.getElementById("Vf");

dome = document.getElementById("dome");

function CTKE(){
    if(Vi_input.value != "" & a_input.value != "" & d_input.value != ""){
        Vi = Vi_input.value;
        a = a_input.value;
        d = d_input.value;

        Vf2 = Vi**2 + 2 * a*d;
        Vf = Math.sqrt(Vf2).toFixed(2);
        
        dome.innerHTML = `${Vf} m/s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function CVi(){
    if(Vf_input.value != "" & a_input.value != "" & d_input.value != ""){
        Vf = Vf_input.value;
        a = a_input.value;
        d = d_input.value;

        Vi2 = Vf**2 - 2 * a*d;
        Vi = Math.sqrt(Vi2).toFixed(2);
        
        dome.innerHTML = `${Vi} m/s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function Ca(){
    if(Vf_input.value != "" & Vi_input.value != "" & d_input.value != ""){
        Vf = Vf_input.value;
        Vi = Vi_input.value;
        d = d_input.value;

        VfVi = Vf**2 - Vi**2;
        d2 = 2 * d

        a = (VfVi / d2).toFixed(2);
        
        dome.innerHTML = `${a} m/s^2`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function Cd(){
    if(Vf_input.value != "" & Vi_input.value != "" & a_input.value != ""){
        Vf = Vf_input.value;
        Vi = Vi_input.value;
        a = a_input.value;

        VfVi = Vf**2 - Vi**2;
        a2 = 2 * a
        
        d = (VfVi / a2).toFixed(2);
        
        dome.innerHTML = `${d} m`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}
