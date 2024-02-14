Vi_input = document.getElementById('Vi');
Vf_input = document.getElementById('Vf');
t_input = document.getElementById('t');

dome = document.getElementById("dome");

function CA(){
    if (Vi_input.value != "" & Vf_input.value != "" & t_input.value != ""){
        Vi = Vi_input.value;
        Vf = Vf_input.value;
        t = t_input.value;

        ΔV = Vf - Vi;
        a = (ΔV / t).toFixed(2);
        dome.innerHTML = ` ${a} m/s^2`
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}