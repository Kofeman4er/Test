function createSaagMachineBoard(){
    console.log(page)
    if(page == 1){

    }else if(page != 1 && tableEnabled == false){
        document.getElementById("mainDiv").style.display = 'none';
        document.getElementById("newId").style.removeProperty('display')
        addMainDiv(); 
        page = 1;
        tableEnabled = true;
    }else if(page != 1 && tableEnabled == true){
        document.getElementById("mainDiv").style.display = 'none';
        document.getElementById("newId").style.removeProperty('display')
        page = 1;
    }
}

function addMainDiv(){
    let header = document.createElement("div")
    header.className = "header";
    header.id = "header";
    document.getElementById("newId").appendChild(header);

    let table = document.createElement("div")
    table.className = "table";
    document.getElementById("newId").appendChild(table);
    table.id = "table";

    let offload = document.createElement("div")
    offload.className = "offload";
    offload.id = "offload";
    document.getElementById("newId").appendChild(offload);

    let addWorkersBlock = document.createElement("div")
    addWorkersBlock.className = "addWorkers";
    addWorkersBlock.id = "addWorkersBlock";
    document.getElementById("newId").appendChild(addWorkersBlock);

    let workingtoday = document.createElement("div")
    workingtoday.className = "workingtoday";
    workingtoday.id = "workingtoday";
    document.getElementById("newId").appendChild(workingtoday);
    insideHeader()
    }

//---HHHH------header data:

function insideHeader(){
    let dateheader = document.createElement("div")
    dateheader.className = "dateheader";
    dateheader.id = "dateheader";
    dateheader.innerHTML = "Today:";
    document.getElementById("header").appendChild(dateheader);

    let datenow = document.createElement("div")
    datenow.className = "datenow";
    datenow.id = "todaysDate";
    datenow.innerHTML = formatDate;
    document.getElementById("header").appendChild(datenow);

    let plantotal = document.createElement("div")
    plantotal.className = "plantotal";
    plantotal.id = "plantotal";
    document.getElementById("header").appendChild(plantotal);

    let planForToday = document.createElement("h4")
    planForToday.innerHTML = "Plan for today: ";
    document.getElementById("plantotal").appendChild(planForToday);

    let plancount = document.createElement("p")
    plancount.id = "plancount";
    plancount.innerHTML = "--";
    document.getElementById("plantotal").appendChild(plancount);

    let loadDataDiv = document.createElement("div")
    loadDataDiv.id="loadDataDiv";
    document.getElementById("header").appendChild(loadDataDiv);

    let loadDataInput = document.createElement("input")
    loadDataInput.id = "loaddata";
    loadDataInput.setAttribute('type', "date")
    document.getElementById("loadDataDiv").appendChild(loadDataInput);

    let loadButtonDiv = document.createElement("div")
    loadButtonDiv.id = "loadButtonDiv"
    document.getElementById("header").appendChild(loadButtonDiv);

    let loadButton = document.createElement("button")
    loadButton.id = "loadbutton";
    loadButton.setAttribute('type', "button")
    loadButton.innerHTML = 'Load';
    document.getElementById("loadButtonDiv").appendChild(loadButton);

    let saveButtonDiv = document.createElement("div")
    saveButtonDiv.id = "saveButtonDiv";
    document.getElementById("header").appendChild(saveButtonDiv);

    let saveButton = document.createElement("button")
    saveButton.id = "savebutton";
    saveButton.setAttribute('type', "button")
    saveButton.innerHTML = 'Save';
    document.getElementById("saveButtonDiv").appendChild(saveButton);

    createDatatableDiv()
}

//---TTTT---table data:

function createDatatableDiv(){
    let createDatatable = document.createElement("div");
    createDatatable.className = "datatable";
    createDatatable.id = "datatable";
    document.getElementById("table").appendChild(createDatatable);
    headerData()
    hysterDataTable()
    btDataTable()
    planDataTable()
    factDataTable()
    diffDataTable()
    offloadTable()
    offloadDateTable()
    addWorkersInput()
    showWorkingToday()
}

//header of the table:

function headerData(){
    let createDatatableHead = document.createElement("div");
    createDatatableHead.className = "v1";
    createDatatableHead.id = "v1head";
    document.getElementById("datatable").appendChild(createDatatableHead);

    let leftHead = document.createElement("div")
    leftHead.className = "left";
    leftHead.id = "leftHead";
    leftHead.innerHTML = "Type";
    document.getElementById("v1head").appendChild(leftHead);

    let headerD = document.createElement("table")
    headerD.className = "data";
    headerD.id = "headerD";
    document.getElementById("v1head").appendChild(headerD);

    let headerDtr = document.createElement("tr")
    headerDtr.id = "headerDtr";
    document.getElementById("headerD").appendChild(headerDtr);

    let headerDArray = ['', 'Choose zone:', '6:00-6:15', '6:15-6:30', '6:30-6:45', '6:45-7:00', '7:00-7:15', '7:15-7:30', '7:30-7:45', '7:45-8:00', '8:00-8:15', '8:15-8:30', '8:30-8:45', '8:45-9:00', '9:00-9:15', '9:15-9:30', '9:30-9:45', '9:45-10:00', '10:00-10:15', '10:15-10:30', '10:30-10:45', '10:45-11:00', '11:00-11:15', '11:15-11:30', '11:30-11:45', '11:45-12:00', '12:00-12:15', '12:15-12:30', '12:30-12:45', '12:45-13:00', '13:00-13:15', '13:15-13:30', '13:30-13:45', '13:45-14:00', '14:00-14:15', ''];
    let tdData = 0;

    let headerDTdOne = document.createElement("td")
    headerDTdOne.className = "name";
    headerDTdOne.innerHTML = "Name";
    document.getElementById("headerDtr").appendChild(headerDTdOne);

    let headerDTdTwo = document.createElement("td")
    headerDTdTwo.className = "zones";
    headerDTdTwo.id = "headerDTdTwo";
    headerDTdTwo.innerHTML = "<label>Choose zone:</label></td>";
    document.getElementById("headerDtr").appendChild(headerDTdTwo);

    for(let i = 2; i<headerDArray.length-1; i++){
        //tdData = headerDArray[i];
        tdData = document.createElement("td")
        tdData.innerHTML = headerDArray[i];
        document.getElementById("headerDtr").appendChild(tdData);
    }

    let headerDTdLast = document.createElement("td")
    headerDTdLast.className = "zones plan";
    document.getElementById("headerDtr").appendChild(headerDTdLast);

}

//Hyster table:

function hysterDataTable(){
    let createDatatableHyster = document.createElement("div");
    createDatatableHyster.className = "v1";
    createDatatableHyster.id = "v1hyster";
    document.getElementById("datatable").appendChild(createDatatableHyster);

    let leftHyster = document.createElement("div")
    leftHyster.className = "left";
    leftHyster.id = "hysterdiv";
    leftHyster.innerHTML = "Hyster";
    document.getElementById("v1hyster").appendChild(leftHyster);

    let hysterTable = document.createElement("table")
    hysterTable.className = "data";
    hysterTable.id = "hyster";
    document.getElementById("v1hyster").appendChild(hysterTable);

    let hysterTbody = document.createElement("tbody")
    hysterTbody.id = "hysterTbody";
    document.getElementById("hyster").appendChild(hysterTbody);

    let hysterTr = document.createElement("tr")
    hysterTr.id = "hr0";
    document.getElementById("hysterTbody").appendChild(hysterTr);

    let hysterTdOne = document.createElement("td")
    hysterTdOne.className = "name";
    hysterTdOne.id = "nameTd";
    document.getElementById("hr0").appendChild(hysterTdOne);

    let hysterTdOneInput = document.createElement("input")
    hysterTdOneInput.className = "name";
    hysterTdOneInput.onclick= function(){this.value = ""};
    hysterTdOneInput.setAttribute('list', "nameselector")
    document.getElementById("nameTd").appendChild(hysterTdOneInput);

    let hysterTdTwo = document.createElement("td")
    hysterTdTwo.className = "zones";
    hysterTdTwo.id = "uuu";
    document.getElementById("hr0").appendChild(hysterTdTwo);

    let hysterTdTwoInput = document.createElement("input")
    hysterTdTwoInput.className = "zone";
    hysterTdTwoInput.onclick= function(){this.value = ""};
    hysterTdTwoInput.setAttribute('list', "zoneselector")
    document.getElementById("uuu").appendChild(hysterTdTwoInput);

    for(let i = 2; i<35; i++){
        tdHyster = document.createElement("td")
        tdHyster.innerHTML = '<input onchange="tester('+i+')">';
        document.getElementById("hr0").appendChild(tdHyster);
    }

    let hysterTdLast = document.createElement("td")
    hysterTdLast.id = "hysterTdLast";
    hysterTdLast.className = "zones plan";
    document.getElementById("hr0").appendChild(hysterTdLast);

    let removeRowHysterButton = document.createElement("button")
    removeRowHysterButton.id = "removeRowHysterButton";
    removeRowHysterButton.className = "removeRowButton";
    removeRowHysterButton.setAttribute('type', "button")
    removeRowHysterButton.hidden = true
    removeRowHysterButton.innerHTML = '-';
    document.getElementById("hysterTdLast").appendChild(removeRowHysterButton);
    removeRowHysterButton.onclick = removeHysterRow;


    let hysterDataListZone = document.createElement("datalist")
    hysterDataListZone.id = "zoneselector";
    hysterDataListZone.innerHTML = '<option value="4"></option><option value="6"></option>';
    document.getElementById("v1hyster").appendChild(hysterDataListZone);

    let hysterDataListName = document.createElement("datalist")
    hysterDataListName.id = "nameselector";
    hysterDataListName.innerHTML = '<option value="test"></option>';
    document.getElementById("v1hyster").appendChild(hysterDataListName);

    let addRowHyster = document.createElement("div");
    addRowHyster.id = "addRowHyster";
    document.getElementById("datatable").appendChild(addRowHyster);

    let addRowHysterButton = document.createElement("button")
    addRowHysterButton.id = "addHysterRowButton";
    addRowHysterButton.className = "addRowButton";
    addRowHysterButton.setAttribute('type', "button")
    addRowHysterButton.innerHTML = '+';
    document.getElementById("addRowHyster").appendChild(addRowHysterButton);
    addRowHysterButton.onclick = addHysterRow;
}

//BT table:

function btDataTable(){
    let createDatatableBT = document.createElement("div");
    createDatatableBT.className = "v1";
    createDatatableBT.id = "v1bt";
    document.getElementById("datatable").appendChild(createDatatableBT);

    let leftBT = document.createElement("div")
    leftBT.className = "left";
    leftBT.id = "btdiv";
    leftBT.innerHTML = "BT";
    document.getElementById("v1bt").appendChild(leftBT);

    let btTable = document.createElement("table")
    btTable.className = "data";
    btTable.id = "bt";
    document.getElementById("v1bt").appendChild(btTable);

    let btTbody = document.createElement("tbody")
    btTbody.id = "btTbody";
    document.getElementById("bt").appendChild(btTbody);

    let btTr = document.createElement("tr")
    btTr.id = "br0";
    document.getElementById("btTbody").appendChild(btTr);

    let btTdOne = document.createElement("td")
    btTdOne.className = "name";
    btTdOne.id = "btTdOne";
    document.getElementById("br0").appendChild(btTdOne);

    let btTdOneInput = document.createElement("input")
    btTdOneInput.className = "name";
    btTdOneInput.onclick= function(){this.value = ""};
    btTdOneInput.setAttribute('list', "nameselector")
    document.getElementById("btTdOne").appendChild(btTdOneInput);

    let btTdTwo = document.createElement("td")
    btTdTwo.className = "zones plan";
    btTdTwo.id = "btTdTwo";
    document.getElementById("br0").appendChild(btTdTwo);

    let btTdTwoInput = document.createElement("input")
    btTdTwoInput.hidden = true
    document.getElementById("btTdTwo").appendChild(btTdTwoInput);

    for(let i = 2; i<35; i++){
        tdBT = document.createElement("td")
        tdBT.innerHTML = '<input onchange="tester('+i+')">';
        document.getElementById("br0").appendChild(tdBT);
    }

    let btTdLast = document.createElement("td")
    btTdLast.id = "btTdLast";
    btTdLast.className = "zones plan";
    document.getElementById("br0").appendChild(btTdLast);

    let removeRowBTButton = document.createElement("button")
    removeRowBTButton.id = "removeRowHysterButton";
    removeRowBTButton.className = "removeRowButton";
    removeRowBTButton.setAttribute('type', "button")
    removeRowBTButton.hidden = true
    removeRowBTButton.innerHTML = '-';
    document.getElementById("btTdLast").appendChild(removeRowBTButton);
    removeRowBTButton.onclick = removeHysterRow;

    let btDataListName = document.createElement("datalist")
    btDataListName.id = "nameselector";
    btDataListName.innerHTML = '<option value="test"></option>';
    document.getElementById("v1bt").appendChild(btDataListName);

    let addRowBT = document.createElement("div");
    addRowBT.id = "addRowBT";
    document.getElementById("datatable").appendChild(addRowBT);

    let addRowBTButton = document.createElement("button")
    addRowBTButton.id = "addBTRowRowButton";
    addRowBTButton.className = "addRowButton";
    addRowBTButton.setAttribute('type', "button")
    addRowBTButton.innerHTML = '+';
    document.getElementById("addRowBT").appendChild(addRowBTButton);
    addRowBTButton.onclick = addBTRow;
}

//Plan table:
function planDataTable(){
    let createDatatablePlan = document.createElement("div");
    createDatatablePlan.className = "v1";
    createDatatablePlan.id = "v1plan";
    document.getElementById("datatable").appendChild(createDatatablePlan);

    let leftPlan = document.createElement("div")
    leftPlan.className = "left";
    leftPlan.id = "planDiv";
    leftPlan.innerHTML = "Plan";
    document.getElementById("v1plan").appendChild(leftPlan);

    let planTable = document.createElement("table")
    planTable.className = "data";
    planTable.id = "plan";
    document.getElementById("v1plan").appendChild(planTable);

    let planTbody = document.createElement("tbody")
    planTbody.id = "planTbody";
    document.getElementById("plan").appendChild(planTbody);

    let planTr = document.createElement("tr")
    planTr.id = "pr0";
    document.getElementById("planTbody").appendChild(planTr);

    let planTdOne = document.createElement("td")
    planTdOne.className = "name plan";
    planTdOne.id = "planTdOne";
    document.getElementById("pr0").appendChild(planTdOne);

    let planTdOneInput = document.createElement("input")
    planTdOneInput.hidden = true
    document.getElementById("planTdOne").appendChild(planTdOneInput);

    let planTdTwo = document.createElement("td")
    planTdTwo.className = "zones plan";
    planTdTwo.id = "planTdTwo";
    document.getElementById("pr0").appendChild(planTdTwo);

    let planTdTwoInput = document.createElement("input")
    planTdTwoInput.hidden = true
    document.getElementById("planTdTwo").appendChild(planTdTwoInput);

    for(let i = 2; i<35; i++){
        tdPlan = document.createElement("td")
        tdPlan.innerHTML = '<input onchange="tester('+i+')">';
        document.getElementById("pr0").appendChild(tdPlan);
    }
}

//Fact table:

function factDataTable(){
    let createDatatableFact = document.createElement("div");
    createDatatableFact.className = "v1";
    createDatatableFact.id = "v1fact";
    document.getElementById("datatable").appendChild(createDatatableFact);

    let leftFact = document.createElement("div")
    leftFact.className = "left";
    leftFact.id = "factDiv";
    leftFact.innerHTML = "Fact";
    document.getElementById("v1fact").appendChild(leftFact);

    let factTable = document.createElement("table")
    factTable.className = "data";
    factTable.id = "fact";
    document.getElementById("v1fact").appendChild(factTable);

    let factTbody = document.createElement("tbody")
    factTbody.id = "factTbody";
    document.getElementById("fact").appendChild(factTbody);

    let factTr = document.createElement("tr")
    factTr.id = "fr0";
    document.getElementById("factTbody").appendChild(factTr);

    let factTdOne = document.createElement("td")
    factTdOne.className = "name plan";
    document.getElementById("fr0").appendChild(factTdOne);

    let factTdTwo = document.createElement("td")
    factTdTwo.className = "zones plan";
    document.getElementById("fr0").appendChild(factTdTwo);


    for(let i = 2; i<35; i++){
        tdFact = document.createElement("td")
        tdFact.innerHTML = '-';
        document.getElementById("fr0").appendChild(tdFact);
    }
}

//Diff table:

function diffDataTable(){
    let createDatatableDiff = document.createElement("div");
    createDatatableDiff.className = "v1";
    createDatatableDiff.id = "v1diff";
    document.getElementById("datatable").appendChild(createDatatableDiff);

    let leftDiff = document.createElement("div")
    leftDiff.className = "left";
    leftDiff.id = "diffDiv";
    leftDiff.innerHTML = "Diff";
    document.getElementById("v1diff").appendChild(leftDiff);

    let diffTable = document.createElement("table")
    diffTable.className = "data";
    diffTable.id = "diff";
    document.getElementById("v1diff").appendChild(diffTable);

    let diffTbody = document.createElement("tbody")
    diffTbody.id = "diffTbody";
    document.getElementById("diff").appendChild(diffTbody);

    let diffTr = document.createElement("tr")
    diffTr.id = "dr0";
    document.getElementById("diffTbody").appendChild(diffTr);

    let diffTdOne = document.createElement("td")
    diffTdOne.className = "name plan";
    document.getElementById("dr0").appendChild(diffTdOne);

    let diffTdTwo = document.createElement("td")
    diffTdTwo.className = "zones plan";
    document.getElementById("dr0").appendChild(diffTdTwo);


    for(let i = 2; i<35; i++){
        tdDiff = document.createElement("td")
        tdDiff.innerHTML = '-';
        document.getElementById("dr0").appendChild(tdDiff);
    }
}

//-----FFFF-----Footer table:
//----buffer table:
function offloadTable(){
    let createOffload = document.createElement("div");
    createOffload.id = "createOffload";
    document.getElementById("offload").appendChild(createOffload);

    let createBufferTitle = document.createElement("div");
    createBufferTitle.className = "v1";
    createBufferTitle.id = "createBufferTitle";
    document.getElementById("createOffload").appendChild(createBufferTitle);

    let leftBuffer = document.createElement("div")
    leftBuffer.className = "left";
    leftBuffer.id = "leftBuffer";
    leftBuffer.innerHTML = "Buffer";
    document.getElementById("createBufferTitle").appendChild(leftBuffer);

    let bufferTable = document.createElement("table")
    bufferTable.className = "buffer";
    bufferTable.id = "bufferTable";
    document.getElementById("createBufferTitle").appendChild(bufferTable);

    let bufferTbody = document.createElement("tbody")
    bufferTbody.id = "bufferTbody";
    document.getElementById("bufferTable").appendChild(bufferTbody);

    let bufferTr = document.createElement("tr")
    bufferTr.id = "buff";
    bufferTr.className = "buff";
    document.getElementById("bufferTbody").appendChild(bufferTr);

    for(let i = 0; i<6; i++){
        tdBuffer = document.createElement("td")
        if(i < 5){
            tdBuffer.innerHTML = 'z6: ' + (i+1);
            document.getElementById("buff").appendChild(tdBuffer);
        }else{
            tdBuffer.innerHTML = 'z6: overflow';
            document.getElementById("buff").appendChild(tdBuffer);
        }
    }

    for(let i = 0; i<6; i++){
        tdBuffer = document.createElement("td")
        if(i < 5){
            tdBuffer.innerHTML = 'z4: ' + (i+1);
            document.getElementById("buff").appendChild(tdBuffer);
        }else{
            tdBuffer.innerHTML = 'z4: overflow';
            document.getElementById("buff").appendChild(tdBuffer);
        }
    }
}

//-----buffer dates table:

function offloadDateTable(){
    let createBufferDate = document.createElement("div");
    createBufferDate.className = "v1";
    createBufferDate.id = "createBufferDate";
    document.getElementById("createOffload").appendChild(createBufferDate);

    let leftBufferDate = document.createElement("div")
    leftBufferDate.className = "left";
    leftBufferDate.id = "leftBufferDate";
    leftBufferDate.innerHTML = "Date";
    document.getElementById("createBufferDate").appendChild(leftBufferDate);

    let bufferDateTable = document.createElement("table")
    bufferDateTable.className = "bufferDate";
    bufferDateTable.id = "bufferDateTable";
    document.getElementById("createBufferDate").appendChild(bufferDateTable);

    let bufferDateTbody = document.createElement("tbody")
    bufferDateTbody.id = "bufferDateTbody";
    document.getElementById("bufferDateTable").appendChild(bufferDateTbody);

    let bufferDateTr = document.createElement("tr")
    bufferDateTr.id = "bufferDateTr";
    bufferDateTr.className = "buff";
    document.getElementById("bufferDateTbody").appendChild(bufferDateTr);

    for(let i = 0; i<12; i++){
        tdBufferDate = document.createElement("td")
        tdBufferDate.innerHTML = '<td><input></td>';
        document.getElementById("bufferDateTr").appendChild(tdBufferDate);
    }
}

//-------Add workers
function addWorkersInput(){
    let addWorkersDiv = document.createElement("div");
    addWorkersDiv.id = "addWorkersDiv";
    document.getElementById("addWorkersBlock").appendChild(addWorkersDiv);

    let addWorkH4 = document.createElement("h4")
    addWorkH4.innerHTML = "Add workers for today: ";
    addWorkH4.id = "addworkers";
    document.getElementById("addWorkersDiv").appendChild(addWorkH4);

    let addWorkersInputDiv = document.createElement("div");
    addWorkersInputDiv.className = "inputform";
    addWorkersInputDiv.id = "addWorkersInputDiv";
    document.getElementById("addWorkersDiv").appendChild(addWorkersInputDiv);

    let addWorkersNameInput = document.createElement("input")
    addWorkersNameInput.id = 'nameinput'
    document.getElementById("addWorkersInputDiv").appendChild(addWorkersNameInput);

    let addNameButton = document.createElement("button")
    addNameButton.id = "myBtn";
    addNameButton.setAttribute('type', "button")
    addNameButton.innerHTML = 'Add to the shift';
    document.getElementById("addWorkersInputDiv").appendChild(addNameButton);
    addNameButton.onclick = addName;
}

//-----Display workingtoday
function showWorkingToday(){
    let showWorkingTodayP = document.createElement("p");
    showWorkingTodayP.innerHTML = "Working today: ";
    document.getElementById("workingtoday").appendChild(showWorkingTodayP);
    firebaseScript();
}

function firebaseScript(){
    let scriptModuleLoad = document.createElement("script")
    scriptModuleLoad.setAttribute('type', "module")
    scriptModuleLoad.setAttribute('src', "firebase.js")
    document.getElementsByTagName('head')[0].appendChild(scriptModuleLoad);
}

function loadHomePage(){
    console.log(page)
    if(page == 2){

    }else if(page != 2 && homePageEnabled == false){
        document.getElementById("newId").style.display = 'none';
        document.getElementById("mainDiv").style.removeProperty('display');
        homePage(); 
        page = 2;
        homePageEnabled = true
    }else if(page != 2 && homePageEnabled == true){
        document.getElementById("newId").style.display = 'none';
        document.getElementById("mainDiv").style.removeProperty('display');
        page = 2;
    }
}

function homePage(){
    const welcomeMessage = document.createElement("h2");
    welcomeMessage.id = "welcomeMessage";
    welcomeMessage.textContent = "Hello, Visitor!";
    document.getElementById("mainDiv").appendChild(welcomeMessage);
}

function checkCredentials(){
    let inputName = document.getElementById("loginName").value
    let inputPass = document.getElementById("loginPass").value  
    if(inputName == "User" && inputPass == "1111"){
        let saag = document.createElement("button")
        saag.id = "saag"
        saag.className = "navButton"
        saag.innerHTML = "S.a.a.G board";
        saag.onclick = createSaagMachineBoard;
        let loginNav = document.getElementById("loginNav");
        topnav.insertBefore(saag, loginNav)
        console.log(inputName, "", inputPass)
        modal.style.display = "none";
        document.getElementById("loginNav").style.display = 'none';
        document.getElementById("loginNav2").style.removeProperty('display');
    }else{
        alert("Wrong credentials")
        inputName = "";
        inputPass = "";
    }
}

function confirmation() {
    let text = "Do you want to log out?";
    if (confirm(text) == true) {
        document.getElementById("loginNav2").style.display = 'none';
        document.getElementById("loginNav").style.removeProperty('display');
        var saagremove = document.getElementById('saag');
        saagremove.parentNode.removeChild(saagremove);
        window.location.reload()
        loadHomePage()
    } else {
      text = "You canceled!";
    }
  }
