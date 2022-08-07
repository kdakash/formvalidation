
let userListId=[100,101]

let userListDetails= [
  
  { username : 'jim', age : 45 , phonenumber : 8043231254 , mailid : "jim@cat.com" , pwd : "jim123"},

  { username : 'jam', age : 46 , phonenumber : 8043233254 , mailid : "jam@cat.com" , pwd : "jam123"}

]


function addDatatoUserList(username,age,phonenumber,mailid,pwd){

    let j=userListId.length - 1;

    let i= userListId[j] + 1;

  //  userListDetails[j+1] = { username : username , age : age , phonenumber : phonenumber, mailid : mailid, pwd : pwd}; 

  userListDetails.push({ username : username , age : age , phonenumber : phonenumber, mailid : mailid, pwd : pwd});

  //  userListId[j+1]=i;

   userListId.push(i);

   savetolocal(i,userListDetails[j+1]);



  


    return true;

}

function savetolocal(i,d)
{
  localStorage.setItem(i,JSON.stringify(d));
}


// VIEW SECTION 




function gettingDataforRegistration(){

    const username = document.getElementById('username').value; 
    const age= document.getElementById('age').value;
    const phonenumber= document.getElementById('phonenumber').value;
    const mailid= document.getElementById('mailid').value;
    const pwd= document.getElementById('pwd').value;
    addDatatoUserList(username,age,phonenumber,mailid,pwd);
    
}



function onlogin(){
   const logincatid=  Number(document.getElementById('logincatid').value); 
  const loginpwd=document.getElementById('loginpwd').value;


 
   const checkvalidkey = userListId.includes(logincatid);


    if(checkvalidkey){
      
        const index = userListId.indexOf(logincatid);
   
       const c=  userListDetails[index]['pwd'] === loginpwd;
    
        if (c){
          
         return true;
          }
        else{
         alert('invalid password');
         return false; 
        }

    }
    else{
     alert("registration does not exists");
     return false;
    }


}



