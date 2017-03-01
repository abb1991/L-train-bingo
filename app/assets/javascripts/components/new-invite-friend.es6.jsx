class NewInviteFriend extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return (
      <div>
        <p>{this.props.friend.name}</p>
        <button onClick={this.props.inviteFriend} type="button" className=".btn-default">add</button>
      </div>
      )
  }
}