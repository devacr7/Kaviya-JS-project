let objArr = [];
var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

function onLoadHandler() {
    loadObjArr();
    connectedCallBack();
}

function connectedCallBack() {
    wdStr = constructTable(objArr, 'Web development');
    document.querySelector('.wdValues').innerHTML = wdStr;
    dbStr = constructTable(objArr, 'Database tech');
    document.querySelector('.dbValues').innerHTML = dbStr;
    mdStr = constructTable(objArr, 'Mobile tech');
    document.querySelector('.mdValues').innerHTML = mdStr;
}


function constructTable(objArr, techName) {

    let str = '';
    str += '<table>\n';
    str += '<tr class = "displayNone">\n';
    str += '<th>Exam&emsp;&emsp;</th>\n';
    str += '<th>View Exam&emsp;&emsp;</th>\n';
    str += '<th>Difficulty Level&emsp;&emsp;</th>\n';
    str += '<th>Due Date&emsp;&emsp;</th>\n';
    str += '<th>Status&emsp;&emsp;</th>\n';
    str += '<th>Average Test Time&emsp;&emsp;</th>\n';
    str += '<th>Exam Controls&emsp;&emsp;</th>\n';
    str += '</tr>\n';
    for(var i=0;i<objArr.length;i++) {
        if(objArr[i].techName === techName && !objArr[i].isDeleted) {
            str += '<tr id = '+(i+1)+'>\n';
            str += '<td>'+objArr[i].examName+'&emsp;&emsp;</td>\n';
            str += '<td>'+'<button class = "viewButton">View Exam</button>'+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].diffLevel+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].dueDate+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].status+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].avgTime+' mins&emsp;&emsp;</td>\n';
            let examName = objArr[i].examName;
            console.log('@@@@@@', examName);
            str += '<td><i class = "fa fa-edit" onClick = "editHandler(\''+examName+'\')"></i>&emsp;<i class = "fas fa-trash-alt" onClick = "deleteHandler(\''+examName+'\')"></i>&emsp;</td>\n';
            str += '</tr>\n';
            str += '</br>\n';
        }
    }
    str += '</table>\n';

    // let str = '';
    // str += '<table>\n';
    // str += '<tr class = "displayNone">\n';
    // str += '<th>Exam&emsp;&emsp;</th>\n';
    // str += '<th>View Exam&emsp;&emsp;</th>\n';
    // str += '<th>Difficulty Level&emsp;&emsp;</th>\n';
    // str += '<th>Due Date&emsp;&emsp;</th>\n';
    // str += '<th>Status&emsp;&emsp;</th>\n';
    // str += '<th>Average Test Time&emsp;&emsp;</th>\n';
    // str += '<th>Exam Controls&emsp;&emsp;</th>\n';
    // str += '</tr>\n';
    // str += '<tr>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '<td>1&emsp;&emsp;</td>\n';
    // str += '</tr>\n';
    // str += '</br>\n';
    // str += '<tr>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '<td>2&emsp;&emsp;</td>\n';
    // str += '</tr>\n';
    // str += '</table>\n';
    console.log('@@@ str ',str);
    return str;
}

function loadObjArr() {
    objArr = [];
    let techObj = {
        techName : 'Web development', 
        examName : 'DHTML suite for beginners',
        diffLevel : 'Intro',
        dueDate : '2022-06-22',
        status : 'Active',
        avgTime : 10,   
        isDeleted : false ,
        isEditable : false
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Web development', 
        examName : 'Programming with html and css',
        diffLevel : 'Intro',
        dueDate : '2022-06-22',
        status : 'Active',
        avgTime : 10,   
        isDeleted : false,
        isEditable : false
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Web development', 
        examName : 'Javascript with jquery',
        diffLevel : 'Advanced',
        dueDate : '2022-06-22',
        status : 'Hidden',
        avgTime : 15,   
        isDeleted : false,
        isEditable : false
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Database tech', 
        examName : 'My sql and sql',
        diffLevel : 'Intermediate',
        dueDate : '2022-06-22',
        status : 'Active',
        avgTime : 20,   
        isDeleted : false,
        isEditable : false
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Database tech', 
        examName : 'plsql and sql',
        diffLevel : 'Advanced',
        dueDate : '2022-06-22',
        status : 'Hidden',
        avgTime : 10,   
        isDeleted : false,
        isEditable : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Mobile tech', 
        examName : 'History of mobile devices',
        diffLevel : 'Advanced',
        dueDate : '2022-06-22',
        status : 'Hidden',
        avgTime : 15,   
        isDeleted : false,
        isEditable : false 
     }
     objArr.push(techObj);
     console.log('@@@ obj ',objArr);
     return objArr;
}

function deleteHandler(examName) {
    console.log('@@@ detail ', examName);
    for(var i=0;i<objArr.length;i++) {
        if(objArr[i].examName === examName) {
            objArr[i].isDeleted = true;
            connectedCallBack();    
            break;
        }
    }
}


function editHandler(examName) {
     var i;
    for(i=0;i<objArr.length;i++) {
        if(objArr[i].examName === examName) {
            objArr[i].isEditable = true;
            break;
        }
    }
    console.log(objArr);
   document.getElementById('diffLevel').value = objArr[i].diffLevel;
    document.getElementById('dueDate').value = objArr[i].dueDate;
    document.getElementById('avgTime').value = objArr[i].avgTime;
    document.querySelector(".page1").style.width = "80%";
    document.querySelector(".page1").style.float = "left";
    document.querySelector(".page2").style.width = "20%";
    document.querySelector(".page2").style.float = "left";
    document.querySelector(".page2").style.textAlign = "center";
    document.querySelector(".page2").style.visibility = "visible";
}

function saveHandler() {

    for(var i=0;i<objArr.length;i++) {
        if(objArr[i].isEditable === true) {
            objArr[i].isEditable = false;
            objArr[i].diffLevel = document.getElementById('diffLevel').value;
            objArr[i].dueDate = document.getElementById('dueDate').value;
            objArr[i].avgTime = document.getElementById('avgTime').value;
            console.log('@@@ selected values ',document.getElementById('diffLevel'),' ',document.getElementById('dueDate'),' ',document.getElementById('avgTime'));
            connectedCallBack();  
            document.querySelector(".page1").style.width = "100%";
            document.querySelector(".page2").style.width = "0%";
            document.querySelector(".page2").style.visibility = "hidden";
            break;
        }
    }
    
}