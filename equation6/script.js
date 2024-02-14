A_input = document.getElementById("A");
B_input = document.getElementById("B");
angle_input = document.getElementById("angle");
AB_input1 = document.getElementById('SM')
AB_input2 = document.getElementById('DM')

dome = document.getElementById("dome");
function CVDM(){
    if(A_input.value != "" & B_input.value != "" & angle_input.value != ""){
        A = A_input.value;
        B = B_input.value;
        Angle = angle_input.value;

        AB = (A * B * Math.sin(Angle * Math.PI / 180)).toFixed(2);
        dome.innerHTML = ` ${AB} unit `;
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}
function CAngle(){
    if(AB_input1.value != "" & AB_input2.value != ""){
        AB1 = AB_input1.value;
        AB2 = AB_input2.value;

        angle = (Math.atan(AB2 / AB1)*57.3).toFixed(2)
        dome.innerHTML = ` ${angle} `
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}