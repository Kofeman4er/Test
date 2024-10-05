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

function getNumber(){
    let input = document.getElementById("hyster").children[0].rows[0].cells[3].children[0].value;
    console.log(input);
    document.getElementById("plan").children[0].rows[0].cells[3].children[0].value = input;
}

function isNumber(value) {
  return typeof value === 'number';
}

function tester(n){
    let sum = 0;
    let planSum = 0;
    let pp = document.getElementById("hyster").children[0]
    for(let i = 0; i<pp.rows.length; i++){
        let t = Number(document.getElementById("hyster").children[0].rows[i].cells[n].children[0].value)
            if(t == t){
                sum = Number(sum) + t
            }else{
                i++;
            }
    }
    let btRoute = document.getElementById("bt").children[0]
    for(let i = 0; i<btRoute.rows.length; i++){
        let t = Number(document.getElementById("bt").children[0].rows[i].cells[n].children[0].value)
        if(t == t){
            sum = Number(sum) + t
        }else{
            i++;
        }   
    }
    document.getElementById("fact").children[0].rows[0].cells[n].innerHTML = sum;
    if(document.getElementById("fact").children[0].rows[0].cells[n].innerHTML == 0){
        document.getElementById("fact").children[0].rows[0].cells[n].innerHTML = "-"
    }
    let plan = document.getElementById("plan").children[0].rows[0].cells[n].children[0].value;
    document.getElementById("diff").children[0].rows[0].cells[n].innerHTML = sum - Number(plan);
    if(document.getElementById("diff").children[0].rows[0].cells[n].innerHTML == 0){
        document.getElementById("diff").children[0].rows[0].cells[n].innerHTML = "-"
    }else if(document.getElementById("diff").children[0].rows[0].cells[n].innerText < 0){
        document.getElementById("diff").children[0].rows[0].cells[n].style.backgroundColor = "#E52B50";
        document.getElementById("diff").children[0].rows[0].cells[n].style.color = "white"
    }else if(document.getElementById("diff").children[0].rows[0].cells[n].innerText > 0){
        document.getElementById("diff").children[0].rows[0].cells[n].style.backgroundColor = "#4FFFB0";
        document.getElementById("diff").children[0].rows[0].cells[n].style.color = "black"
    }
    let gg = document.getElementById("plan").children[0].children[0];
    for(let j = 2; j<gg.cells.length; j++){
        planSum = planSum + Number(document.getElementById("plan").children[0].rows[0].cells[j].children[0].value);
    }
    document.getElementById("plancount").innerHTML = planSum;
}

function addHysterRow(){
    document.getElementById("hyster").children[0].children[0].setAttribute('id', "hr" + 0);
    let rowCount = document.getElementById("hyster").children[0].rows.length
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    /*let newHysterRow = document.createElement("tr");
    newHysterRow.id = rowCount;

    newHysterRow.innerHTML = 123123123;
    let newHysterCell = document.createElement("td");
    document.getElementById("hyster").children[0].append(newHysterRow)
    //let newHysterCells = document.createElement("td");
    for(let i = 0; i<35; i++){
        document.getElementById("5").append(newHysterCell)
    }*/
    let hysterRow = document.getElementById("hyster").children[0].children[0];
    let newHysterRow = hysterRow.cloneNode(true);
    document.getElementById("hyster").children[0].append(newHysterRow)

    try {
        for(let i = 0; i<columnCount; i++){
            document.getElementById("hyster").children[0].children[rowCount].children[i].children[0].value = "";
        }

        for(let j = 1; j<=rowCount; j++){
            document.getElementById("hyster").children[0].children[j].setAttribute('id', "hr"+j);
            document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[0].removeAttribute("hidden");
        }
    } catch (error) {
        console.error(error);
    }

    try {
        for(let k = 1; k<=rowCount; k++){
            document.getElementById("hr"+k).children[columnCount-1].children[0].setAttribute("onclick","removeHysterRow('"+k+"')")
        }
    }  catch (error) {
        console.error(error);
    }

}

function removeHysterRow(id){
    let elem = document.getElementById("hr"+id);
    elem.remove();
    for(let i = 2; i<35; i++){
    tester(i);
    }
}

function addBTRow(){
    document.getElementById("bt").children[0].children[0].setAttribute('id', "br" + 0);
    let rowCount = document.getElementById("bt").children[0].rows.length
    let columnCount = document.getElementById("bt").children[0].rows[0].cells.length;
    let btRow = document.getElementById("bt").children[0].children[0];
    let newBTRow = btRow.cloneNode(true);
    document.getElementById("bt").children[0].append(newBTRow)

    try {
        for(let i = 0; i<columnCount; i++){
            document.getElementById("bt").children[0].children[rowCount].children[i].children[0].value = "";
        }

        for(let j = 1; j<=rowCount; j++){
            document.getElementById("bt").children[0].children[j].setAttribute('id', "br"+j);
            document.getElementById("bt").children[0].children[j].children[columnCount-1].children[0].removeAttribute("hidden");
        }
    } catch (error) {
        console.error(error);
    }

    try {
        for(let k = 1; k<=rowCount; k++){
            document.getElementById("br"+k).children[columnCount-1].children[0].setAttribute("onclick","removeBTRow('"+k+"')")
        }
    }  catch (error) {
        console.error(error);
    }

}

function removeBTRow(id){
    let elem = document.getElementById("br"+id);
    elem.remove();
    for(let i = 2; i<35; i++){
    tester(i);
    }
}
