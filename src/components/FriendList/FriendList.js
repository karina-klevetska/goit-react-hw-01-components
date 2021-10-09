import FriendListItem from "./FriendListItem";

export default function FriendList({friends}) {
    return (
        <ul className="friendsList">
            {friends.map(friend =>
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            )}
        </ul>
    )
}