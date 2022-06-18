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
            str += '<tr>\n';
            str += '<td>'+objArr[i].examName+'&emsp;&emsp;</td>\n';
            str += '<td>'+'<button class = "viewButton">View Exam</button>'+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].diffLevel+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].dueDate+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].status+'&emsp;&emsp;</td>\n';
            str += '<td>'+objArr[i].avgTime+'&emsp;&emsp;</td>\n';
            let examName = objArr[i].examName;
            console.log('@@@@@@', examName);
            str += '<td><i class = "fa fa-edit"></i>&emsp;<i class = "fas fa-trash-alt" onClick = "deleteHandler(\''+examName+'\')"></i>&emsp;</td>\n';
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
        diffLevel : 'intro',
        dueDate : '23/06/2021',
        status : 'Active',
        avgTime : '10 mins',   
        isDeleted : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Web development', 
        examName : 'Programming with html and css',
        diffLevel : 'intro',
        dueDate : '23/06/2021',
        status : 'Active',
        avgTime : '10 mins',   
        isDeleted : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Web development', 
        examName : 'Javascript with jquery',
        diffLevel : 'advanced',
        dueDate : '23/06/2021',
        status : 'Hidden',
        avgTime : '15 mins',   
        isDeleted : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Database tech', 
        examName : 'My sql and sql',
        diffLevel : 'intermediate',
        dueDate : '23/06/2021',
        status : 'Active',
        avgTime : '20 mins',   
        isDeleted : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Database tech', 
        examName : 'plsql and sql',
        diffLevel : 'advanced',
        dueDate : '23/06/2021',
        status : 'Hidden',
        avgTime : '10 mins',   
        isDeleted : false 
     }
     objArr.push(techObj);
     techObj = {
        techName : 'Mobile tech', 
        examName : 'History of mobile devices',
        diffLevel : 'advanced',
        dueDate : '23/06/2021',
        status : 'Hidden',
        avgTime : '15 mins',   
        isDeleted : false 
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