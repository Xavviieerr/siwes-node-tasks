var prompt = require('prompt');
var axios = require('axios');
const fs = require('fs');

  prompt.start();
  prompt.get(['Enter_search'], function (err, result) {
let key = result.Enter_search;
    if (key == "leaderboard") {
        //console.log(jokes.txt);
    } else {
async function fetchDadJokes(searchTerm) {
    try {
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function main() {
    try {
      const searchTerm = key;
      const jokeData = await fetchDadJokes(searchTerm);


      let answer = {
        id: searchTerm,
        joke: jokeData.results[0].joke
      } 


      console.log(answer);
      fs.appendFile('jokes.txt', answer, (error) => {
        if (error) {
            console.error('failed to append');
          }
      });
    } catch (error) {
      console.error('');
    }
  }
  
  main();
  
       }
  });