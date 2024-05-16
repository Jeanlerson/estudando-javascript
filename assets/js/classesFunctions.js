//---------------PERSONAGENS-------------------

/*
class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 12
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 85
        this.attack = 16
        this.defense = 5
        this.maxLife = this.life
    }
}

//-----------------MONSTER------------------

class LittleMonster extends Character {
    constructor() {
        super("Little Monster")
        this.life = 60
        this.attack = 9
        this.defense = 3
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor() {
        super("Big Monster")
        this.life = 120
        this.attack = 20
        this.defense = 7
        this.maxLife = this.life
    }
}

//------------------CENÁRIO----------------------

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.log = logObject
    }

    start() {
        this.update()

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`

        //Fighter 2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`
    }

    doAttack(attracking, attacked) {
        if(attracking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage("Atacando cachorro morto")
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attracking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attracking.name} causou ${actualAttack.toFixed(1)}`)
        } else {
            this.log.addMessage(`${attacked.name} se defendeu`)
        }

        this.update()
    }
}

class Log {
    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = " "

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
*/

//------------PERSONAGENS----------------
const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const creatKnigth = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 13,
        defense: 10
    }
}

const creatSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 90,
        maxLife: 90,
        attack: 18,
        defense: 7
    }
}

const creatLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 50,
        maxLife: 50,
        attack: 10,
        defense: 7
    }
}

const creatBigMonster = () => {
    return {
        ...defaultCharacter,
        name: "Big Monster",
        life: 120,
        maxLife: 120,
        attack: 15,
        defense: 9
    }
}

//----------CENÁRIO------------

const stage = {
    fighter1: null,
    fighter2: null,
    fighterEl1: null,
    fighterEl2: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighterEl1 = fighter1El
        this.fighterEl2 = fighter2El

        this.fighterEl1.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))
        this.fighterEl2.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    
        this.update()
    },

    update() {
        //FIGHTER 1
        this.fighterEl1.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighterEl1.querySelector(".bar").style.width = `${f1Pct}%`

        //FIGHTER 2
        this.fighterEl2.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighterEl2.querySelector(".bar").style.width = `${f2Pct}%`
    },

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMensage("alguem morreu")
            return
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const actualAttack = attacking.attack * attackFactor
        const actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMensage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano`)
        } else {
            log.addMensage(`${attacked.name} se defendeu`)
        }

        this.update()
    }
}

const log = {
    list: [],
    addMensage(msg) {
        this.list.push(msg)
        this.render()
    },
    render() {
        const logEl = document.querySelector(".log")
        logEl.innerHTML = " "

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}