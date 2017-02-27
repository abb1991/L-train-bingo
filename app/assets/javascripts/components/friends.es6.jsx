class Friends extends React.Component {
  constructor(props){
    super();
    this.state={
      friends: props.friends || [{name: "search for your friends!"}]
    }
  }

  deleteFriend(e){
    e.preventDefault();
    console.log('clicked delete friend')
  }

  newGame(e){
    e.preventDefault();
    console.log('clicked new game')
  }


  render() {
      return (
        <div>
          <h2>Friends list</h2>
          <ul>
            {this.state.friends.map(function(friend){
              return <li key={friend.id}>
                <a href='/' >{friend.name}</a><br/>
                <button onClick={this.deleteFriend} type="button" className="btn">delete</button>
                <button onClick={this.newGame} type="button" className="btn">new game</button>
              </li>
            }.bind(this))}
          </ul>
        </div>
      )
    }
}