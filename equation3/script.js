F_input = document.getElementById("F");
Fy_input = document.getElementById("Fy")
Angle_input = document.getElementById("angle");

dome = document.getElementById('dome');
function CRVF(){
    if(F_input.value != "" & Angle_input.value != ""){
        F = F_input.value;
        Angle = Angle_input.value;

        Fy = (F * Math.sin(Angle * Math.PI / 180)).toFixed(1);
        dome.innerHTML = ` ${Fy} N `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

function CRF(){
    if(Fy_input.value != "" & Angle_input.value != ""){
        Fy = Fy_input.value;
        Angle = Angle_input.value;

        F = (Fy / Math.sin(Angle * Math.PI / 180)).toFixed(1);
        dome.innerHTML = ` ${F} N `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

function CAngle(){
    if(Fy_input.value != "" & F_input.value != ""){
        Fy = Fy_input.value;
        F = F_input.value;

        Angle = (Math.asin(Fy / F)*57.3).toFixed(2);
        dome.innerHTML = ` ${Angle} `
    }else{
        dome.innerHTML = 'ERROR.'
        console.log("Error")
    }
}

