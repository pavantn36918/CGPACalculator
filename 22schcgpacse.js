function calculate() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);

    let a = [];
    let b = [s1, s2, s3];
    let c = [20, 20, 21];
    let sum = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 3; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 3; i++) {
        sum = sum + a[i];

    }
    let res = sum / 61;
    result.innerHTML = res.toFixed(2);
}
