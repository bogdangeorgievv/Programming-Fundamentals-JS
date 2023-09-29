function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let lostHelmet = Math.trunc(lostFights/2)
    let lostSword = Math.trunc(lostFights/3)
    let lostShield = Math.trunc(lostFights/6)
    let lostArmor = Math.trunc(lostFights/12)
    let totalExpenses = lostHelmet*helmetPrice + lostSword*swordPrice + lostShield*shieldPrice + lostArmor*armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}
solve(23,12.50,21.50,40,200)
