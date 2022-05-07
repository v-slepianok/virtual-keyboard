 export class Button {
    constructor(buttonConfig, clickHandler){
        this.buttonConfig = buttonConfig;

        this.isShifted = false;
        this.isTranslated = false;
        this.currentValue = this.buttonConfig.main;

        this.element = document.createElement('div');
        this.element.innerText = this.buttonConfig.main;

        if(this.buttonConfig?.classes?.length){
            this.element.classList.add(this.buttonConfig.classes);
        }

        if (clickHandler) {
            this.element.addEventListener('click', () => clickHandler(this.currentValue));
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
}
