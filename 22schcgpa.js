function calculate() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);

    let a = [];
    let b = [s1, s2];
    let c = [20, 20];
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
