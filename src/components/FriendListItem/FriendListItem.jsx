import PropTypes from "prop-types";
import css from "./FriendListItem.module.css"

export const FriendListItem = ({avatar,name,isOnline}) => {
return (
<>
    {(isOnline) ? (
      <div className={css.statusOn}></div>
    ) : <div className={css.statusOff}></div>} 
    <img className={css.avatar} src={avatar} alt="User avatar" width="90" />
    <p className={css.name}>{name}</p>
</>
)
}

FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,   
};