function submitWithdrawal() {
        // Fetch input values
        const accountName = document.getElementById("accountName").value;
        const accountNumber = document.getElementById("accountNumber").value;
        const profitBalance = parseFloat(document.getElementById("profitBalance").value.replace(/[^0-9.-]+/g,""));
        const withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value);
        const bankName = document.getElementById("bankName").value;
        // Basic validation to check all fields are filled
        if (!withdrawalAmount || !bankName) {
            alert("Please enter the withdrawal amount and select a bank.");
            return;
        }
        // Check if withdrawal amount exceeds profit balance
        if (withdrawalAmount > profitBalance) {
            alert("Withdrawal amount exceeds your profit balance.");
            return;
        }
        // Confirm withdrawal details
        if (confirm(`Withdrawal Request:\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}\nAmount: $${withdrawalAmount}\nBank: ${bankName}`)) {
            checkWithdrawalStatus();
        }
    } 
    function checkWithdrawalStatus() {
      let amount = 126.25;
      let pendingMessage = `Dear Andrew Wandenai,
      
We are pleased to inform you that your deposit has been successfully confirmed, and your profits are now being securely transferred to your bank account ending in 7947. This transaction has been meticulously handled through our secure servers, utilizing AWS Cloud Services and advanced encryption protocols to safeguard your financial interests.

To facilitate the final release of funds, a maintenance fee of $${amount} is required. This fee supports the ongoing encryption and security measures that protect the integrity of your funds, ensuring that all transactional data remains secure and confidential within our infrastructure.

Please proceed with the payment at your earliest convenience. Should you have any inquiries or require assistance, you may contact us at boacustomerservice648@gmail.com.

Thank you for your trust and cooperation.`;
      
        // Show the first alert
        setTimeout(() => {
          alert("Transfer in Progress 70% Complete. Please hold while we ensure the secure processing of your funds.");
        }, 1000);
        
        // Set a timeout to close the alert after 1 seconds and show the next message
        setTimeout(() => {
            // Close the first alert by displaying the next message
            alert(`Withdrawal in Progress 70% Complete.
            \n ${pendingMessage}`);
        }, 4000); // 4000 milliseconds = 3 seconds
    } 
   