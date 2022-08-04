// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(hit) {
    this.health -= hit;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  receiveDamage(hit) {
    this.health -= hit;
    if (this.health > 0) {
      return `${this.name} has received ${hit} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(hit) {
    this.health -= hit;
    if (this.health > 0) {
      return `A Saxon has received ${hit} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(myVicking) {
    this.vikingArmy.push(myVicking);
  }
  addSaxon(mySaxon) {
    this.saxonArmy.push(mySaxon);
  }
  vikingAttack() {
    // choose a random soldier
    // let randomVicking = Math.floor(Math.random() * this.vikingArmy.length);
    // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomVicking].attack()
    );

    return `freeeeedoooom`;
  }

  saxonAttack() {}
  showStatus() {}
}
