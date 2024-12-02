const pw = document.getElementById('pw');
const pwLength = document.getElementById('pwLength');


function getPw(){
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    const data = lowAlphabet + upAlphabet + numbers + specialChars;
    let generator = '';

    for (let i = 0; i < pwLength.value; i++) {
        generator += data[Math.floor(Math.random() * data.length)];
        pw.value = generator;
        
    }

};

function save(){
    navigator.clipboard.writeText(pw.value);
    Swal.fire({
  icon: 'success',
  title: 'Password telah disalin',
  showConfirmButton: false,
  timer: 1500
})
};


