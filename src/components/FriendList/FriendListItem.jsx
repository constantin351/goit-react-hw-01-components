import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export function FriendListItem({ avatar, name, isOnline }) {
    return (
        // {
            // friends.map(friend => (
            <li className={css.item}>
                <span className={isOnline ? css.online : css.offline}></span>
                <img
                    className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                    width="56"
                />
                <p className={css.name}>{name}</p>
            </li>
            // )
            )
        // }
    // );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}