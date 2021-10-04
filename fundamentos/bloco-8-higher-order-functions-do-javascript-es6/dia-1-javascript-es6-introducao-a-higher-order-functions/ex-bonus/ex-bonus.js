const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
}

const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const minDamage = warrior.strength;
  return Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
}

const mageAtack = () => {
  return {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence),
    mana: mage.mana - 15
  }
}

const gameActions = {
  warriorTurn: (func) => {
    const damage = func();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },

  mageTurn: (func) => {
    const damage = func();
    dragon.healthPoints -= damage.damage;
    mage.mana = damage.mana;
    mage.damage = damage;
  },

  dragonTurn: (func) => {
    const damage = func();
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },

  turnResult: () => {
    console.log(battleMembers);
    return battleMembers;
  }
};

function playARound() {
  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageAtack);
  gameActions.dragonTurn(dragonDamage);
  gameActions.turnResult();
}
