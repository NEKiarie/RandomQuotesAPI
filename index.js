fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
.then(response => response.json())
.then(data => console.log(data))
