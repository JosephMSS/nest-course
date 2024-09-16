class NewPokemon {
    constructor(public readonly id: number, public name: string) { }
    scream() {
        console.log(`Doooooo!!`)
    }
    speak() {
        console.log(`Do, Do, Doooooooo!`)
    }
}
const MyDecorator = () => {
    return (_target: Function) => {
        return NewPokemon
    }
}
@MyDecorator()
export class Pokemon {
    constructor(public readonly id: number, public name: string) { }
    scream() {
        console.log(`${this.name.toLocaleUpperCase()}!!`)
    }
    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }
}
export const charmander = new Pokemon(4, 'Charmander')
console.clear()
charmander.scream()
charmander.speak()