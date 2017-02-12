class App extends React.Component {
  constructor(){
    super();
    this.state={
    };

  }

  render (){
    return (
      <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#newUser" role="tab">New User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#newBingoCard" role="tab">New Bingo Card</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bingoCard" role="tab">Game</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="newUser" className="tab-pane active" role="tabpanel">
              <p>hello</p>
              <NewUser />
            </div>
            <div id="newBingoCard" className="tab-pane fade" role="tabpanel">
              <NewBingoCard />
            </div>
            <div id="bingoCard" className="tab-pane fade" role="tabpanel">
              <BingoCard/>
            </div>
          </div>
      </div>
      )
  };
}