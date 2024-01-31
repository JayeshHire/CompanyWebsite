const embedded_system_table = document.getElementsByClassName("es");
const es_toggle_button = document.getElementById("es-collapse");






//toggling the table contents related to that class
function toggle_func(class_name){ //, button_id
    var table_element = document.querySelectorAll(class_name);
    // const button_element = document.getElementById(button_id);
    let flag = 0;
    var element = document.getElementById("theader");
    for (let i = 0; i< table_element.length ; i++){
        flag = 0;
        for (let j = 0; j< table_element[i].classList.length; j++){
            if (table_element[i].classList[j] === "show"){
                flag = 1;
                break;
            } 
        }
        if (flag === 1){
            table_element[i].classList.remove("show");
            
            element.classList.remove("show");
        } else if (flag === 0) {
            table_element[i].classList.add("show");
            element.classList.add("show");
        }
    }
}

//hiding the content inside the elements of some class
function toggle_hide(class_name) {
    var table_element = document.querySelectorAll(class_name);
    var element = document.getElementById("theader");
    for (let i =0 ; i < table_element.length; i++){

        for (let j = 0; j< table_element[i].classList.length ; j++){

            if (table_element[i].classList[j] === "show"){
                table_element[i].classList.remove("show");
                element.classList.remove("show");
                break;
            }
        }
    }
}

function es_toggle(){
    toggle_hide(".ee");
    toggle_hide(".vl");
    toggle_hide(".sd");
    toggle_hide(".ds");
    toggle_hide(".cs");
    toggle_func(".es");
    window.location.replace("#es1");
}

function ee_toggle(){
    toggle_hide(".vl");
    toggle_hide(".sd");
    toggle_hide(".ds");
    toggle_hide(".cs");
    toggle_hide(".es");
    toggle_func(".ee");
    window.location.replace("#ee1");
}

function vl_toggle(){
    toggle_hide(".sd");
    toggle_hide(".ds");
    toggle_hide(".cs");
    toggle_hide(".es");
    toggle_hide(".ee");
    toggle_func(".vl");
    window.location.replace("#vl1");
}

function sd_toggle(){
    toggle_hide(".ds");
    toggle_hide(".cs");
    toggle_hide(".es");
    toggle_hide(".ee");
    toggle_hide(".vl");
    toggle_func(".sd");
    window.location.replace("#sd1");
}

function ds_toggle(){
    toggle_hide(".cs");
    toggle_hide(".es");
    toggle_hide(".ee");
    toggle_hide(".vl");
    toggle_hide(".sd");
    toggle_func(".ds");
    window.location.replace("#ds1");
}

function cs_toggle(){
    toggle_hide(".es");
    toggle_hide(".ee");
    toggle_hide(".vl");
    toggle_hide(".sd");
    toggle_hide(".ds");
    toggle_func(".cs");
    window.location.replace("#cs1");
}