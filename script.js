const units = [
    new Unit('Infantryman', 100, 50),
    new Unit('Pilot', 50, 100),
    new Unit('Sniper', 40, 70)
];

const squad = new Squad(units);

squad.createSquad();

console.log(squad);

