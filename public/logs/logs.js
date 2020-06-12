getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const EmployeeName = document.createElement('div');
    const EmployeeId = document.createElement('div');
    const TicketSummary = document.createElement('div');
    const TicketDetails = document.createElement('div');
    const date = document.createElement('div');
    
    
    
    

    EmployeeName.textContent = `Employee Name: ${item.EmployeeName}`;
    EmployeeId.textContent = `EmployeeId: ${item.EmployeeId}`;
    TicketSummary.textContent = `Ticket Summary: ${item.TicketSummary}`;
    TicketDetails.textContent = `Ticket Details: ${item.TicketDetails}`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;


    root.append( date, EmployeeName, EmployeeId,TicketSummary,TicketDetails);
    document.body.append(root);
  }
  // console.log(data);
}
