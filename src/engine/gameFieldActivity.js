import { rollCard } from "../events/crads-events.js";

// create settings sekectors
const createSelector = (inEl, nodeName) => {
  let selector = document.createElement("select");
  if (nodeName === "difficultyLvl") {
    selector.innerHTML = `<option selected value="1" >Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>`;
  }
  if (nodeName === "cardSet") {
    selector.innerHTML = `<option selected >Cats</option>
                        <option>People</option>
                        <option>Paintings</option>`;
  }
  inEl.append(selector);
};

// input parameter - elemet which must be removed
const removeField = (elemeintId) => {
  const gameMenu = document.getElementById(elemeintId);
  gameMenu.remove();
};

const openGameSettings = () => {
  removeField("game-menu");
  const doc = document.getElementById("work-space");
  let div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  doc.append(div);

  createSelector(div, "difficultyLvl");
  createSelector(div, "cardSet");

  let button = document.createElement("button");
  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  div.append(button);
};

// game field
const addInfoBar = () => {
  const doc = document.getElementById("work-space");
  let span = document.createElement("span");
  span.setAttribute("id", "infoBar");
  span.innerHTML = `<p id="countClick">Number of clicks</p> <p id="stopwatch">Time</p>`;
  doc.append(span);
};

const addCardsOnField = (fieldSize) => {
  const doc = document.getElementById("work-space");
  for (let i = 0; i < fieldSize; i++) {
    let div = document.createElement("div");
    div.classList.add("card");

    //Alternative solution - use Event delegation on work-space
    div.onclick = function () {
      rollCard(div);
    };
    div.setAttribute("activated", false);

    div.setAttribute("id", `${i}-card`);
    div.innerHTML = `<div class="front-card" activated="false"></div>
          <div class="back-card"></div>`;
    doc.append(div);
  }
};

const genetateGameField = (fieldSize) => {
  removeField("game-menu");
  addInfoBar();
  addCardsOnField(fieldSize);
};
//

export { openGameSettings, genetateGameField };
