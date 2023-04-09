import PropTypes from "prop-types";
import css from "./FriendListItem.module.css"

export const FriendListItem = (props) => {
return (
<>
    {(props.isOnline) ? (
      <div className={css.statusOn}></div>
    ) : <div className={css.statusOff}></div>} 
    <img className={css.avatar} src={props.avatar} alt="User avatar" width="90" />
    <p className={css.name}>{props.name}</p>
</>
)
}

FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,   
};