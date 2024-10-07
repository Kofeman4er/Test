import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

        const firebaseConfig = {
          apiKey: "AIzaSyCDpORjQfKjiPp-fBv8uPX2CUnlUZZSeow",
          authDomain: "saag-board.firebaseapp.com",
          databaseURL: "https://saag-board-default-rtdb.firebaseio.com",
          projectId: "saag-board",
          storageBucket: "saag-board.appspot.com",
          messagingSenderId: "491234620736",
          appId: "1:491234620736:web:e7aef720b778fe2ffb76a5"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        console.log("Yes")

        import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
        const db = getDatabase();
        let ident = document.getElementById("todaysDate").innerHTML;
        let zone = document.getElementById("uuu").children[0]; 
        

        function LoopData(){
            let countHyster = document.getElementById("hyster").children[0].rows.length
            let countBT = document.getElementById("bt").children[0].rows.length
            for(let i=0; i<countHyster; i++){
                AddData("hr"+i);   
            }
            for(let i=0; i<countBT; i++){
                AddData("br"+i);
            }
            //AddData("pr0");
            alert("data added succesfully"); 
        }

        function AddData(rowData){
            let inputdata0 = document.getElementById(rowData).children[0].children[0].value;
            let inputdata1 = document.getElementById(rowData).children[1].children[0].value;
            let inputdata2 = document.getElementById(rowData).children[2].children[0].value;
            let inputdata3 = document.getElementById(rowData).children[3].children[0].value;
            let inputdata4 = document.getElementById(rowData).children[4].children[0].value;
            let inputdata5 = document.getElementById(rowData).children[5].children[0].value;
            let inputdata6 = document.getElementById(rowData).children[6].children[0].value;
            let inputdata7 = document.getElementById(rowData).children[7].children[0].value;
            let inputdata8 = document.getElementById(rowData).children[8].children[0].value;
            let inputdata9 = document.getElementById(rowData).children[9].children[0].value;
            let inputdata10 = document.getElementById(rowData).children[10].children[0].value;
            let inputdata11 = document.getElementById(rowData).children[11].children[0].value;
            let inputdata12 = document.getElementById(rowData).children[12].children[0].value;
            let inputdata13 = document.getElementById(rowData).children[13].children[0].value;
            let inputdata14 = document.getElementById(rowData).children[14].children[0].value;
            let inputdata15 = document.getElementById(rowData).children[15].children[0].value;
            let inputdata16 = document.getElementById(rowData).children[16].children[0].value;
            let inputdata17 = document.getElementById(rowData).children[17].children[0].value;
            let inputdata18 = document.getElementById(rowData).children[18].children[0].value;
            let inputdata19 = document.getElementById(rowData).children[19].children[0].value;
            let inputdata20 = document.getElementById(rowData).children[20].children[0].value;
            let inputdata21 = document.getElementById(rowData).children[21].children[0].value;
            let inputdata22 = document.getElementById(rowData).children[22].children[0].value;
            let inputdata23 = document.getElementById(rowData).children[23].children[0].value;
            let inputdata24 = document.getElementById(rowData).children[24].children[0].value;
            let inputdata25 = document.getElementById(rowData).children[25].children[0].value;
            let inputdata26 = document.getElementById(rowData).children[26].children[0].value;
            let inputdata27 = document.getElementById(rowData).children[27].children[0].value;
            let inputdata28 = document.getElementById(rowData).children[28].children[0].value;
            let inputdata29 = document.getElementById(rowData).children[29].children[0].value;
            let inputdata30 = document.getElementById(rowData).children[30].children[0].value;
            let inputdata31 = document.getElementById(rowData).children[31].children[0].value;
            let inputdata32 = document.getElementById(rowData).children[32].children[0].value;
            let inputdata33 = document.getElementById(rowData).children[33].children[0].value;
            let inputdata34 = document.getElementById(rowData).children[34].children[0].value;
            set(ref(db, ident + "/" + rowData),{
                employeedata: {Name: inputdata0, zonetype: inputdata1, d2: inputdata2, d3: inputdata3, d4: inputdata4, d5: inputdata5, d6: inputdata6, d7: inputdata7, d8: inputdata8, d9: inputdata9, d10: inputdata10, d11: inputdata11, d12: inputdata12, d13: inputdata13, d14: inputdata14, d15: inputdata15, d16: inputdata16, d17: inputdata17, d18: inputdata18, d19: inputdata19, d20: inputdata20, d21: inputdata21, d22: inputdata22, d23: inputdata23, d24: inputdata24, d25: inputdata25, d26: inputdata26, d27: inputdata27, d28: inputdata28, d29: inputdata29, d30: inputdata30, d31: inputdata31, d32: inputdata32, d33: inputdata33, d34: inputdata34}
                }
            ).then(()=>{
            }).catch((error)=>{
                alert("Fail")
                console.log(error)
            })
        }

        function GetCount(){
            let columnCount = document.getElementById("hyster").children[0].rows[0].cells.length;
            let rowCount = document.getElementById("hyster").children[0].rows.length;
            if(rowCount>1){
                try{
                    for(let p = 1; p<rowCount; p++){
                        document.getElementById("hr" + p).remove();
                    }
                    for(let i = 0; i<columnCount; i++){
                        document.getElementById("hyster").children[0].children[0].children[i].children[0].value = "";
                    }
                }catch (error) {
                    console.error(error);
                }
            }

            const dbRef = ref(db);
            let hCounter = 0;
            let bCounter = 0;

            let tempDate = document.getElementById("loaddata").value
            get(child(dbRef, tempDate + "/")).then((snapshot)=>{
                snapshot.forEach((child) => {
                    if(child.key.substring(0,2) == "hr"){
                        hCounter++
                    }else if(child.key.substring(0,2) == "hb"){
                        bCounter++
                    }
                });
                console.log("hCounter:" + hCounter)
                console.log("bCounter:" + bCounter)
                
                let hysterRow = document.getElementById("hyster").children[0].children[0];
                
                for(let i = 1; i<hCounter; i++){
                    let newHysterRow = hysterRow.cloneNode(true);
                    document.getElementById("hyster").children[0].append(newHysterRow);
                    document.getElementById("hyster").children[0].children[i].setAttribute('id', "hr"+i);
                    RetData("hr"+i)
                }
                for(let i = 0; i<hCounter; i++){
                    RetData("hr"+i)
                }
                
            }).catch((error)=>{
                alert("Fail")
                console.log(error)
            })
        }

        function RetData(rowData){
            const dbRef = ref(db);

            let tempDate = document.getElementById("loaddata").value
            get(child(dbRef, tempDate + "/"+ rowData +"/employeedata")).then((snapshot)=>{
                if(snapshot.exists()){
                    console.log(snapshot.val())
                    document.getElementById(rowData).children[0].children[0].value = snapshot.val().Name;
                    document.getElementById(rowData).children[1].children[0].value = snapshot.val().zonetype;
                    document.getElementById(rowData).children[2].children[0].value = snapshot.val().d2;
                    document.getElementById(rowData).children[3].children[0].value = snapshot.val().d3;
                    document.getElementById(rowData).children[4].children[0].value = snapshot.val().d4;
                    document.getElementById(rowData).children[5].children[0].value = snapshot.val().d5;
                    document.getElementById(rowData).children[6].children[0].value = snapshot.val().d6;
                    document.getElementById(rowData).children[7].children[0].value = snapshot.val().d7;
                    document.getElementById(rowData).children[8].children[0].value = snapshot.val().d8;
                    document.getElementById(rowData).children[9].children[0].value = snapshot.val().d9;
                    document.getElementById(rowData).children[10].children[0].value = snapshot.val().d10;
                    document.getElementById(rowData).children[11].children[0].value = snapshot.val().d11;
                    document.getElementById(rowData).children[12].children[0].value = snapshot.val().d12;
                    document.getElementById(rowData).children[13].children[0].value = snapshot.val().d13;
                    document.getElementById(rowData).children[14].children[0].value = snapshot.val().d14;
                    document.getElementById(rowData).children[15].children[0].value = snapshot.val().d15;
                    document.getElementById(rowData).children[16].children[0].value = snapshot.val().d16;
                    document.getElementById(rowData).children[17].children[0].value = snapshot.val().d17;
                    document.getElementById(rowData).children[18].children[0].value = snapshot.val().d18;
                    document.getElementById(rowData).children[19].children[0].value = snapshot.val().d19;
                    document.getElementById(rowData).children[20].children[0].value = snapshot.val().d20;
                    document.getElementById(rowData).children[21].children[0].value = snapshot.val().d21;
                    document.getElementById(rowData).children[22].children[0].value = snapshot.val().d22;
                    document.getElementById(rowData).children[23].children[0].value = snapshot.val().d23;
                    document.getElementById(rowData).children[24].children[0].value = snapshot.val().d24;
                    document.getElementById(rowData).children[25].children[0].value = snapshot.val().d25;
                    document.getElementById(rowData).children[26].children[0].value = snapshot.val().d26;
                    document.getElementById(rowData).children[27].children[0].value = snapshot.val().d27;
                    document.getElementById(rowData).children[28].children[0].value = snapshot.val().d28;
                    document.getElementById(rowData).children[29].children[0].value = snapshot.val().d29;
                    document.getElementById(rowData).children[30].children[0].value = snapshot.val().d30;
                    document.getElementById(rowData).children[31].children[0].value = snapshot.val().d31;
                    document.getElementById(rowData).children[32].children[0].value = snapshot.val().d32;
                    document.getElementById(rowData).children[33].children[0].value = snapshot.val().d33;
                    document.getElementById(rowData).children[34].children[0].value = snapshot.val().d34;
                }else{
                    alert("smth went wrong")
                }
            }).catch((error)=>{
                alert("Fail")
                console.log(error)
            })
        }

        let addData = document.getElementById("savebutton");
        addData.addEventListener('click', LoopData);
        let loadData = document.getElementById("loadbutton");
        loadData.addEventListener('click', GetCount);


