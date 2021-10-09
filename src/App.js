import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statisticalData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json'

function App() {
  return (
    <div className="container">
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  )
}

export default App;
