function calculateTotalExpenses(transaction){
    let TotalAmount = 0;
	transaction.forEach((txn) => {
		if(txn.type === "food"){
		TotalAmount += txn.amount + (txn.amount * .10);
		} else {
			TotalAmount += txn.amount + (txn.amount * .05);
		}
	}
	)
	return TotalAmount;
}

const transactions = [
  { amount: 100, type: "food" },
  { amount: 200, type: "transportation" }
];

console.log(calculateTotalExpenses(transactions));