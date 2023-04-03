function createbutton(event){
        event.preventDefault();
        const em = document.getElementById("email");
        const email = em.value;
        const sp = document.getElementById("setpassword");
        const setpassword = sp.value;
        const cp = document.getElementById("confirmpassword");
        const confirmpassword = cp.value;
        const errem = document.getElementById("erroremail");
        const errsp = document.getElementById("errorsetpassword");
        const errcp = document.getElementById("errorconfirmpassword");
        let error = false;
        if(email == ''){
            errem.innerHTML = 'please enter email';
            errem.style.color = 'red';
            error = true;
        }
        if(setpassword == ''){
            errsp.innerHTML = 'please set password';
            errsp.style.color = 'red';
            error = true;
        }
        if(confirmpassword != setpassword){
            errcp.innerHTML = 'please enter same password as per setpassword';
            errcp.style.color = 'red';
            error = true;
        }
        if(confirmpassword == ''){
            errcp.innerHTML = 'please re-enter password';
            errcp.style.color = 'red';
            error = true;
        }
         if(error){
             return false;
        }
        alert("your account is created");
        const data = {
            email,
            setpassword
        }
        console.log(localStorage.getItem('ceo'));
        let getitem = localStorage.getItem('ceo');
        if(getitem === null){
             getitem = {
                 key1 : [
                     data
                 ]
             }
        }
        else{
             getitem = JSON.parse(getitem);
             getitem.key1.push(data);
             console.log(getitem);
        }
         localStorage.setItem('ceo',JSON.stringify(getitem));
     
}
function loginbutton(event){
    event.preventDefault();
    const em = document.getElementById("email");
    const email = em.value;
    const pas = document.getElementById("password");
    const password = pas.value;
    const errem = document.getElementById("erroremail");
    const errpas = document.getElementById("errorpassword");
    let error = false;
    if(email == ''){
        errem.innerHTML = 'please enter email';
        errem.style.color = 'red';
        error = true;
    }
    if(password == ''){
        errpas.innerHTML = 'please enter password';
        errpas.style.color = 'red';
        error = true;
    }
    
    let data1 = localStorage.getItem('ceo');
    data1 = JSON.parse(data1);
    let obj = data1.key1.find(o => o.email === email && o.setpassword === password)
    
    if(obj == undefined){
        alert('your entered wrong details');
        error = true;
    }
    else{
        alert('your login is success');
        error = false;
    }
    if(error){
        return true;
    }
    if(error == false){
    const table = document.getElementById('tabletitle');
    table.style.display = 'block';
    }
    addrecord();
}

function addrecord(){
    let data1 = localStorage.getItem('studentdetails');
    const data2 = JSON.parse(data1);
    
   
    

    const tb = document.getElementById('tbody');
    tb.innerHTML = '';
    for(let i=0;i<data2.l1.length;i++){
        console.log(data2.l1[i].fullname);
       const row = ` <tr>
       <td>${data2.l1[i].fullname}</td>
       <td>${data2.l1[i].course}</td>
       <td>${data2.l1[i].id}</td>

   </tr>`
    tb.innerHTML +=row;

    }

}
function ok(){
    const table = document.getElementById('tabletitle');
    table.style.display = 'none';
    
}

function studentdetails(event){
    event.preventDefault();
    const fn = document.getElementById('fullname');
    const fullname = fn.value;
    const co = document.getElementById('course');
    const course = co.value;
    const i = document.getElementById('id');
    const id = i.value;
    const errfn = document.getElementById('errorfullname');
    const errco = document.getElementById('errorcourse');
    const errid = document.getElementById('errorid');
    let error = false;
    if(fullname == ''){
        errfn.innerHTML = 'please your full name';
        errfn.style.color = 'red';
        error = true;
    }
    if(course == ''){
        errco.innerHTML = 'please enter course';
        errco.style.color = 'red';
        error = true;
    }
    if(id == ''){
        errid.innerHTML = 'please enter your id';
        errid.style.color = 'red';
        error =true;
    }
    if(error){
        return false;
    }
    if(error == false){
        const re = document.getElementById('result');
        re.innerHTML = 'student login successfully';
        re.style.color = 'red';
        re.style.fontSize = '30px';
    }
    const data = {
        fullname,
        course,
        id
    }
   // console.log(localStorage.getItem('studentdetails'));
        let data1 = localStorage.getItem('studentdetails');
        if(data1 === null){
            data1 = {
                l1 : [
                    data
                ]
            }
           // console.log(data1);
        }
        else{
            data1 = JSON.parse(data1);
            data1.l1.push(data);
            console.log(data1);
        }
        localStorage.setItem('studentdetails',JSON.stringify(data1));
       
        
    
}
        
    
