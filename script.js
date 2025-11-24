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
    const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.id = "ans";    
  td.colSpan = 2;      
  td.textContent = totalValue;

  tr.appendChild(td);
  table.appendChild(tr);

  
};

getSumBtn.addEventListener("click", getSum);

