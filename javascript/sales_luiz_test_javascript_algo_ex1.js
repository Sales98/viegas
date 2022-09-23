var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 2";


// Creating a "to_verify" table exercise 1.1

function myTable(){

    // creates <table> and <tbody> elements
    const to_verify = document.createElement("table");
    const myTableBody = document.createElement("tbody");

 // creating cells
 for (let j = 1; j <= 9; j++) {
    // creates a <tr> element
    const myCurrentRow = document.createElement("tr");

    for (let i = 1; i <= 9; i++) {
        // creates a <td> element

        const myCurrentCell = document.createElement("td");

        const cellText = document.createTextNode(`cell in row ${j}, column ${i}`);
        myCurrentCell.appendChild(cellText);
        myCurrentRow.appendChild(myCurrentCell);
      }
        // appends the row <tr> into <tbody>
      myTableBody.appendChild(myCurrentRow);
    }

    // appends <tbody> into <table>
    to_verify.appendChild(myTableBody);
    // appends <table> into <body>
    document.body.appendChild(to_verify);
    // sets the border attribute of myTable to 2, width to 300px and height to 300px;
    to_verify.setAttribute("border", "2");
    to_verify.setAttribute("width", "300px")
    to_verify.setAttribute("height", "300px")
  }

  // create a F11 Function that reads the table and transfers it to another exercise 1.2
  
  function F11() {
    let result_arr = []; //empty array
    for(j = 0; j < array_number.length; j++){ //looping in order to read the array
     result_arr[j] = array_number[j].split(" ");//using split to remove whitespace and to fill the new array
    }
  

// creates a new <table> and <tbody> elements, change the name to to_check
const to_check = document.createElement("table");
const myTableBody = document.createElement("tbody");


 // creating cells
 for (let j = 0; j < result_arr.length; j++) {
    // creates a <tr> element
    const myCurrentRow = document.createElement("tr");

    for (let i = 0; i < result_arr[j].length; i++) {
        // creates a <td> element

        const myCurrentCell = document.createElement("td");

        const cellText = document.createTextNode(`${result_arr[j][i]}`);
        myCurrentCell.appendChild(cellText);
        myCurrentRow.appendChild(myCurrentCell);
      }
        // appends the row <tr> into <tbody>
      myTableBody.appendChild(myCurrentRow);
    }

    // appends <tbody> into <table>
    to_check.appendChild(myTableBody);
    // appends <table> into <body>
    document.body.appendChild(to_check);
    // sets the border attribute of myTable to 2, width to 300px and height to 300px;
    to_check.setAttribute("border", "2");
    to_check.setAttribute("width", "300px");
    to_check.setAttribute("height", "300px");
}

function F12() {
    let new_array = []; //empty array
    for(var j = 0; j < array_number.length; j++) {
        new_array[j] = array_number[j].split(" ");
    }
    table = document.getElementById("to_be_verified"); // passing the table to HTML
    for(var j = 0, k = 0; j < table.rows.length, k < new_array.length; j++, k++){//rows

    for(var i = 0, l = 0; i < table.rows[i].cells.length, l < new_array[k].length; i++, l++){ //cells
   
      table.rows[j].cells[i].innerHTML = arr[k][l];
    }
}
}


