import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'cuco',
    name: 'Roberto Castillo',
    isFollowing: true
  },
  {
    userName: 'lufy',
    name: 'Monkey D Luffy',
    isFollowing: false
  },
  {
    userName: 'goku',
    name: 'Kakaroto',
    isFollowing: true
  },
  {
    userName: 'zoro',
    name: 'Ronoroa Zoro',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}