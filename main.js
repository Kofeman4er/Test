const currentDate = new Date().toDateString();

/*function sendMessage() {
    document.getElementById("zone").innerHTML('<option value="6"></option>')
    console.log(document.getElementById("zone"))
    console.log(n)
};*/
//appendChild('<option value="7"></option>'


function addName() {
    let inp = document.getElementById("nameinput").value
    document.getElementById("nameselector").insertAdjacentHTML('beforeend', '<option value="' + inp + '"></option>')
    document.getElementById("nameinput").value = '';
    document.getElementById("workingtoday").insertAdjacentHTML('beforeend', '<p>' + inp + '</p>');
};

//let elem = document.getElementById("hyster").children[0];
//console.log(elem.rows[0].cells[0].innerHTML);

/*let input = document.getElementById("hyster").children[0];
let inputdetails = input.rows[0].cells[3]
let inputValue = inputdetails.children[0].value;
console.log(inputValue);*/

//const val = document.getElementById("hyster").children[0].rows[0].cells[3].children[0].value;

function getNumber(){
    let input = document.getElementById("hyster").children[0].rows[0].cells[3].children[0].value;
    console.log(input);
    document.getElementById("plan").children[0].rows[0].cells[3].children[0].value = input;
}