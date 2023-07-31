import { auth,app,db } from "./firebase.mjs"
import { doc, setDoc , updateDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const name= document.getElementById('name').value;
const email= document.getElementById('email').value;
const password= document.getElementById('psw').value;
const address= document.getElementById('address').value;


// const btn =document.getElementById('btn1')
// btn.addEventListener('click',()=>{
//     window.location.href='./update.html'

// })
const btn=document.getElementById("update");

btn.addEventListener('click',async()=>{

    const currentuid=(auth.currentUser.uid);
    const washingtonRef = doc(db, "users", currentuid);
    
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        
        name:name.value,
        email:email.value,
        password:password.value,
        address:address.value,
        

});
});
