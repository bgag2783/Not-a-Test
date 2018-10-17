import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

//I figured I'd use the styled-components from the tic-tac-toe demo
const StyledApp = styled.div`
  font-family: 'Verdana', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;`

StyledApp.defaultName = 'StyledApp'

/**This variable is used with the ramda sort to return
 * a sorted array.
 */
var diff = function(a, b) {
  return a > b
}

/**This function is used to show a list of users who have registered
 * It uses the map function to add a list item for each entry
 * in the users array
 */
function ShowListOfUsers(props) {
  const users = props.users
  const listItems = users.map(user => <li key={user}>{user}</li>)
  return <ul>{listItems}</ul>
}

/*This function is used to conditionally display the text about who the latest user was
If there is no latest user, it doesn't display the line*/
function ShowLatestUser(latestUser) {
  if (latestUser == null) {
    return <p>Welcome to the site! </p>
  }
  return <p>The last person registered was {latestUser}</p>
}

export default function App({ handleOnSubmit, latestUser, users }) {
  return (
    <StyledApp>
      {ShowLatestUser(latestUser)}
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ShowListOfUsers users={R.sort(diff, users)} />
    </StyledApp>
  )
}
