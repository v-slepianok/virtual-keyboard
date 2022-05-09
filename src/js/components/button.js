 
 
 export class Button {
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
