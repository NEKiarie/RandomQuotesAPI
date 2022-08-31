
fetch('https://api.gameofthronesquotes.xyz/v1/random')
.then(response => response.json())
.then(data => console.log(data))
