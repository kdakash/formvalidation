

let userListId=[100,101]

let userListDetails= [
  
  { username : 'jim', age : 45 , phonenumber : 8043231254 , mailid : "jim@cat.com" , pwd : "jim123"},

  { username : 'jam', age : 46 , phonenumber : 8043233254 , mailid : "jam@cat.com" , pwd : "jam123"}

]

function view(id){

    const index = userListId.indexOf(id);

    console.log(index)

    const d=userListDetails[index]

    console.log(d)

    console.log(d['username'])

   /* document.body.innerText = ` 
    
    name : ${d['name']} 

    age : ${d['age']}

    phonenumber : ${['phonenumber']} 

    mailid : ${['mailid']}

    
    ` */

}

const button = document.getElementById('view'); 
const button1= document.getElementById('submit');
 const cid=document.getElementById('cid').value ; 
button1.onclick = console.log(cid);

