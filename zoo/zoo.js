class Animal {
	//only this methods to show the example  
	constructor(sound = 'unknown'){
		this.sound = sound
	}
	
	speak(phrase){
		if(phrase) {
			const chuckedPhrase = phrase.split(' ')
			return chuckedPhrase.reduce( (acc, word, index) => {
				return index === 0 ?
				 		word : index === chuckedPhrase.length - 1 ?
				 		 `${acc} ${this.sound} ${word} ${this.sound}` : `${acc} ${this.sound}`
			}, '' )
		}else{
			return this.sound
		}
		
	}

}

class Lion extends Animal {
	//empty class just to show the example
}

const lion = new Lion()
lion.speak('Hi good morning')
//output --> "Hi unknown good unknown morning grr"

const lion = new Lion('grr')
lion.speak('Hi good morning')
//output --> "Hi grr good grr morning grr"

const lion = new Lion('grr')
lion.speak()
//output --> "grr"