let element = document.getElementById("elements");
let fc = document.getElementById("font-color");
let bg = document.getElementById("bg-color");
let ta = document.getElementById("text-align");
let text = document.getElementById("text");
let result = document.getElementById("result");
let fullResult = document.getElementById("full-result");
let convertBtn = document.getElementById("submit-btn");
let code = document.getElementById("code");
let codeResult = document.getElementById("code-result");
let html = document.getElementById("html");
let close = document.getElementById("close");
let save = document.getElementById("save");
let copy = document.getElementById("copy");

function inputResponse() {
  result.innerHTML = `<${elements.value} style="color:${fc.value};background:${bg.value};text-align:${ta.value}">\n  ${text.value}</${elements.value}>`;
}
text.addEventListener("input", inputResponse);
elements.addEventListener("input", inputResponse);
fc.addEventListener("input", inputResponse);
ta.addEventListener("input", inputResponse);
bg.addEventListener("input", inputResponse);

text.addEventListener("keyup", (event) => {
  console.log(event.key);
  if (event.key == "Enter") {
    fullResult.innerHTML += result.innerHTML;
    text.value = "";
    result.innerHTML = "";
  }
});

convertBtn.addEventListener("click", () => {
  html.style.display = "flex";
  code.innerText = `${fullResult.innerHTML}`;
  codeResult.innerHTML = `${fullResult.innerHTML}`;
  close.addEventListener("click", () => {
    html.style.display = "none";
  });
});

copy.addEventListener("click", () => {
  code.select();
  //what is this execCommand
  document.execCommand("copy");
  alert("Password has been copied to clipboard");
});
