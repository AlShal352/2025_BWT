function verify() {
    console.log("A, H, R, M, K+C, K, C")
    let A = parseInt(elementA.value);
    let H = parseInt(elementH.value);
    let R = parseInt(elementR.value);
    let M = parseInt(elementM.value);

    let low, high
    let K = A**3
    let C = 3.14*(R**2)*H
    console.log(A, H, R, M, K+C,K,C)
    if (M>= K+C) 
        {result = "Можно заполнить обе сразу"}
    else if (M>= K && M >= C)
        {result = "Можно заполнить обе"}
    else if (M>=K)  
        {result = "Можно заполнить только первую"}
    else if (M>=C)  
        {result = "Можно заполнить только вторую"}
    else 
        {result = "Ничего нельзя заполнить"}
    document.getElementById("result").value = result;
}





let result;

const elementA = document.getElementById("A");
const elementH = document.getElementById("H");
const elementR = document.getElementById("R");
const elementM = document.getElementById("M");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);




