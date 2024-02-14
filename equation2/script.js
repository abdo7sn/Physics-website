rv1_input = document.getElementById('Rv1');
error1_input = document.getElementById('Error1');

rv2_input = document.getElementById('Rv2');
error2_input = document.getElementById('Error2');

Rv_dome = document.getElementById('Rv');
AE_dome = document.getElementById("A_E");
dome = document.getElementById('dome');
function CAED(){
    if (rv1_input.value != "" & error1_input.value != "" & rv2_input.value != "" & error2_input.value != ""){
        Rv1 = rv1_input.value;
        A_Error1 = error1_input.value;

        Rv2 = rv2_input.value;
        A_Error2 = error2_input.value;

        r1 = (A_Error1 / Rv1).toFixed(2);
        r2 = (A_Error2 / Rv2).toFixed(2);
        r = (+r1 + +r2).toFixed(2);
        Rv = (Rv1 / Rv2).toFixed(1);
        A_E = (Rv * r).toFixed(2);

        Rv_dome.innerHTML = Rv;
        AE_dome.innerHTML = A_E;
        console.log("r1: "+r1,"r2: "+r2, "r: "+r, "Rv: "+Rv, "A_E: "+A_E);
    }else{
        dome.innerHTML = 'ERROR...'
        console.log("Error")
    }
}

