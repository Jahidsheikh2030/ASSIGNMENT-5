1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

answer: 
getElementById: is a function in js this think to remamber get means "pawya" so get something use by  id in html (single element)

getElementsByClassName: is a function in js this think to remamber get means "pawya" so get something use by  class name  in html(all elements with a specific class)

querySelector :  is a function in js this think to remamber Selector means " select kora kichu item " so get something use by  class name also ID  in html


2. How do you **create and insert a new element into the DOM**?

answer :  


const new = document.createElement("h1");


newP.innerText = "This is a new paragraph!";



const container = document.getElementById("container");


container.appendChild(new);  


3. What is **Event Bubbling** and how does it work? 
 answer:

 <div id="parent">
  <button id="child">Button</button>
</div>

<script>
document.getElementById("child").addEventListener("click", () => {
  alert("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked");
}); </script>

that means the box inside have other box , that concept used i can handle events at a higher level , rather than on every child.


4. What is **Event Delegation** in JavaScript? Why is it useful?

answer:

Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element, and handle events triggered by its child elements . if i want to explain this preants have a lot of child , i want gave some task for a child , this process will be must longar then i think her preants if i innform firstly then i can called my need .

const menu = document.getElementById("menu");

menu.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert(`You clicked on: ${e.target.innerText}`);
  }
});


5. What is the difference between **preventDefault() and stopPropagation()** methods?

answer: 

preventDefault() : Prevents the browser's default behavior for an event.

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault(); 
  alert("Link clicked");
});


stopPropagation() : Stops the event from bubbling up to parent elements.

document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation(); 
  alert("Child clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  alert("Parent clicked");
});



