// obtener datos que viene por parametro
let userName = document.getElementById("userName");
const data = window.location.search;
const urlParams = new URLSearchParams(data);
const
  keys = urlParams.keys(),
  values = urlParams.values(),
  entries = urlParams.entries();

console.log(values);
for (const value of values){ 
    userName.innerHTML += `${value}`
    console.log(value)
};
