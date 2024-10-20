    let objectDate = new Date();
    let day = objectDate.getDate();
    let year = objectDate.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
    let month = monthNames[objectDate.getMonth()];
    let month2 = objectDate.getMonth();

    if (day < 10) {
        day = '0' + day;
    }
    if (month2+1 < 10) {
        month2 = '0' + month2;
    }
    
    let formatDate = `${month} ${day} ${year}`;
    let forMatch = `${year}-${month2+1}-${day}`

    let page = 0;
    let tableEnabled = false;
    let homePageEnabled = false;

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
    let plan = Number(document.getElementById("plan").children[0].rows[0].cells[n].children[0].value);
    if(plan == plan){
        document.getElementById("diff").children[0].rows[0].cells[n].innerHTML = sum - Number(plan);
    } 
    if(document.getElementById("diff").children[0].rows[0].cells[n].innerHTML == 0){
        document.getElementById("diff").children[0].rows[0].cells[n].innerHTML = "-";
        document.getElementById("diff").children[0].rows[0].cells[n].style.backgroundColor = "white";
    }else if(document.getElementById("diff").children[0].rows[0].cells[n].innerText < 0){
        document.getElementById("diff").children[0].rows[0].cells[n].style.backgroundColor = "#E52B50";
        document.getElementById("diff").children[0].rows[0].cells[n].style.color = "white"
    }else if(document.getElementById("diff").children[0].rows[0].cells[n].innerText > 0){
        document.getElementById("diff").children[0].rows[0].cells[n].style.backgroundColor = "#4FFFB0";
        document.getElementById("diff").children[0].rows[0].cells[n].style.color = "black"
    }
    let gg = document.getElementById("plan").children[0].children[0];
    for(let j = 2; j<gg.cells.length; j++){
        let t = Number(document.getElementById("plan").children[0].rows[0].cells[j].children[0].value);
        if(t == t){
            planSum = planSum + t
        }else{
           alert("Plan should be set as a number");
           document.getElementById("plan").children[0].rows[0].cells[j].children[0].value = '';
        }   
    }
    document.getElementById("plancount").innerHTML = planSum;
}

function addHysterRow(){
    let rowCount = document.getElementById("hyster").children[0].rows.length
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    let hysterRow = document.getElementById("hyster").children[0].children[0];
    let newHysterRow = hysterRow.cloneNode(true);
    document.getElementById("hyster").children[0].append(newHysterRow)

    try {
        for(let i = 0; i<columnCount; i++){
            document.getElementById("hyster").children[0].children[rowCount].children[i].children[0].value = "";
        }

        for(let j = 1; j<=rowCount; j++){
            document.getElementById("hyster").children[0].children[j].setAttribute('id', "hr"+j);      
            document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[0].setAttribute('id', "edit_hr"+j);
            document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[1].setAttribute('id', "save_hr"+j);
            document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[2].removeAttribute("hidden");
        }
    } catch (error) {
        console.error(error);
    }

    try {
        for(let k = 1; k<=rowCount; k++){
            document.getElementById("hr"+k).children[columnCount-1].children[2].setAttribute("onclick","removeHysterRow('"+k+"')")
            document.getElementById("hr"+k).children[columnCount-1].children[0].setAttribute("onclick","setWorkingTime('"+k+"')")
            document.getElementById("hr"+k).children[columnCount-1].children[1].setAttribute("onclick","saveWorkingTime('"+k+"')")
        }
    }  catch (error) {
        console.error(error);
    }
    
    
    for(let i = 0; i<columnCount-1; i++){
        if (document.contains(document.getElementById("hyster").children[0].children[rowCount].children[i].children[1])) {
            document.getElementById("hyster").children[0].children[rowCount].children[i].children[1].remove();
        }
        if (document.contains(document.getElementById("hyster").children[0].children[rowCount].children[i].children[1])) {
        document.getElementById("hyster").children[0].children[rowCount].children[i].children[1].remove();}
    }
    saveWorkingTime(0);
    saveWorkingTime(rowCount);
                /**/

}

function setWorkingTime(row){
    let rowCount = document.getElementById("hyster").children[0].rows.length
    for(let i = 0; i<rowCount; i++){
        if(row != i){
            saveWorkingTime(i)
        }
    }
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    document.getElementById("edit_hr"+row).disabled = true
    document.getElementById("save_hr"+row).disabled = false
    try {
        for(let i = 2; i<columnCount-1; i++){
            document.getElementById("hyster").children[0].children[row].children[i].children[0].hidden = true
            let acceptB = document.createElement("button")
            let cancelB = document.createElement("button")
            acceptB.id = "accept0"+i;
            acceptB.innerHTML = 'N/W';
            document.getElementById("hyster").children[0].children[row].children[i].appendChild(acceptB);   
            acceptB.addEventListener('click', function(){
                acceptBFunc(i, row);
            }); 
            cancelB.id = "cancel0"+i;
            cancelB.innerHTML = 'W';
            document.getElementById("hyster").children[0].children[row].children[i].appendChild(cancelB);
            cancelB.addEventListener('click', function(){
                cancelBFunc(i, row);
            }); 
        }
    } catch (error) {
        console.error(error);
    }
}

function acceptBFunc(id, row){
    document.getElementById("hyster").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("accept0"+id).hidden = true
    document.getElementById("cancel0"+id).hidden = true
    document.getElementById("hyster").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("hyster").children[0].children[row].children[id].children[0].value = "N/W"
    document.getElementById("hyster").children[0].children[row].children[id].children[0].disabled = true
}

function cancelBFunc(id, row){
    document.getElementById("accept0"+id).hidden = true
    document.getElementById("cancel0"+id).hidden = true
    document.getElementById("hyster").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("hyster").children[0].children[row].children[id].children[0].value = ""
    document.getElementById("hyster").children[0].children[row].children[id].children[0].disabled = false
}

function saveWorkingTime(row){
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    document.getElementById("edit_hr"+row).disabled = false
    document.getElementById("save_hr"+row).disabled = true
    try {
        for(let i = 2; i<columnCount-1; i++){
            if (document.contains(document.getElementById("hyster").children[0].children[row].children[i].children[1])) {
                document.getElementById("hyster").children[0].children[row].children[i].children[1].remove();
            }
            if (document.contains(document.getElementById("hyster").children[0].children[row].children[i].children[1])) {
                document.getElementById("hyster").children[0].children[row].children[i].children[1].remove();
            }
        document.getElementById("hyster").children[0].children[row].children[i].children[0].removeAttribute("hidden")
        }
    }catch (error) {
        console.error(error);
    }
}

function removeHysterRow(id){
    let elem = document.getElementById("hr"+id);
    elem.remove();
    let rowCount = document.getElementById("hyster").children[0].rows.length;
    let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
    for(let j = 1; j<rowCount; j++){
        document.getElementById("hyster").children[0].children[j].setAttribute('id', "hr"+j);
        
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[0].setAttribute('id', "edit_hr"+j);
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[0].setAttribute('onClick', "setWorkingTime("+j+")");
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[1].setAttribute('id', "save_hr"+j);
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[1].setAttribute('onClick', "saveWorkingTime("+j+")");
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[2].setAttribute('onClick', "removeHysterRow("+j+")");
        document.getElementById("hyster").children[0].children[j].children[columnCount-1].children[2].removeAttribute("hidden");
    }
    for(let i = 2; i<35; i++){  //todo
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

            document.getElementById("bt").children[0].children[j].children[columnCount-1].children[0].setAttribute('id', "edit_br"+j);
            document.getElementById("bt").children[0].children[j].children[columnCount-1].children[1].setAttribute('id', "save_br"+j);
            document.getElementById("bt").children[0].children[j].children[columnCount-1].children[2].removeAttribute("hidden");
         }
    } catch (error) {
        console.error(error);
    }

    try {
        for(let k = 1; k<=rowCount; k++){
            document.getElementById("br"+k).children[columnCount-1].children[0].setAttribute("onclick","removeBTRow('"+k+"')")
            document.getElementById("br"+k).children[columnCount-1].children[0].setAttribute("onclick","setWorkingTimeBT('"+k+"')")
            document.getElementById("br"+k).children[columnCount-1].children[1].setAttribute("onclick","saveWorkingTimeBT('"+k+"')")
        }
    }  catch (error) {
        console.error(error);
    }

    for(let i = 0; i<columnCount-1; i++){
        if (document.contains(document.getElementById("bt").children[0].children[rowCount].children[i].children[1])) {
            document.getElementById("bt").children[0].children[rowCount].children[i].children[1].remove();
        }
        if (document.contains(document.getElementById("bt").children[0].children[rowCount].children[i].children[1])) {
        document.getElementById("bt").children[0].children[rowCount].children[i].children[1].remove();}
    }
    saveWorkingTimeBT(0);
    saveWorkingTimeBT(rowCount);

}

function setWorkingTimeBT(row){
    let rowCount = document.getElementById("bt").children[0].rows.length
    for(let i = 0; i<rowCount; i++){
        if(row != i){
            saveWorkingTimeBT(i)
        }
    }
    let columnCount = document.getElementById("bt").children[0].rows[0].cells.length;
    document.getElementById("edit_br"+row).disabled = true
    document.getElementById("save_br"+row).disabled = false
    try {
        for(let i = 2; i<columnCount-1; i++){
            document.getElementById("bt").children[0].children[row].children[i].children[0].hidden = true
            let acceptB = document.createElement("button")
            let cancelB = document.createElement("button")
            acceptB.id = "accept1"+i;
            acceptB.innerHTML = 'N/W';
            document.getElementById("bt").children[0].children[row].children[i].appendChild(acceptB);   
            acceptB.addEventListener('click', function(){
                acceptBFuncBT(i, row);
            }); 
            cancelB.id = "cancel1"+i;
            cancelB.innerHTML = 'W';
            document.getElementById("bt").children[0].children[row].children[i].appendChild(cancelB);
            cancelB.addEventListener('click', function(){
                cancelBFuncBT(i, row);
            }); 
        }
    } catch (error) {
        console.error(error);
    }
}

function acceptBFuncBT(id, row){
    document.getElementById("bt").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("accept1"+id).hidden = true
    document.getElementById("cancel1"+id).hidden = true
    document.getElementById("bt").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("bt").children[0].children[row].children[id].children[0].value = "N/W"
    document.getElementById("bt").children[0].children[row].children[id].children[0].disabled = true
}

function cancelBFuncBT(id, row){
    document.getElementById("accept1"+id).hidden = true
    document.getElementById("cancel1"+id).hidden = true
    document.getElementById("bt").children[0].children[row].children[id].children[0].removeAttribute("hidden")
    document.getElementById("bt").children[0].children[row].children[id].children[0].value = ""
    document.getElementById("bt").children[0].children[row].children[id].children[0].disabled = false
}

function saveWorkingTimeBT(row){
    let columnCount = document.getElementById("bt").children[0].rows[0].cells.length;
    document.getElementById("edit_br"+row).disabled = false
    document.getElementById("save_br"+row).disabled = true
    try {
        for(let i = 2; i<columnCount-1; i++){
            if (document.contains(document.getElementById("bt").children[0].children[row].children[i].children[1])) {
                document.getElementById("bt").children[0].children[row].children[i].children[1].remove();
            }
            if (document.contains(document.getElementById("bt").children[0].children[row].children[i].children[1])) {
                document.getElementById("bt").children[0].children[row].children[i].children[1].remove();
            }
        document.getElementById("bt").children[0].children[row].children[i].children[0].removeAttribute("hidden")
        }
    }catch (error) {
        console.error(error);
    }
}

function removeBTRow(id){
    let elem = document.getElementById("br"+id);
    elem.remove();
    for(let j = 1; j<rowCount; j++){
        document.getElementById("bt").children[0].children[j].setAttribute('id', "br"+j);
        
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[0].setAttribute('id', "edit_br"+j);
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[0].setAttribute('onClick', "setWorkingTimeBT("+j+")");
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[1].setAttribute('id', "save_br"+j);
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[1].setAttribute('onClick', "saveWorkingTimeBT("+j+")");
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[2].setAttribute('onClick', "removeBTRow("+j+")");
        document.getElementById("bt").children[0].children[j].children[columnCount-1].children[2].removeAttribute("hidden");
    }
    for(let i = 2; i<35; i++){
    tester(i);
    }
}


