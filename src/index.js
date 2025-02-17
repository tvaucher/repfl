/** @jsx h */
import { h, render, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import 'normalize.css'
import 'concrete.css'
import Room from './Room'
import './main.css'
import rooms from './rooms.json'

const buildings = Object.keys(rooms)

function Main () {
  const [selectedBuilding, setSelectedBuilding] = useState('all')
  let [loadedRoomCount, setLoadedRoomCount] = useState(0)

  const roomCount = Object.values(rooms).reduce((acc, cur) => acc + cur.length, 0)

  const loadedCallback = () => {
    loadedRoomCount += 1
    setLoadedRoomCount(loadedRoomCount)
  }

  const progressStyle = loadedRoomCount === roomCount ? {
    opacity: '0'
  } : {}

  return (
    <main class='container'>

      <header class='header'>
        <h1 class='less-margin title text-center'>rEPFL</h1>
        <h3 class='less-margin subtitle text-center'>find a free room @ EPFL</h3>
      </header>

      <progress class='rooms-progress' value={loadedRoomCount || '0'} max={roomCount} style={progressStyle}>
        {loadedRoomCount}/{roomCount}
      </progress>

      <p class='button-list'>

        {['all'].concat(buildings).map(building => (
          <Fragment key={building}>
            <button
              onClick={() => setSelectedBuilding(building)}
              class={selectedBuilding === building ? 'filled' : ''}
            >
              {building.toUpperCase()}
            </button>{' '}
          </Fragment>
        ))}

      </p>

      {buildings.map(building => (
        <div key={building} class={selectedBuilding !== 'all' && selectedBuilding !== building && 'hidden'}>
          <h2 class='text-center table-h2'>{building.toUpperCase()}</h2>
          <hr class='table-hr' />
          <table>
            <tbody>
              {rooms[building].map(room => <Room key={room} name={room} loaded={loadedCallback} />)}
            </tbody>
          </table>
        </div>
      ))}

      <footer class='footer'>
        <hr />
        <p class='less-margin'>made with ❤️ by <a href='https://louismerl.in'>Louis Merlin</a></p>
        <p class='less-margin'>need more rooms ?</p>
        <p class='less-margin'><a href='https://github.com/louismerlin/repfl/blob/master/src/rooms.json'>add them</a> or <a href='mailto:louis.merlin@epfl.ch'>email me</a></p>
        <p class='less-margin'>don't hesitate to <a href='https://github.com/louismerlin/repfl'>star and/or contribute</a></p>
      </footer>

    </main>
  )
}

render(<Main />, document.body)
