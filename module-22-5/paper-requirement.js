const book1Count = 19;
const book2Count = 15;
const book3Count = 9;

function paperRequirements(book1, book2, book3) {
    const book1TotalPaper = book1 * 100;
    const book2TotalPaper = book2 * 200;
    const book3TotalPaper = book3 * 300;
    const totalPaper = book1TotalPaper + book2TotalPaper + book3TotalPaper;
    return totalPaper;
}

console.log(paperRequirements(book1Count, book2Count, book3Count));