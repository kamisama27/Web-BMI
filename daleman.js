function calculateBMI() {
    var height = document.getElementById("height").value; // Mengambil nilai tinggi dari elemen dengan ID "height"
    var weight = document.getElementById("weight").value; // Mengambil nilai berat dari elemen dengan ID "weight"
    var status;

    // Memvalidasi input pengguna
    if(height === '' || isNaN(height)) {
        alert("Please enter a valid height"); // Menampilkan pesan kesalahan jika input tinggi tidak valid
        return;
    }

    if(weight === '' || isNaN(weight)) {
        alert("Please enter a valid weight"); // Menampilkan pesan kesalahan jika input berat tidak valid
        return;
    }


    //Pengkondisian untuk memnentukan status BMI

    if (bmi < 20) {
        status = "Underweight";
    } else if (bmi >= 20 && bmi < 25) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    // Menghitung nilai BMI
    var bmi = weight / ((height/100) ** 2); // Rumus BMI
    bmi = bmi.toFixed(2); // Membulatkan nilai BMI menjadi 2 angka di belakang koma

    // Menampilkan hasil BMI ke pengguna
    document.getElementById("result").innerHTML = "Your BMI is " + bmi + "("+status+")"; // Menampilkan hasil pada elemen dengan ID "result"
}
