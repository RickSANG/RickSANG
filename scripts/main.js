const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MYportrait.png") {
    myImage.setAttribute("src", "images/tafei.png");
    alert("😇关注塔菲谢谢喵~");   
  } else {
    myImage.setAttribute("src", "images/MYportrait.png");
    alert("😭不要举办塔菲");
  }
};
