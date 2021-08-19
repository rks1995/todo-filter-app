const form = document.getElementById('form');
const itemList = document.getElementById('items');
const inputList = document.querySelector('.input');
const errorMsg = document.querySelector('.msg');
const filterItem = document.getElementById('filter');

//remove item
const deleteItem = (e) => {
  if (e.target.className === 'delete') {
    //selecting parent div
    let li = e.target.parentElement;
    //removing the item from the list
    itemList.removeChild(li);
  }
};

//addItem
const addItem = (e) => {
  e.preventDefault();

  if (inputList.value === '') {
    errorMsg.classList.add('error');
    errorMsg.innerHTML = 'Add something !!';
    setTimeout(() => {
      errorMsg.innerHTML = '';
      errorMsg.classList.remove('error');
    }, 3000);
  } else {
    //create new div
    let div = document.createElement('div');
    div.className = 'item';

    //create new li element
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputList.value));

    //create delete btn
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('delete'));

    //adding li and deleteBtn into newDiv
    div.appendChild(li);
    div.appendChild(deleteBtn);

    //append newdiv into itemList
    itemList.append(div);

    inputList.value = '';
  }
};

//filter item
const filter = (e) => {
  //convert text to lowercase
  let text = e.target.value.toLowerCase();

  //get all list from itemList
  let items = itemList.getElementsByTagName('div');

  //conver html collection to array
  const itemArr = Array.from(items);

  itemArr.forEach((item) => {
    const itemName = item.firstElementChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

//form event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', deleteItem);

//filter event
filterItem.addEventListener('keyup', filter);
