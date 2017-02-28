class NewInviteFriend extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return (
      <a href='/' onClick={this.props.inviteFriend}>{this.props.friend.name}</a>
      )
  }
}