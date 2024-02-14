Vi_input = document.getElementById("Vi");
t_input = document.getElementById("t");
a_input = document.getElementById("a");
d_input = document.getElementById("d");

dome = document.getElementById("dome");

function CSKE(){
    if(Vi_input.value != "" & t_input.value != "" & a_input != ""){
        Vi = Vi_input.value;
        t = t_input.value;
        a = a_input.value;

        d = Vi * t + 0.5*a * t**2;

        dome.innerHTML = ` ${d} m`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function Ca(){
    if(Vi_input.value != "" & t_input.value != "" & d_input != ""){
        Vi = Vi_input.value;
        t = t_input.value;
        d = d_input.value;

        Vit = Vi * t;
        dVit = d - Vit;

        a = dVit / t**2 * 2;

        dome.innerHTML = ` ${a}  m/s^2`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function CVi(){
    if(a_input.value != "" & t_input.value != "" & d_input != ""){
        a = a_input.value;
        t = t_input.value;
        d = d_input.value;

        at = 0.5*a * t**2;
        dat = d - at;

        Vi = dat / t;

        dome.innerHTML = ` ${Vi}  m/s`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function Ct(){
    if(a_input.value != "" & Vi_input.value != "" & d_input != ""){
        a = a_input.value;
        Vi = Vi_input.value;
        d = d_input.value;   

        let root1, root2;

        let discriminant = Vi * Vi - 4 * 0.5*a * -d;

        if (discriminant > 0) {
            t = (-Vi + Math.sqrt(discriminant)) / (2 * 0.5*a);
            
            dome.innerHTML = ` ${t}  s`
        }
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}
