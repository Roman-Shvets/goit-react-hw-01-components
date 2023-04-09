import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({title,stats}) => {
   
return (
    <section className={css.statistics}>
    {title && (<h2 className={css.title}>{title}</h2>)}
    <ul className={css.statList}>
        {stats.map((item) =>
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