const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку');

function getRow(firstRow, secondRow) {
    let num1 = 0, num2 = 0;
    for (let index = 0; index < firstRow.length; index++) {
        if(firstRow.charAt(index) != 'a' || firstRow.charAt(index) != 'A'){
            num1++;
        }
        
    }
    for (let index = 0; index < secondRow.length; index++) {
        if(secondRow.charAt(index) != 'a' || secondRow.charAt(index) != 'A'){
            num2++;
        }
    }
    if(num1 > num2 ) {
        return `В первой строке больше символов 'a'`;
    }
    else if(num1 < num2){
        return `Во второй строке больше символов 'a'`;
    }
    else {
        return `Количество символов 'a' в первой строке равно количеству символов 'a' во второй`;
    }
    
}

console.log(getRow(firstRow, secondRow)); 