class App extends React.Component {
  constructor(){
    super();
    this.state={
      text: 'Hello, world!'
    };

  }

  render (){
    return (
      <div className="container">
        <NewUser />
        <NewBingoCard />
        <h1>L Train Bingo</h1>
        <BingoCard/>
      </div>
      )
  };
}