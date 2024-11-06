

export default function json2html(data) {
   
    let table = '<table data-user="ajoyprasad2002217@gmail.com">';
    
   
    table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    
    
    table += '<tbody>';
    
    
    data.forEach(item => {
      table += '<tr>';
      table += `<td>${item.Name}</td>`;
      table += `<td>${item.Age}</td>`;
      table += item.Gender ? `<td>${item.Gender}</td>` : '<td></td>'; // Add Gender if present
      table += '</tr>';
    });
    
   
    table += '</tbody></table>';
    
    return table;
  }
  