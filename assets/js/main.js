// var mNumber = document.getElementById("matricNumber").value;
// alert(mNumber);
//bu19cit1031

function myFunction() {
    // var mNumber = document.getElementById("matricNumber").value;
    // alert(mNumber);
    let text = document.getElementById("matricNumber").value;
    let result1 = text.includes("CIT", 4);
    let result2 = text.includes("CYB", 4);
    let result3 = text.includes("SEN", 4);
    let result4 = text.includes("CSC", 4);
    // let result5 = text.includes("CBS", 4);
    let result6 = text.includes("ICT", 4);
    if(result1 || result2 || result3 || result4 || result6 == true){
    window.open("ballot.html","_blank");
    return false;
    }else{
        alert("You are not a computing student");
    }
  }