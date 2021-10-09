import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statisticalData.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import './App.css'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

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
      <TransactionHistory transactions={transactions}/>
    </div>
  )
}

export default App;
