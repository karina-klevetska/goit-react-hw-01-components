import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
            {isOnline ? <span className={s.status} style={{ backgroundColor: 'rgb(26, 145, 26)' }}></span> : <span className={s.status} style={{ backgroundColor: 'grey' }}></span>}
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}