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
        <h1>{this.state.text}</h1>
      </div>
      )
  };
}