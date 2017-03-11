let cols =[];
let rows = 10;
for(let i = 0;i <rows;i++){
    cols[i] = [];
}
Array.matrix = function (numRows, numCols, initial) {
    let arr = [];
    for (i = 0;i< numRows;++i){
        let columns = [];
        for (let j =0; j< numCols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};
let my2DArry = Array.matrix(8,8,0);
console.log(my2DArry[4][4]);

let grades = [[89,56,60],[80,100,65],[86,46,79]];
let total = 0;
let average = 0.0;
for(let row = 0; row < grades.length;row++){
    for (let col = 0;col<grades[row].length;col++){
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1)+" average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}
let persons = [];
persons[0] = {
    firstName : 'Iliya',
    lastName : 'Asenov',
    car: 'Opel',
    carModel: 'Astra H - Estate 2006',
    phone: '+35989745612',
    favTeams:['Chelsea','Milan','Beroe']
};
persons[1]={
    car:'BMW',
    name:'Ivan',};

    for(i = 0;i<=persons.length;i++){
      console.log(persons[i])
    }

