import { buildKeyboard } from './components/keyboard';
import { buildTextarea } from './components/textarea';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Content loaded, time to initialize keyboard');
    buildTextarea();
    buildKeyboard();
});
