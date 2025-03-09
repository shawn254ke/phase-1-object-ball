function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());

function allPlayers() {
    const game = gameObject();
    return { ...game.home.players, ...game.away.players };
}


function numPointsScored(playerName) {
    return allPlayers()[playerName]?.points || null;
}


function shoeSize(playerName) {
    return allPlayers()[playerName]?.shoe || null;
}


function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return game[teamKey].colors;
        }
    }
    return null;
}


function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}


function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return Object.values(game[teamKey].players).map(player => player.number);
        }
    }
    return null;
}


function playerStats(playerName) {
    return allPlayers()[playerName] || null;
}


function bigShoeRebounds() {
    const players = allPlayers();
    let maxShoePlayer = Object.entries(players).reduce((maxPlayer, [name, stats]) => {
        return stats.shoe > maxPlayer.shoe ? stats : maxPlayer;
    }, { shoe: 0 });

    return maxShoePlayer.rebounds;
}


function mostPointsScored() {
    const players = allPlayers();
    return Object.entries(players).reduce((maxPlayer, [name, stats]) => {
        return stats.points > maxPlayer.points ? { name, points: stats.points } : maxPlayer;
    }, { name: null, points: 0 }).name;
}


function winningTeam() {
    const game = gameObject();
    let teamScores = {};

    for (const teamKey in game) {
        const team = game[teamKey];
        teamScores[team.teamName] = Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
    }

    return Object.entries(teamScores).reduce((winner, [team, points]) => {
        return points > winner.points ? { team, points } : winner;
    }, { team: null, points: 0 }).team;
}


function playerWithLongestName() {
    return Object.keys(allPlayers()).reduce((longest, player) => {
        return player.length > longest.length ? player : longest;
    }, "");
}


function doesLongNameStealATon() {
    const players = allPlayers();
    const longestNamePlayer = playerWithLongestName();
    const maxSteals = Object.values(players).reduce((max, player) => Math.max(max, player.steals), 0);

    return players[longestNamePlayer].steals === maxSteals;
}


console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson"));
console.log("Shoe size of Reggie Evans:", shoeSize("Reggie Evans"));
console.log("Team colors of Brooklyn Nets:", teamColors("Brooklyn Nets"));
console.log("All team names:", teamNames());
console.log("Player numbers of Charlotte Hornets:", playerNumbers("Charlotte Hornets"));
console.log("Stats of Brook Lopez:", playerStats("Brook Lopez"));
console.log("Rebounds by player with biggest shoe size:", bigShoeRebounds());
console.log("Player with most points:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with longest name:", playerWithLongestName());
console.log("Did longest name player have most steals?", doesLongNameStealATon());
