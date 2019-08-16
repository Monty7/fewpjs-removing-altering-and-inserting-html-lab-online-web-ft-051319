// Write your code here!

var element = document.createElement('div');

document.body.appendChild(element);

var ul = document.createElement('ul');

for(let i = 1; i < 3; i++){
  let li = document.createElement('li');
  li.innerHTML = (i).toString();
  ul.appendChild(li);
}