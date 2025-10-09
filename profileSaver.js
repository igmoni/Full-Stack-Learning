let myLeads = [];

const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ulEl");

localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

console.log(leadsFromLocalStorage);

btn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  ulEl.innerHTML += `<li><a target="_blank" href='${inputEl.value}'> ${inputEl.value}  </a></li>`;
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
  console.log(localStorage.getItem("myLeads"));
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
}
