// get elements
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const container = document.querySelector("main");
const btn = document.querySelector("button");

// create and append to main 60 divs for minutes
for (let i = 0; i < 60; i++) {
  const minuteDiv = document.createElement("div");
  minuteDiv.classList.add("minSigns");
  container.append(minuteDiv);
}
// select all min divs
const minSigns = document.querySelectorAll(".minSigns");
// position every minute which is not an hour
minSigns.forEach((min, index) => {
  if (index % 5 !== 0) {
    min.style.transform = `rotate(${index * 6}deg)`;
    min.textContent = "I";
  } else {
    container.removeChild(min);
  }
});

// create and append 12 hour divs
for (let i = 12; i > 0; i--) {
  const hourDiv = document.createElement("div");
  hourDiv.classList.add("hourNums");
  hourDiv.textContent = i;
  container.append(hourDiv);
}
const numbers = document.querySelectorAll(".hourNums");

// position clock numbers
numbers.forEach((number) => {
  const value = Number(number.textContent);
  number.style.transform = `rotate(${value * 30}deg)`;
});

// Dictionary

const dic = {
  clear: "Clear Mode",
  dark: "Dark Mode",
};

// functions

function handleTime() {
  // get current time
  const now = new Date();
  // amount of degrees to increase each time with seconds and minutes
  const sixtySteps = 6;
  // amount of degrees to increase each time with hours
  const twelveSteps = 30;
  // get current time hours
  const nowHours = now.getHours();
  // we avoid having more than 12 to calculate the rotation
  const hours12 = nowHours >= 12 ? nowHours - 12 : nowHours;
  // we apply the amount of rotation to each handle
  seconds.style.transform = `rotate(${now.getSeconds() * sixtySteps}deg)`;
  minutes.style.transform = `rotate(${now.getMinutes() * sixtySteps}deg)`;
  hours.style.transform = `rotate(${hours12 * twelveSteps}deg)`;
}

function handleClick(e) {
  const target = e.target.textContent;
  if (target === dic.dark) {
    document.documentElement.style.setProperty("--clearBodyBGC", "#222");
    document.documentElement.style.setProperty("--clearMainBGC", "#111");
    document.documentElement.style.setProperty("--clearBodyColor", "#fff");
    document.documentElement.style.setProperty("--clearHourHandBGC", "#fff");
    document.documentElement.style.setProperty("--clearMinuteHandBGC", "#fff");
    document.documentElement.style.setProperty("--clearDotBGC", "#fff");
    document.documentElement.style.setProperty("--clearButtonColor", "#fff");
    document.documentElement.style.setProperty(
      "--clearButtonHoverBGC",
      "#ebebeb"
    );
    document.documentElement.style.setProperty(
      "--clearButtonHoverColor",
      "#000"
    );
    btn.textContent = dic.clear;
  } else {
    document.documentElement.style.setProperty("--clearBodyBGC", "#fff");
    document.documentElement.style.setProperty("--clearMainBGC", "#ebebeb");
    document.documentElement.style.setProperty("--clearBodyColor", "#000");
    document.documentElement.style.setProperty("--clearHourHandBGC", "#000");
    document.documentElement.style.setProperty("--clearMinuteHandBGC", "#000");
    document.documentElement.style.setProperty("--clearDotBGC", "#000");
    document.documentElement.style.setProperty("--clearButtonColor", "#000");
    document.documentElement.style.setProperty("--clearButtonColor", "#000");
    document.documentElement.style.setProperty("--clearButtonHoverBGC", "#222");
    document.documentElement.style.setProperty(
      "--clearButtonHoverColor",
      "#fff"
    );
    btn.textContent = dic.dark;
  }
}

// event listeners
btn.addEventListener("click", handleClick);

// init
setInterval(handleTime, 100);
