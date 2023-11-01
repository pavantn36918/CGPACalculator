function calculate() {


    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);

    let a = [];
    let b = [s1, s2, s3, s4];
    let c = [20, 20, 18, 22];
    let sum = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 4; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 4; i++) {
        sum = sum + a[i];

    }
    let res = sum / 80;
    result.innerHTML = res.toFixed(2);
}