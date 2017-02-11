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
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#newUser">New User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#newBingoCard">New Bingo Card</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="newUser" className="tab-pane fade in active">
              <NewUser />
            </div>
            <div id="newBingoCard" className="tab-pane fade">
              <NewBingoCard />
            </div>
          </div>
        <h1>L Train Bingo</h1>
        <p><span className="glyphicon glyphicon-asterisk"></span><br/></p>
        <BingoCard/>
      </div>
      )
  };
}