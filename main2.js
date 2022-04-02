const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    } else {
        calculator.parseInput(value)
    }

})

const calculator = {
    displayText: '0',

    parseInput(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } 
        if (value === '=') {
            this.calcAnswer(this.displayText)
        } else if (value === 'AC') {
            this.clearAll()
        } else if (isNaN(this.displayText.charAt(this.displayText.length - 1))  && isNaN(+(value))) {
            return;
        } else if (this.displayText === '' && value === '.') {
            this.addText('0' + value)
        }
        else {
            this.addText(value)
        }
    },

    addText(value) {
        this.displayText += value
        this.outputText( this.displayText)
    },

    calcAnswer(equation) {
        !(this.displayText == 0) && this.outputText( eval(equation))
    },

    clearAll() {
        this.displayText = '0',
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector('.calculator-screen').value = text
    }

  };


