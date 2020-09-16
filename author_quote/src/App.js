import React from 'react';
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from './QuotesDatabase';
//import SpiralCircle from './SpiralCircle';
import "./App.css";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <html>
      <header>
        <title></title>
        
      </header>
      <body>
        <div id="h_1">
        <div><h1>Welcome to a Game Webpage</h1><br></br>
        <ul><h3><a class="hL" href="App.js">Quotes</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="pL" href="Pokemon.js">Pokemon</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="wL" href="water.js">Waves</a>
        </h3></ul></div>
          
        </div>
        <div id="mainbody" class="m_1">
            <div id="container">
            <div>
              <div id="m">
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
        {/* <SpiralCircle /> */}
        
      </div>
      </div>
            </div>
        </div>
        <div id="footer" class="foot"><p>Made by Gabriel X. Ferrer</p></div>
      </body>
    </html>
      
    );
    
  }
  
}

export default App;
