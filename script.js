const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceOfItems = document.querySelectorAll(".price");
	
	let totalValue = 0;
	priceOfItems.forEach(i => {
		totalValue += Number(i.textContent);
	});

	const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price = Rs ${totalValue}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

