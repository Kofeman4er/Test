const currentDate = new Date().toDateString();

function addName() {
    let inp = document.getElementById("nameinput").value
    document.getElementById("nameselector").insertAdjacentHTML('beforeend', '<option value="' + inp + '"></option>')
    document.getElementById("nameinput").value = '';
    document.getElementById("workingtoday").insertAdjacentHTML('beforeend', '<p>' + inp + '</p>');
};

function getNumber(){
    let input = document.getElementById("hyster").children[0].rows[0].cells[3].children[0].value;
    console.log(input);
    document.getElementById("plan").children[0].rows[0].cells[3].children[0].value = input;
}


function tester(n){
    let sum = 0;
    let planSum = 0;
    let pp = document.getElementById("hyster").children[0]
    for(let i = 0; i<pp.rows.length; i++){
            sum = sum + Number(document.getElementById("hyster").children[0].rows[i].cells[n].children[0].value);      
    }
    document.getElementById("fact").children[0].rows[0].cells[n].innerHTML = sum;
    let plan = document.getElementById("plan").children[0].rows[0].cells[n].children[0].value;
    document.getElementById("diff").children[0].rows[0].cells[n].innerHTML = sum - Number(plan);
    let gg = document.getElementById("plan").children[0].children[0];
    for(let j = 2; j<gg.cells.length; j++){
        planSum = planSum + Number(document.getElementById("plan").children[0].rows[0].cells[j].children[0].value);
    }
    document.getElementById("plancount").innerHTML = planSum;
}

function addHysterRow(){
    let rowCount = document.getElementById("hyster").children[0].rows.length
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    let hysterRow = document.getElementById("hyster").children[0].children[0];
    let newHysterRow = hysterRow.cloneNode(true);
    document.getElementById("hyster").children[0].append(newHysterRow)
    for(let i = 1; i<columnCount; i++){
        document.getElementById("hyster").children[0].children[rowCount].children[i].children[0].value = null;
    }
}

function removeHysterRow(id){

}
