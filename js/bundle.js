/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/js/components/button.js
class Button {
  constructor(buttonConfig, clickHandler, releaseHandler) {
    this.buttonConfig = buttonConfig;
    this.clickHandler = clickHandler;
    this.releaseHandler = releaseHandler;

    this.isShifted = false;
    this.isTranslated = false;
    this.currentValue = this.buttonConfig.main;

    this.intervalId = null;

    this.element = document.createElement('div');

    this.element.innerHTML = this.getButtonHtml();

    this.element.classList.add('btn');

    if (this.buttonConfig?.classes?.length) {
      this.element.classList.add(...this.buttonConfig.classes);
    }

    this.element.addEventListener('mousedown', () => {
      this.setPressed(true);
    });

    this.element.addEventListener('mouseup', () => {
      this.setPressed(false);
    });
  }

  getButtonHtml() {
    if (this.buttonConfig.img) {
      // Case when we have image as button
      return `<img src="${this.buttonConfig.img}"></img>`;
    }

    if (this.buttonConfig.display) {
      return this.buttonConfig.display;
    }

    if (this.buttonConfig.displayShifted) {
      // Case when we need to display additional options (row with numbers, for example)
      return `<span>${this.buttonConfig.shifted}</span>${this.buttonConfig.main}`;
    }

    // Case when we do not show additional span with letter
    return this.buttonConfig.main;
  }

  getElement() {
    return this.element;
  }

  updateSymbol() {
    if (this.isTranslated && this.isShifted) {
      this.currentValue = this.buttonConfig.translatedShifted
        || this.buttonConfig.translted
        || this.buttonConfig.main;
    } else if (this.isTranslated && !this.isShifted) {
      this.currentValue = this.buttonConfig.translatedShifted
        || this.buttonConfig.shifted
        || this.buttonConfig.main;
    } else if (!this.isTranslated && this.isShifted) {
      this.currentValue = this.buttonConfig.shifted
        || this.buttonConfig.main;
    } else if (!this.isTranslated && !this.isShifted) {
      this.currentValue = this.buttonConfig.main;
    }
  }

  setShifted(isShifted) {
    this.isShifted = isShifted;
    this.updateSymbol();
  }

  setTranslated(isTranslated) {
    this.isTranslated = isTranslated;
    this.updateSymbol();
  }

  setPressed(isPressed) {
    if (isPressed) {
      this.element.classList.add('active');
      this.clickHandler(this.currentValue);
    } else {
      this.element.classList.remove('active');
      if (this.releaseHandler) {
        this.releaseHandler(this.currentValue);
      }
    }
  }
}

;// CONCATENATED MODULE: ./src/js/buttons.json
const buttons_namespaceObject = JSON.parse('[[{"main":"1","shifted":"!","translated":"1","translatedShifted":"!","displayShifted":true,"classes":[]},{"main":"2","shifted":"@","translated":"2","translatedShifted":"\\"","displayShifted":true,"classes":[]},{"main":"3","shifted":"#","translated":"3","translatedShifted":"№","displayShifted":true,"classes":[]},{"main":"4","shifted":"$","translated":"4","translatedShifted":"%","displayShifted":true,"classes":[]},{"main":"5","shifted":"%","translated":"5","translatedShifted":":","displayShifted":true,"classes":[]},{"main":"6","shifted":"^","translated":"6","translatedShifted":",","displayShifted":true,"classes":[]},{"main":"7","shifted":"&","translated":"7","translatedShifted":".","displayShifted":true,"classes":[]},{"main":"8","shifted":"*","translated":"3","translatedShifted":";","displayShifted":true,"classes":[]},{"main":"9","shifted":"(","translated":"9","translatedShifted":"(","displayShifted":true,"classes":[]},{"main":"0","shifted":")","translated":"0","translatedShifted":")","displayShifted":true,"classes":[]},{"main":"-","shifted":"_","translated":"-","translatedShifted":"_","displayShifted":true,"classes":[]},{"main":"=","shifted":"+","translated":"=","translatedShifted":"+","displayShifted":true,"classes":[]},{"main":"","display":"Backspace","name":"Backspace","handler":"delete","classes":["btn__backspace"]}],[{"main":"\\t","display":"Tab","name":"Tab","classes":["btn__tab"]},{"main":"q","shifted":"Q","translated":"й","translatedShifted":"Й","classes":[]},{"main":"w","shifted":"W","translated":"ц","translatedShifted":"Ц","classes":[]},{"main":"e","shifted":"E","translated":"у","translatedShifted":"У","classes":[]},{"main":"r","shifted":"R","translated":"к","translatedShifted":"К","classes":[]},{"main":"t","shifted":"T","translated":" e","translatedShifted":"Е","classes":[]},{"main":"y","shifted":"Y","translated":"н","translatedShifted":"Н","classes":[]},{"main":"u","shifted":"U","translated":"г","translatedShifted":"Г","classes":[]},{"main":"i","shifted":"I","translated":"ш","translatedShifted":"Ш","classes":[]},{"main":"o","shifted":"O","translated":"щ","translatedShifted":"Щ","classes":[]},{"main":"p","shifted":"P","translated":"з","translatedShifted":"З","classes":[]},{"main":"[","shifted":"{","translated":"х","translatedShifted":"Х","classes":[]},{"main":"]","shifted":"}","translated":"ъ","translatedShifted":"Ъ","classes":[]},{"main":"Del","handler":"delete","classes":[]}],[{"main":"Caps Lock","classes":["btn__caps-lock"]},{"main":"a","shifted":"A","translated":"ф","translatedShifted":"Ф","classes":[]},{"main":"s","shifted":"S","translated":"ы","translatedShifted":"Ы","classes":[]},{"main":"d","shifted":"D","translated":"в","translatedShifted":"В","classes":[]},{"main":"f","shifted":"F","translated":"а","translatedShifted":"А","classes":[]},{"main":"g","shifted":"G","translated":"п","translatedShifted":"П","classes":[]},{"main":"h","shifted":"H","translated":"р","translatedShifted":"Р","classes":[]},{"main":"j","shifted":"J","translated":"о","translatedShifted":"О","classes":[]},{"main":"k","shifted":"K","translated":"л","translatedShifted":"Л","classes":[]},{"main":"l","shifted":"L","translated":"д","translatedShifted":"Д","classes":[]},{"main":";","shifted":":","translated":"ж","translatedShifted":"Ж","classes":[]},{"main":"\'","shifted":"\\"","translated":"э","translatedShifted":"Э","classes":[]},{"main":"\\\\","shifted":"|","translated":" ё","translatedShifted":"Ё","classes":[]},{"main":"\\n","display":"Enter","name":"Enter","classes":["btn__enter"]}],[{"main":"Shift","handler":"shiftPressed","releaseHandler":"shiftReleased","classes":["btn__shift"]},{"main":"`","shifted":"~","translated":"]","translatedShifted":"[","classes":[]},{"main":"z","shifted":"Z","translated":" я","translatedShifted":"Я","classes":[]},{"main":"x","shifted":"X","translated":"ч","translatedShifted":"Ч","classes":[]},{"main":"c","shifted":"C","translated":"с","translatedShifted":"С","classes":[]},{"main":"v","shifted":"V","translated":"м","translatedShifted":"М","classes":[]},{"main":"b","shifted":"B","translated":"и","translatedShifted":"И","classes":[]},{"main":"n","shifted":"N","translated":"т","translatedShifted":"Т","classes":[]},{"main":"m","shifted":"M","translated":"ь","translatedShifted":"Ь","classes":[]},{"main":",","shifted":"<","translated":" б","translatedShifted":"Б","classes":[]},{"main":".","shifted":">","translated":"ю","translatedShifted":"Ю","classes":[]},{"main":"/","shifted":"?","translated":"/","translatedShifted":"?","classes":[]},{"main":"Up","img":"icons/arrows/up.png","name":"ArrowUp","classes":["btn__violet"]},{"main":"Shift","handler":"shiftPressed","releaseHandler":"shiftReleased","classes":[]}],[{"main":"fn","classes":[]},{"main":"Control","classes":[]},{"main":"Option","name":"Alt","classes":[]},{"main":"Command","name":"Meta","classes":["btn__command"]},{"main":" ","classes":["btn__space"]},{"main":"Command","classes":["btn__command"]},{"main":"Option","classes":[]},{"main":"Left","img":"icons/arrows/left.png","name":"ArrowLeft","classes":["btn__violet"]},{"main":"Down","img":"icons/arrows/down.png","name":"ArrowDown","classes":["btn__violet"]},{"main":"Right","img":"icons/arrows/right.png","name":"ArrowRight","classes":["btn__violet"]}]]');
;// CONCATENATED MODULE: ./src/js/components/keyboard.js



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

function buildKeyboard() {
  body = document.querySelector('body');
  const keyBoard = document.createElement('div');
  keyBoard.classList.add('container');

  const handlersMap = {
    delete: deleteSymbol,
    shiftPressed: () => shiftPressed(true),
    shiftReleased: () => shiftPressed(false),
  };

  buttons_namespaceObject.forEach((buttonRow) => {
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

;// CONCATENATED MODULE: ./src/js/components/textarea.js
function buildTextarea() {
  const body = document.querySelector('body');
  const element = document.createElement('textarea');

  element.classList.add('textarea');
  element.setAttribute('rows', 6);
  element.setAttribute('placeholedr', 'Write something...');
  body.append(element);
}

;// CONCATENATED MODULE: ./src/js/index.js



document.addEventListener('DOMContentLoaded', () => {
  buildTextarea();
  buildKeyboard();
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map