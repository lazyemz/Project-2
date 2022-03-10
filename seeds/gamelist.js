const {Gamename} = require('../models');
const gamedata = [
    {
        title: 'Undertale',
        description: 'Adventure game feat monsters',
    },
    {
        title: 'Valorant',
        description: 'First person shooter', 
    },
    {
        title: 'Phasmophobia',
        description: 'Multiplayer Horror',
    
    },

    {
        title: 'Splatoon',
        description: 'First person shooter but PG'
    },

    {
        title: 'League of Legends',
        description: 'A team-based strategy game where two teams of five powerful champions face off to destroy the other base',
    },

    { 
        title: 'Fortnite',
        description: 'A survival game where 100 players fight against each other in player versus player combat to be the last one standing',

    },

    {
        title: 'Overcooked',
        description: 'Overcooked is a chaotic co-operative cooking game for 1-4 players. Working together these brave chefs must prepare, cook and serve up each order before the baying customers storm out in a rage',
    },

    {
        title: 'Bioshock',
        description: 'A first-person shooter with role-playing game customization and stealth elements. The player takes the role of Jack as he is guided through Rapture towards various objectives. The player collects multiple weapons and plasmids as they work their way through enemy forces',

    },
];
const seedGames = () => Gamename.bulkCreate(gamedata);

module.exports = seedGames;