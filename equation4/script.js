F_input = document.getElementById("F");
Fx_input = document.getElementById("Fx")
Angle_input = document.getElementById("angle");

dome = document.getElementById('dome');
function CRHF(){
    if(F_input.value != "" & Angle_input.value != ""){
        F = F_input.value;
        Angle = Angle_input.value;

        Fx = (F * Math.cos(Angle * Math.PI / 180)).toFixed(1);
        dome.innerHTML = ` ${Fx} N `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

function CRF(){
    if(Fx_input.value != "" & Angle_input.value != ""){
        Fx = Fx_input.value;
        Angle = Angle_input.value;

        F = (Fx / Math.cos(Angle * Math.PI / 180)).toFixed(1);
        dome.innerHTML = ` ${F} N `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

function CAngle(){
    if(Fx_input.value != "" & F_input.value != ""){
        Fx = Fx_input.value;
        F = F_input.value;

        Angle = (Math.acos(Fx / F)*57.3).toFixed(2);
        dome.innerHTML = ` ${Angle} `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

