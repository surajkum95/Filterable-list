// let listofNames = [
//     "suraj", "kumar", "sanjay", "ranju"
// ];
// const datalisttag = document.getElementById("contactList");
// function searchName(key){
//     datalisttag.innerHTML="";
//     for(let i = 0; i < listofNames.length; i++){
//         if((listofNames[i].indexOf(key)) > -1){
//             let node = document.createElement("option");
//             let value = document.createTextNode(listofNames[i]);
//             node.appendChild(value);

//             datalisttag.appendChild(node);
//         }
//     }
// }
function searchName(key){
    const values = document.querySelectorAll(".li-item");
    const parenttag = document.getElementById('contacts');
    for(let i = 0; i < values.length; i++){
       if((values[i].textContent.toUpperCase().indexOf(key.toUpperCase())) === -1){
            values[i].hidden = true;
       } else {
        values[i].hidden = false;
       }
    console.log(values[0].textContent);
    }
    
}