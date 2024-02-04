const detailsElts = document.querySelectorAll(".acc-item-details");

detailsElts.forEach((details) => {
  details.addEventListener("toggle", () => {
    const iconElt = details.querySelector(".acc-item-icon");
    if (details.open) {
      iconElt.src = "./images/icon-minus.svg";
    } else {
      iconElt.src = "./images/icon-plus.svg";
    }
  });
});
