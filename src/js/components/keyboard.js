import Button from './button';
import buttonsConfig from '../buttons.json';

let body;
const buttons = [];

let currentInputValue = '';

function findPressedButtons(button) {
  return buttons.filter((btn) => btn.buttonConfig.main === button
    || btn.buttonConfig.name === button
    || btn.buttonConfig.shifted === button
    || btn.buttonConfig.translated === button
    || btn.buttonConfig.translatedShifted === button);
}

function simpleButtonClick(buttonValue) {
  const textArea = document.querySelector('textarea');

  currentInputValue += buttonValue;
  textArea.textContent = currentInputValue;
}

function deleteSymbol() {
  const textArea = document.querySelector('textarea');

  const cursorPosition = textArea.getAttribute('selectionStart');

  currentInputValue = currentInputValue.slice(cursorPosition || 0, -1);
  textArea.innerText = currentInputValue;
}

function shiftPressed(isShifted) {
  buttons.forEach((btn) => btn.setShifted(isShifted));
}

function createRow() {
  const rowElement = document.createElement('div');
  rowElement.classList.add('line');
  return rowElement;
}

export default function buildKeyboard() {
  body = document.querySelector('body');
  const keyBoard = document.createElement('div');
  keyBoard.classList.add('container');

  const handlersMap = {
    delete: deleteSymbol,
    shiftPressed: () => shiftPressed(true),
    shiftReleased: () => shiftPressed(false),
  };

  buttonsConfig.forEach((buttonRow) => {
    const row = createRow();

    buttonRow.forEach((buttonConfig) => {
      const handler = buttonConfig.handler ? handlersMap[buttonConfig.handler] : simpleButtonClick;
      const releaseHandler = buttonConfig.releaseHandler
        ? handlersMap[buttonConfig.releaseHandler]
        : null;
      const button = new Button(buttonConfig, handler, releaseHandler);
      row.append(button.getElement());
      buttons.push(button);
    });

    keyBoard.append(row);
    // body.append(row);
  });

  body.append(keyBoard);

  body.addEventListener('keydown', (event) => {
    event.preventDefault();
    const isButton = event.key;
    if (!isButton) {
      return;
    }

    const filteredButtons = findPressedButtons(event.key);
    if (filteredButtons.length) {
      filteredButtons.forEach((btn) => btn.setPressed(true));
    }
  });

  body.addEventListener('keyup', (event) => {
    event.preventDefault();
    const isButton = event.key;
    if (!isButton) {
      return;
    }

    const filteredButtons = findPressedButtons(event.key);
    if (filteredButtons.length) {
      filteredButtons.forEach((btn) => btn.setPressed(false));
    }
  });
}
