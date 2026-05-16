import fetch from "node-fetch";
import { writeFileSync } from "fs";
import "dotenv/config";

const key = process.env.STEAM_API_KEY;
const steamId = process.env.STEAM_ID;

const payload = `{"steamid":${steamId},"include_appinfo":true}`;
const request = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&input_json=${payload}`;

const response = await fetch(request);
const data = await response.json();

writeFileSync("steam.json", JSON.stringify(data.response, null, 2));
console.log(`Wrote ${data.response.games.length} games to steam.json`);
