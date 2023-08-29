function updateDate() {
  const dateElement = document.getElementById("date");
  const today = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString("en-US", options);
  dateElement.innerText = formattedDate;

  const h1Element = document.querySelector("h1");
  h1Element.innerText = `Max's Challenge for ${formattedDate}`;
}

updateDate();

