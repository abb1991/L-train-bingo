class Friends extends React.Component {
  constructor(props){
    super();
    this.state={
      friends: props.friends || [{name: "search for your friends!"}]
    }
  }

  render() {
      return (
        <div>
          <h2>Friends list</h2>
          <ul>
            {this.state.friends.map(function(friend){
              return <li>{friend.name}</li>
            })}
          </ul>
        </div>
      )
    }
}