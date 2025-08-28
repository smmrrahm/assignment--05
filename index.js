// Heart Button Functionality
let heartCount = 0;

function updateHeart() {
  heartCount++;
  document.getElementById("heartCount").textContent = heartCount;
}

document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", updateHeart);
});

let coins = 100;

function makeCaller(name, number) {
  if (coins < 20) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  alert(`Calling ${name} (${number})`);

  coins -= 20;
  document.getElementById("coin-count").textContent = coins;

  const historyList = document.getElementById("callHistory");
  const card = document.createElement("div");
  card.className =
    "p-3 border rounded-lg shadow-sm flex justify-between items-center";
  card.innerHTML = `
     <div>
      <p class="font-bold">${name}</p>
      <p class="text-xs text-gray-500">${number}</p>
     </div>
     <span class="text-xs text-gray-400">${new Date().toLocaleTimeString()}</span>
     `;
  historyList.prepend(card);
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}

let copyCount = 0;
function copyNumber(number) {
  navigator.clipboard
    .writeText(number)
    .then(() => {
      alert(`Copied ${number} to clipboard!`);
      copyCount++;
      document.getElementById("copy-count").textContent = copyCount;
    })
    .catch((err) => {
      alert("Failed to copy!");
      console.error(err);
    });
}
