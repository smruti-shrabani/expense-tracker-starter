const TransactionForm = ({
  description, setDescription,
  amount, setAmount,
  type, setType,
  category, setCategory,
  onSubmit
}) => {
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="salary">Salary</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;