import fetch from "node-fetch";

const key = "YOUR_KEY_HERE";
const steamId = "STEAM_ID_HERE";

const payload = `{"steamid":${steamId},"include_appinfo":true}`;
const request = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&input_json=${payload}`;

console.log(`<html><body><ul>`);
fetch( request )
	.then(response => response.json())
	.then((data) => {
		data.response.games.forEach( game => { 
			console.log()
			console.log(`<li><img src="http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg" /> ${game.name} -- played: ${game.playtime_forever ? 'yes' : 'no'}`);
		});
	});
console.log(`</ul></body></html>`)