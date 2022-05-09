/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/js/components/button.js
 
 
 class Button {
    constructor(buttonConfig, clickHandler){
        this.buttonConfig = buttonConfig;

        this.isShifted = false;
        this.isTranslated = false;
        this.currentValue = this.buttonConfig.main;

        this.element = document.createElement('div');

        this.element.innerHTML = this._getButtonHtml();

        this.element.classList.add('btn');

        if(this.buttonConfig?.classes?.length){
            this.element.classList.add(...this.buttonConfig.classes);
        }

        if (clickHandler) {
            this.element.addEventListener('click', () =>{
                clickHandler(this.currentValue);
                //this.element.classList.add('active');
            });
        }

        // this.element.addEventListener('keydown', () => {
        //     this.element.classList.add('active'); 
        // })

        // this.element.addEventListener('keyup', () => {
        //     this.element.classList.remive('active');
        // })

    }

    _getButtonHtml() {
        if (this.buttonConfig.img) {
            // Case when we have image as button
            return `<img src="${this.buttonConfig.img}"></img>`;
        } else if (this.buttonConfig.display) {
            return this.buttonConfig.display;
        } else if (this.buttonConfig.displayShifted) {
            // Case when we need to display additional options (row with numbers, for example)
            return `<span>${this.buttonConfig.shifted}</span>${this.buttonConfig.main}`;
        } else {
            // Case when we do not show additional span with letter
            return this.buttonConfig.main;
        }
    }

    getElement(){
        return this.element;
    }

    _updateSymbol(){
        if(this.isTranslated && this.isShifted){
            this.currentValue = this.buttonConfig.translatedShifted || this.buttonConfig.translted || this.buttonConfig.main;
        }else if(this.isTranslated && !this.isShifted){
            this.currentValue = this.buttonConfig.translted ||  this.buttonConfig.main;
        }else if(!this.isTranslated && this.isShifted){
            this.currentValue = this.buttonConfig.translatedShifted || this.buttonConfig.main;
        }else if(!this.isTranslated && !this.isShifted){
            this.currentValue = this.buttonConfig.main;
        }
         this.element.innerText = this.currentValue;
    }

    setShifted(isShifted){
        this.isShifted = isShifted;
        this._updateSymbol();
    }

    setTranslated(isTranslated){
        this.isTranslated = isTranslated;
        this._updateSymbol();
    }

    setPressed(isPressed) {
        if (isPressed) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }
}

;// CONCATENATED MODULE: ./src/js/buttons.json
const buttons_namespaceObject = JSON.parse('[[{"main":"1","shifted":"!","translated":"1","translatedShifted":"!","displayShifted":true,"classes":[]},{"main":"2","shifted":"@","translated":"2","translatedShifted":"\\"","displayShifted":true,"classes":[]},{"main":"3","shifted":"#","translated":"3","translatedShifted":"№","displayShifted":true,"classes":[]},{"main":"4","shifted":"$","translated":"4","translatedShifted":"%","displayShifted":true,"classes":[]},{"main":"5","shifted":"%","translated":"5","translatedShifted":":","displayShifted":true,"classes":[]},{"main":"6","shifted":"^","translated":"6","translatedShifted":",","displayShifted":true,"classes":[]},{"main":"7","shifted":"&","translated":"7","translatedShifted":".","displayShifted":true,"classes":[]},{"main":"8","shifted":"*","translated":"3","translatedShifted":";","displayShifted":true,"classes":[]},{"main":"9","shifted":"(","translated":"9","translatedShifted":"(","displayShifted":true,"classes":[]},{"main":"0","shifted":")","translated":"0","translatedShifted":")","displayShifted":true,"classes":[]},{"main":"-","shifted":"_","translated":"-","translatedShifted":"_","displayShifted":true,"classes":[]},{"main":"=","shifted":"+","translated":"=","translatedShifted":"+","displayShifted":true,"classes":[]},{"main":"","display":"backspace","classes":["btn__backspace"]}],[{"main":"\\t","display":"Tab","classes":["btn__tab"]},{"main":"q","shifted":"Q","translated":"й","translatedShifted":"Й","classes":[]},{"main":"w","shifted":"W","translated":"ц","translatedShifted":"Ц","classes":[]},{"main":"e","shifted":"E","translated":"у","translatedShifted":"У","classes":[]},{"main":"r","shifted":"R","translated":"к","translatedShifted":"К","classes":[]},{"main":"t","shifted":"T","translated":" e","translatedShifted":"Е","classes":[]},{"main":"y","shifted":"Y","translated":"н","translatedShifted":"Н","classes":[]},{"main":"u","shifted":"U","translated":"г","translatedShifted":"Г","classes":[]},{"main":"i","shifted":"I","translated":"ш","translatedShifted":"Ш","classes":[]},{"main":"o","shifted":"O","translated":"щ","translatedShifted":"Щ","classes":[]},{"main":"p","shifted":"P","translated":"з","translatedShifted":"З","classes":[]},{"main":"[","shifted":"{","translated":"х","translatedShifted":"Х","classes":[]},{"main":"]","shifted":"}","translated":"ъ","translatedShifted":"Ъ","classes":[]},{"main":"Del","handler":"delete","classes":[]}],[{"main":"Caps Lock","classes":["btn__caps-lock"]},{"main":"a","shifted":"A","translated":"ф","translatedShifted":"Ф","classes":[]},{"main":"s","shifted":"S","translated":"ы","translatedShifted":"Ы","classes":[]},{"main":"d","shifted":"D","translated":"в","translatedShifted":"В","classes":[]},{"main":"f","shifted":"F","translated":"а","translatedShifted":"А","classes":[]},{"main":"g","shifted":"G","translated":"п","translatedShifted":"П","classes":[]},{"main":"h","shifted":"H","translated":"р","translatedShifted":"Р","classes":[]},{"main":"j","shifted":"J","translated":"о","translatedShifted":"О","classes":[]},{"main":"k","shifted":"K","translated":"л","translatedShifted":"Л","classes":[]},{"main":"l","shifted":"L","translated":"д","translatedShifted":"Д","classes":[]},{"main":";","shifted":":","translated":"ж","translatedShifted":"Ж","classes":[]},{"main":"\'","shifted":"\\"","translated":"э","translatedShifted":"Э","classes":[]},{"main":"\\\\","shifted":"|","translated":" ё","translatedShifted":"Ё","classes":[]},{"main":"Enter","classes":["btn__enter"]}],[{"main":"Shift","classes":["btn__shift"]},{"main":"`","shifted":"~","translated":"]","translatedShifted":"[","classes":[]},{"main":"z","shifted":"Z","translated":" я","translatedShifted":"Я","classes":[]},{"main":"x","shifted":"X","translated":"ч","translatedShifted":"Ч","classes":[]},{"main":"с","shifted":"С","translated":"с","translatedShifted":"С","classes":[]},{"main":"v","shifted":"V","translated":"м","translatedShifted":"М","classes":[]},{"main":"b","shifted":"B","translated":"и","translatedShifted":"И","classes":[]},{"main":"n","shifted":"N","translated":"т","translatedShifted":"Т","classes":[]},{"main":"m","shifted":"M","translated":"ь","translatedShifted":"Ь","classes":[]},{"main":",","shifted":"<","translated":" б","translatedShifted":"Б","classes":[]},{"main":".","shifted":">","translated":"ю","translatedShifted":"Ю","classes":[]},{"main":"/","shifted":"?","translated":"/","translatedShifted":"?","classes":[]},{"main":"Up","img":"icons/arrows/up.png","classes":["btn__violet"]},{"main":"Shift","classes":[]}],[{"main":"fn","classes":[]},{"main":"Control","classes":[]},{"main":"Option","classes":[]},{"main":"Command","classes":["btn__command"]},{"main":"","classes":["btn__space"]},{"main":"Command","classes":["btn__command"]},{"main":"Option","classes":[]},{"main":"Left","img":"icons/arrows/left.png","classes":["btn__violet"]},{"main":"Down","img":"icons/arrows/down.png","classes":["btn__violet"]},{"main":"Right","img":"icons/arrows/right.png","classes":["btn__violet"]}]]');
;// CONCATENATED MODULE: ./src/js/components/keyboard.js



function buildKeyboard() {
    const body = document.querySelector('body');
    const keyBoard = document.createElement('div');
    keyBoard.classList.add('container');
    const buttons = [];
    let currentInputValue = '';

    function simpleButtonClick(buttonValue) {
        let textArea = document.querySelector('textarea');

        currentInputValue += buttonValue;
        textArea.innerText = currentInputValue;
        //console.log(currentInputValue);
    }
    function deleteLastSymbol(){
        let textArea = document.querySelector('textarea');
        currentInputValue = currentInputValue.slice( 0, -1);
        textArea.innerText = currentInputValue;
    }
    function deleteSymbol() {
        let textArea = document.querySelector('textarea');

        let cursorPosition = textArea.getAttribute('selectionStart');

        currentInputValue = currentInputValue.slice(cursorPosition || 0, -1);
        textArea.innerText = currentInputValue;
    }

    const handlersMap = {
        'delete': deleteSymbol,
        'backSpace' : deleteLastSymbol,
    };

    buttons_namespaceObject.forEach(buttonRow => {
        const row = createRow();

        buttonRow.forEach(buttonConfig => {
            const handler = buttonConfig.handler ? handlersMap[buttonConfig.handler] : simpleButtonClick;
            const button = new Button(buttonConfig, handler);
            row.append(button.getElement());
            buttons.push(button);
        });

        keyBoard.append(row);
        body.append(keyBoard);
        // body.append(row);
    });

    body.addEventListener('keydown', (event) => {
        const isButton = event.key;
        if (!isButton) {
            return;
        }

        console.dir(event.key);
        
        const filteredButtons = buttons.filter(btn => btn.buttonConfig.main === event.key);
        if (filteredButtons.length) {
            filteredButtons.forEach(btn => btn.setPressed(true));
        }
    });

    body.addEventListener('keyup', (event) => {
        const isButton = event.key;
        if (!isButton) {
            return;
        }

        console.dir(event.key);
        
        const filteredButtons = buttons.filter(btn => btn.buttonConfig.main === event.key);
        if (filteredButtons.length) {
            filteredButtons.forEach(btn => btn.setPressed(false));
        }
    });
}

function createRow() {
    const rowElement = document.createElement('div');
    rowElement.classList.add('line');
    return rowElement;
}
;// CONCATENATED MODULE: ./src/js/components/textarea.js



function buildTextarea(){
    const body = document.querySelector('body');
    const element = document.createElement('textarea');

    element.classList.add('textarea');
    element.setAttribute('rows', 6);
    element.setAttribute('placeholedr', 'Write something...');
    body.append(element);
}
;// CONCATENATED MODULE: ./src/js/index.js



document.addEventListener('DOMContentLoaded', () => {
    console.log('Content loaded, time to initialize keyboard');
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