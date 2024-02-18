function tseam(input){
    let games=input.shift().split(' ');
    while(input!='Play!'){
        let [command, game]=input.shift().split(' ');
        if(command=="Install"){
            for(let i=0;i<games.length;i++){
                if(games[i]!=game){
                    games.push(game);break;
                }
            }
        }else if(command=="Uninstall"){
            for(let i=0;i<games.length;i++){
                if(games[i]==game){
                    games.splice(i,1);
                }
            }
        }else if(command=="Update"){
            for(let i=0;i<games.length;i++){
                if(games[i]==game){
                    games.splice(i,1);
                    games.push(game);
                }
            }
        }else if(command=="Expansion"){
            let expansion=game.split('-');
            for(let i=0;i<games.length;i++){
                if(games[i]==expansion[0]){
                    games.splice(i+1,0,expansion.join(':'));
                }
            }
        }
    }
    console.log(games.join(' '));
}
function tseamAccount(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
 
    console.log(games.join(' '));
}
tseam(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])
tseam(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])