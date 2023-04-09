import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export const FriendList = (props) => {
return (
    <ul className={css.friendList}>
{props.friends.map((item) => (
    <li key={item.id} className={css.item}>
    < FriendListItem avatar = { item.avatar } name = { item.name } isOnline = { item.isOnline } />
    </li>
))}
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
};