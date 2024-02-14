Vi_input = document.getElementById("Vi");
angle_input = document.getElementById("angle")

dome = document.getElementById("dome")

function CIHV(){
    if(Vi_input.value != "" & angle_input.value != ""){
        Vi = Vi_input.value;
        θ = angle_input.value;

        Vix = (Vi * Math.cos(θ * Math.PI / 180)).toFixed(2)

        dome.innerHTML = ` ${Vix} m/s `;
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}