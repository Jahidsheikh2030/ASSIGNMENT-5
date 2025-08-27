const hearts = document.querySelectorAll(".heart");
const heartCountEl = document.getElementById("heartcount");
let count = parseInt(heartCountEl.innerText);

hearts.forEach((heart) => {
  heart.addEventListener("mouseenter", () => {
    heart.src = "assets/heart.png";
  });

  heart.addEventListener("mouseleave", () => {
    heart.src = "assets/w-heart.png";
  });

  heart.addEventListener("click", () => {
    count++;
    heartCountEl.innerText = count;
  });
});

// On clicking a card's **Call Button**, following actions will happen:
//   - Show an **alert** with a message including the service name and number
//   - Each call will **cut 20 coins**. Reduce Coin after each click.
//   - If coins are less than 20, show a relevant alert and terminate the process.
//   - Add this service into the **Call History section** with:
//     - Service name
//     - Service number


const callbtns = document.querySelectorAll(".callbtn");
const countcoinEl = document.getElementById("countcoin");
let coinCount = parseInt(countcoinEl.innerText);

callbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Insufficient balance!");
      return;
    }

    coinCount -= 20;
    countcoinEl.innerText = coinCount;

    const parentBox = btn.closest(".Card");
    const pTags = parentBox.querySelectorAll("p");

    const firstText = pTags[0]?.innerText || "N/A";
    const secondText = pTags[1]?.innerText || "N/A";

    alert(`Calling:\n${firstText}\n${secondText}`);

    
    const historyContainer = document.getElementById("callHistory");

    if (!historyContainer) {
      console.error("Call history container not found.");
      return;
    }

    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const entry = document.createElement("div");
    entry.className = "border-t pt-2 text-sm";

    entry.innerHTML = `
  <div class="flex justify-between items-start">
    <div>
      <p class="font-semibold">${firstText}</p>
      <p class="text-gray-600">${secondText}</p>
    </div>
    <p class="text-xs text-gray-400 whitespace-nowrap">${time}</p>
  </div>
`;


    historyContainer.appendChild(entry); 
  });
});










const copybtn = document.querySelectorAll(".copybtn");
const copycoinEl = document.getElementById("copycoin");
let copyCount = parseInt(copycoinEl.innerText);

copybtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    const textToCopy = document.getElementById("textToCopy").innerText;

    
    navigator.clipboard.writeText(textToCopy).then(() => {
      
      alert("Copied to clipboard: " + textToCopy);

      
      copyCount++;
      copycoinEl.innerText = copyCount;
    }).catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Copy failed!");
    });
  });
});



const Clearbtn = document.getElementById("Clearbtn");

Clearbtn.addEventListener("click", () => {
  const historyContainer = document.getElementById("callHistory");
  
  if (historyContainer) {
    historyContainer.innerHTML = ""; 
  }
});


