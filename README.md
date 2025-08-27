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

that means the box inside have other box , that concept useed i can handle events at a higher level , rather than on every child.


4. What is **Event Delegation** in JavaScript? Why is it useful?


5. What is the difference between **preventDefault() and stopPropagation()** methods?