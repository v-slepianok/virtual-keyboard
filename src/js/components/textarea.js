
import {Button} from './button';

export function buildTextarea(){
    const body = document.querySelector('body');
    const element = document.createElement('textarea');

    element.classList.add('textarea');
    element.setAttribute('rows', 6);
    element.setAttribute('placeholedr', 'Write something...');
    body.append(element);
}