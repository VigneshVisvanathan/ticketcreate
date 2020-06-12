
  const button = document.getElementById('submit');
  
  
    
  
  button.addEventListener('submit', async event => {
    const EmployeeName = document.getElementById('Employee name').value;
    const EmployeeId = document.getElementById('Employee Id').value;
    const TicketSummary = document.getElementById('Ticket summary').value;
    const TicketDetails= document.getElementById('Ticket details').value;
   
    const data = { EmployeeName, EmployeeId,TicketSummary,TicketDetails};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    // console.log(json);
  });

  

