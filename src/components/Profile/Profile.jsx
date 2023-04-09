import PropTypes from "prop-types";
import css from "./Profile.module.css";


export const Profile = (props) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={props.avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{props.username}</p>
                <p className={css.tag}>@{props.tag}</p>
                <p className={css.location}>{props.location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <p className={css.label}>Followers</p>
                    <p className={css.quantity}>{props.stats.followers}</p>
                </li>
                <li>
                    <p className={css.label}>Views</p>
                    <p className={css.quantity}>{props.stats.views}</p>
                </li>
                <li>
                    <p className={css.label}>Likes</p>
                    <p className={css.quantity}>{props.stats.likes}</p>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};