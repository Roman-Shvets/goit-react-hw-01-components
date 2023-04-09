import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = (props) => {
   
return (
    <section className={css.statistics}>
  {(props.title)? (
            <h2 className={css.title}>{props.title}</h2>
   ) : null} 
        
        <ul className={css.statList}>
        {props.stats.map((item) =>
        (<li key={item.id} className={css.item}>
            <p className={css.label}>{item.label}</p>
            <p className={css.percentage}>{item.percentage}%</p>
        </li>))}
    </ul>
</section>
);
};

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.array,
};