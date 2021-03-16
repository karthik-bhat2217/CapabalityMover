function fun1() {
  var name = document.getElementById("list").value;
  if (name) {
    var ol = document.getElementById("myOL");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ol.appendChild(li);
    //ol.innerHTML=`<br><br>`;
  } else {
    alert("Enter a text");
  }
  li.onclick = removeItem;
}
function removeItem(e) {
  e.target.remove();
}
document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
});
