document.addEventListener("DOMContentLoaded", () => {
  const callBtns = document.querySelectorAll(".callbtn");
  const countCoinEl = document.getElementById("countcoin");
  let coinCount = parseInt(countCoinEl.innerText);
  
  // const callHistoryEl = document.getElementById("callHistory");

  callBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      // coinCount -= 20;
      // countCoinEl.innerText = coinCount;

      // const card = btn.closest(".Card");
      // if (!card) return;

      // const serviceName = card.dataset.serviceName;
      // const serviceNumber = card.dataset.serviceNumber;

      alert(`Calling ${serviceName} at ${serviceNumber}`);

      // const li = document.createElement("li");
      // li.innerText = `${serviceName} - ${serviceNumber}`;
      // callHistoryEl.appendChild(li);
    });
  });
});
