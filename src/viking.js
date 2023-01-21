// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(Damage) {
    this.health -= Damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking)
  }
    
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    let randomNum = Math.random () * this.saxonArmy.length;
    let randomNum2 = Math.floor(randomNum);
    let randomSaxon = this.saxonArmy[randomNum2]
    let randomNum3 = Math.floor (Math.random () * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomNum3]
    randomSaxon.health -= randomViking.strength;
  }
  saxonAttack() {
    let randomNum = Math.random () * this.vikingArmy.length;
    let randomNum2 = Math.floor(randomNum);
    let randomViking = this.vikingArmy[randomNum2];
    let randomNum3 = Math.floor (Math.random () * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomNum3];
    randomViking.health -= randomSaxon.strength
  }
  showStatus() {
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikins and Saxons are still in the thick of battle"

    }
  }
}
