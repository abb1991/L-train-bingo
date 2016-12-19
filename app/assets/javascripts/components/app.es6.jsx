class App extends React.Component {
  constructor(){
    super();
    this.state={
      text: 'Hello, world!'
    };

  }

  render (){
    return (
      <div>
        <h1>L Train Bingo</h1>
        <BingoCard handleClick={this.handleClick}/>
      </div>
      )
  };
}