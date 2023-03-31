import css from "./Profile.module.css";
import PropTypes from "prop-types";


export function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) { 
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={"User avatar"}
                    width={200}
                    height={200}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    // stats: {
    //     followers: PropTypes.number.isRequired,
    //     views: PropTypes.number.isRequired,
    //     likes: PropTypes.number.isRequired,
    // }
    stats: PropTypes.objectOf(PropTypes.number.isRequired),        
};