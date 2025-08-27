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


const callbtn = document.querySelectorAll(".callbtn");
const countcoinEl = document.getElementById("countcoin");
let coinCount = parseInt(countcoinEl.innerText);

callbtn.forEach((heart) => {
  

  heart.addEventListener("click", () => {
    coinCount++;
    countcoinEl.innerText = coinCount;
  });
});


