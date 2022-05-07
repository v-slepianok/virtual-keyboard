import { Button } from './button';
import buttonsConfig from '../buttons.json'

export function buildKeyboard() {
    const body = document.querySelector('body');
    const buttons = [];
    let currentInputValue = '';

    function simpleButtonClick(buttonValue) {
        currentInputValue += buttonValue;
        console.log(currentInputValue);
    }

    buttonsConfig.forEach(buttonRow => {
        const row = createRow();

        buttonRow.forEach(buttonConfig => {
            const button = new Button(buttonConfig, simpleButtonClick);
            row.append(button.getElement());
            buttons.push(button);
        });
  
        body.append(row);
    });
}

function createRow() {
    const rowElement = document.createElement('div');
    return rowElement;
}
  