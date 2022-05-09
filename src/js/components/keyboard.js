import {
    Button
} from './button';
import buttonsConfig from '../buttons.json'

export function buildKeyboard() {
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

    buttonsConfig.forEach(buttonRow => {
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