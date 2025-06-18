const form = document.getElementById("expense-form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const list = document.getElementById("expense-list");
const total = document.getElementById("total");

let totalAmount = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (name && amount) {
        const li = document.createElement("li");
        li.textContent = `${name} - ${amount} ريال`;
        list.appendChild(li);

        totalAmount += amount;
        total.textContent = totalAmount;

        nameInput.value = "";
        amountInput.value = "";
    }
});
