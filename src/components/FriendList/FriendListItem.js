import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="item">
            {isOnline ? <span className="status is-online"></span> : <span className="status"></span>}
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}