document.getElementById("firstFormThirdInputId").onclick = function() {
    if(document.getElementById('firstFormThirdInputId').onclick){ 
        let s1 = document.getElementById('firstFormFirstInputId').value
        let s2 = document.getElementById('firstFormSecondInputId').value
        let s = 1/2*s1*s2;
        let num = document.getElementById('firstFormFirstPId');       
        num.innerHTML=s; 
    }
}
document.getElementById("secondFormThirdInputId").onclick = function() {
    if(document.getElementById('secondFormThirdInputId').onclick){ 
        let d1 = document.getElementById('secondFormFirstInputId').value
        let d2 = document.getElementById('secondFormSecondInputId').value
        let d  = d1.length == d2.length;
        let num = document.getElementById('secondFormFirstPId');       
        num.innerHTML= d; 
    }
}
document.getElementById("thirdFormFirstInputId").onclick = function() {
    if(document.getElementById('thirdFormFirstInputId').onclick){ 
        let arr = []; 
        for(let i=0; i < 5; i++) {
            let r=i+1
            arr[i] = prompt('Введите любое число '+r);      
            if(arr[i] === null) {                           
                alert('Отмена');
                return;
            }
            if(arr[i] === '') {                             
                alert('Вы не указали число');
                arr[i] = prompt('Введите любое число'+i); 
            }
        }
        let mre = arr.sort((a, b) => a - b).pop();
        let mr = arr.sort((a, b) => a - b).shift();
        let num = document.getElementById('thirdFormFirstSpanId');  
        let num1 = document.getElementById('thirdFormSecondSpanId');        
        num.innerHTML= mre;
        num1.innerHTML= mr;
    }
}

function zero_first_format(value)  {
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}
function date_time(){
    let current_datetime = new Date();
    let day = zero_first_format(current_datetime.getDate());
    let month = zero_first_format(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();
    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());
    let seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}
setInterval(function (){document.getElementById('current').innerHTML = date_time()}, 1000);



document.getElementById("time").onclick = function(){
        Timer.countDown()
}
document.getElementById("time1").onclick = function(){
    Timer.stopDown()
}
document.getElementById("time2").onclick = function(){
    Timer.startOver()
}
let sec = 0;
let min = 0; 
let hour = 0;
let timer;
let time = document.getElementById('clock');
let res = document.getElementById('clock1');
let timeSec = 0,
    timeMin = 0,
    timeHout = 0;
let Timer = {
    countDown() {   
        ++sec;
            if(sec == 60) {sec = 0; min++;}
            
            if(min == 60) {min = 0; hour++;}
            
            let h, m, s;
            
            if(sec < 10) s = '0' + sec;
            else s = sec;
            
            if(min < 10) m = '0' + min;
            else m = min;
            
            if(hour < 10) h = '0' + hour;
            else h = hour;
        time.innerHTML = h + ':' + m + ':' + s;
        timer = setTimeout("Timer.countDown()", 1000);
    },
    startDown() {
    if(!timer)
        this.countDown();
    },
    stopDown() {
        if(timer) {
            clearInterval(timer)
            timer=null;
            
            if(timeSec == 0){
                timeSec = sec;
                timeSecAll = timeSec
            }
            else{
                timeSecAll = sec - timeSec;
                timeSec = sec
            }

            if(timeMin == 0){
                timeMin = min;
                timeMinAll = timeMin
            }
            else{
                timeMinAll = min - timeMin;
                timeMin = min
            }

            if(timeHout == 0){
                timeHout = hour;
                timeHoutAll = timeHout
            }
            else{
                timeHoutAll = hour - timeHout;
                timeHout = hour
            }
            res.innerHTML =  timeHoutAll + ':' + timeMinAll + ':' +  timeSecAll;
            timeSecAll = 0;
            timeMinAll = 0;
            timeHoutAll = 0;
        }
    },
    startOver(){
        sec = 0;
        min = 0; 
        hour = 0;
        timeSec = 0;
        timeMin = 0;
        timeHout = 0;
        if(timer || !timer) {
            clearInterval(timer);
            timer = null;
            let h, m, s;
            s = '0' + sec;
            m = '0' + min;
            h = '0' + hour;
            time.innerHTML = h + ':' + m + ':' + s;
            res.innerHTML =  timeHout + ':' + timeMin + ':' +  timeSec;
        }
    }
}

const id1 = document.getElementById("r1");
const id2 = document.getElementById("r2");
const id3 = document.getElementById("r3");
const id4 = document.getElementById("r4");
const id5 = document.getElementById("r5");
const id6 = document.getElementById("r6");
const id7 = document.getElementById("r7");
const id8 = document.getElementById("r8");
const id9 = document.getElementById("r9");
const id10 = document.getElementById("r10");
const id11 = document.getElementById("r11");
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");
const test4 = document.getElementById("test4");
const test5 = document.getElementById("test5");
const test6 = document.getElementById("test6");
const test7 = document.getElementById("test7");
const test8 = document.getElementById("test8");
const test9 = document.getElementById("test9");
const test10 = document.getElementById("test10");
const test11 = document.getElementById("test11");
let go = 0;
let no = 0;
let Test = {
    countDown1() {   
        go++;

    },
    stopDown1() {
        no++;
    }
}
function test(onclickId, testBefo, testAfter){
    onclickId.onclick = function () {
        if(onclickId.onclick){
            testBefo.classList.add("testStart"); 
            testBefo.classList.remove("test");  
            testAfter.classList.add("test"); 

            let numGo = document.getElementById('ert2');       
            let numNo = document.getElementById('ert3');              
            numGo.innerHTML= go;        
            numNo.innerHTML= no;          
            let numeric = document.getElementById('ert1231')
            if(go==10){
                numeric.innerHTML = "Гуру JS"
            }        
            if(go>=8 && go!=10){
                numeric.innerHTML = "Отличный результат"
            }
            if(go>=5 && go<8){
                numeric.innerHTML = "Ты справился"
            }
            if(go<5 && go>3){
                numeric.innerHTML = "Не олень, но надо подучить"
            }
            if(go<=3){
                numeric.innerHTML = "Наверное JS не твое"
            }
            if(onclickId == id11){
                go = 0;
                no = 0;
            }       
        }  
    }
}

test(id1, test1, test2);
test(id2, test2, test3);
test(id3, test3, test4);
test(id4, test4, test5);
test(id5, test5, test6);
test(id6, test6, test7);
test(id7, test7, test8);
test(id8, test8, test9);
test(id9, test9, test10);
test(id10, test10, test11);
test(id11, test11, test1);

      
