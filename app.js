const ytdl = require('ytdl-core');
const ytsr = require('ytsr');
const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function close() {
    process.exit(1);
}

async function download(search) {
    const searchResults = await ytsr(search)
    ytlink = searchResults.items[0].url;
    ytdl(ytlink).pipe(fs.createWriteStream("../" + searchResults.items[0].title.replace(/\s/g, '') + '.mp4'));
}

rl.question("Was möchtest du herunterladen? ", function(name) {
    download(`${name}`);
    setTimeout(close, 10000);
});