window.onload = () => {
  // SELECTING PARENT LIST
  const listItems = document.querySelectorAll("ul li");
  console.log(listItems);

  for (let e of listItems) {
    e.classList.add("list");
  }

  const ul = document.querySelector("ul");
  console.log(ul);
  // Going to take O(N) time, yaa phr it will update the entire ul just to add
  // one single element inside the ul
  let str = ul.innerHTML;
  str += '<li class="list">Machine Learning</li>';
  ul.innerHTML = str;

  // Poori list refresh nhi karni, bas ek single element ko add karna hai
  // toh kya krey
  // 1. Ek naya element banao
  // 2. uske andar jo content daalna hai daalo
  // 3. sirf us element ko last mei add krdo, baaki kisi cheez ko mat chhedo

  let li = document.createElement("li");
  li.innerText = "Data Science";
  li.classList.add("list");

  ul.prepend(li); // Will add list item at the start of ul
  ul.appendChild(li); // Will add list item at the end of ul
  const developementCourses = document.querySelector("#development-courses");
  console.log(developementCourses);

  //   developementCourses.appendChild('Gaming'); // This will make browser console
  // angry

  li = document.createElement("li");
  li.innerText = "Gaming";
  li.classList.add("list");

  developementCourses.before(li);
  developementCourses.after(li);

  // DELETING ELEMENTS FROM DOM
  // 1. removeChild(): This will help you delete an element using parent of that element
  ul.removeChild(li); // will remove the li child inside of parent ul

  const h1 = document.querySelector("h1");
  h1.remove(); // Will remove the element without using parent

};
