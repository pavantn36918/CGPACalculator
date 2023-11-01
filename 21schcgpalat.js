function calculate() {
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);

    let a = [];
    let b = [s3, s4];
    let c = [18, 22];
    let sum = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 2; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 2; i++) {
        sum = sum + a[i];

    }
    let res = sum / 40;
    result.innerHTML = res.toFixed(2);
}