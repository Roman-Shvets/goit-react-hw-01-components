import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
return (
  <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

<tbody>
      {items.map((item, index) =>(
        <tr key={item.id} className={css.tableRow}
          style={index % 2 === 0 ? { backgroundColor: "white" } : { backgroundColor: "lightgrey" }}>
          <td className={css.tableFirstColumn}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr> )
)}      
</tbody>
</table>
);
};


TransactionHistory.propTypes = {
items: PropTypes.array,
};