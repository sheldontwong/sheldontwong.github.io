const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  const mySrc2 = myImage.getAttribute("src2");
  if (mySrc === "images/my_pic.JPG") {
    myImage.setAttribute("src", "images/penguin.svg");
  } else {
    myImage.setAttribute("src", "images/my_pic.JPG");
  }
};

myButton.onclick = () => {
  setUserName();
  myHeading.textContent = `Why change your name?  ${myName},`;
};

function setUserName() {
  const myName = prompt("What's your name?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName},`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hi ${storedName},`;
}


