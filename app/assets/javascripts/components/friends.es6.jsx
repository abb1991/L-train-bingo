class Friends extends React.Component {
  constructor(props){
    super();
    this.state={
    }
  }

  newGame(e){
    e.preventDefault();
    console.log('clicked new game')
  }

  render() {
      return (
        <div>
          <h2>Friends list</h2>
          {this.props.friends.length < 1 ?
            <h2>search for your friends!</h2>
            :
          <ul>
            {this.props.friends.map(function(friend){
              return <li key={friend.id}>
                <a href='/' >{friend.name}</a><br/>
                <button id={friend.id} onClick={this.props.deleteFriend} type="button" className="btn">delete</button>
                <button onClick={this.newGame} type="button" className="btn">new game</button>
              </li>
            }.bind(this))}
          </ul>
          }
        </div>
      )
    }
}