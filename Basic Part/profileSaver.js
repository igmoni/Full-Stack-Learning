let myLeads = [];

const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ulEl");
const del = document.querySelector("#del");
const tab = document.querySelector("#tab");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.google.com" }];

tab.addEventListener("click ", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

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
  ulEl.innerHTML = listItems;
}

del.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

btn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});
