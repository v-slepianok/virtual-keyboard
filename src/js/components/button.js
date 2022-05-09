export default class Button {
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
