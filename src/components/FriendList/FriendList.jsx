import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export const FriendList = ({friends}) => {
return (
    <ul className={css.friendList}>
{friends.map((item) => (
    <li key={item.id} className={css.item}>
    < FriendListItem avatar = { item.avatar } name = { item.name } isOnline = { item.isOnline } />
    </li>
))}
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number
        })
    ),
};