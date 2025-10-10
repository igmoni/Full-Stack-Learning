let myLeads = [];

const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ulEl");
const del = document.querySelector("#del");
const tab = document.querySelector('#tab')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [
  {url : 'https;//www.google.com'}
]

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a target="_blank" href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`;
  }
}

del.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

btn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  ulEl.innerHTML += `<li><a target="_blank" href='${inputEl.value}'> ${inputEl.value}  </a></li>`;
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});
