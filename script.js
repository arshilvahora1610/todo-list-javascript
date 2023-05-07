// let title = document.getElementById('tit').value;
// console.log(title);
// let desription = document.getElementById('description');
function update(e){
    e.preventDefault();
     let title = document.getElementById('tit').value;
let desription = document.querySelector('.descrip').value;
// localStorage.clear();
console.log(title);
console.log(desription)

  if(localStorage.getItem('itemsJson')==null){
       itemJsonArray = [];
        itemJsonArray.push([title,desription]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }
  else{
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([title,desription]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }
  tableBody = document.getElementById('tableBody');
  let str ='';
  itemJsonArray.forEach((element,index) => {
    str+=`
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
   
  </tr>`
  });
  tableBody.innerHTML = str;
}

let submit=document.querySelector('#Todo').addEventListener('click',update);
update();   
// alert('hello')