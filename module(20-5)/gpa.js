
// === (3) Grade System ===

function gpa(mark) {
    if (mark >= 0 && mark <= 100) {
        let gpa = '';
        if (mark >= 80) {
            gpa = 'A+';
        }
        else if (mark >= 70) {
            gpa = 'A';
        }
        else if (mark >= 60) {
            gpa = 'A-';
        }
        else if (mark >= 50) {
            gpa = 'B';
        }
        else if (mark >= 40) {
            gpa = 'C';
        }
        else if (mark >= 33) {
            gpa = 'D';
        }
        else {
            gpa = 'F';
        }
        return gpa;
    }
    else {
        return 'Invalid Mark';
    }
}

const markInput = 89; // set your mark here.
console.log(gpa(markInput));
