class NewCard extends React.Component {
  constructor(){
    super();

  }

  render(){
    return (
      <td>
        <form >
          <textarea placeholder="Create new bingo square..."></textarea>
          <input className="submit-bingo-square" type='submit' value='Bingo'/>
        </form>
      </td>
    )
  }
}