let myLeads = [];
const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ulEl");

btn.addEventListener("click", () => {
  renderLeads();
  myLeads.push(inputEl.value);
  ulEl.innerHTML += `<li><a target="_blank" href='${inputEl.value}'> ${inputEl.value}  </a></li>`;
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
        <a target="_blank" href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`;
  }
  localStorage.setItem("myLeads", inputEl.value);
  console.log(localStorage.getItem("myLeads"));
}
console.log(localStorage.getItem("myLeads"));

localStorage.setItem("myLeads", "www.example.com");

localStorage.clear();
