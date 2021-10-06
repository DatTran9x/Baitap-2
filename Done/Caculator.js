function function1(id){
    let Sodau = +document.getElementById("Sodau").value;
    let Sohai = +document.getElementById("Sohai").value;
    if (id === "+") {
        let Result = Sodau + Sohai;
        document.getElementById("Result").innerHTML = ("Result Addition= "+Result);
    }
    if (id === "-"){
    let Result = Sodau - Sohai;
    document.getElementById("Result").innerHTML = ("Result Subtraction= "+Result);
}
    if (id === "*"){
    let Result = Sodau * Sohai;
    document.getElementById("Result").innerHTML = ("Result Multiplication= "+Result);
}
    if (id === "/"){
    let Result = Sodau / Sohai;
    document.getElementById("Result").innerHTML = ("Result Division= "+Result);
}}