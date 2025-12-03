const tbody = document.querySelector('#tabella tbody');
xValues.forEach((x, i) => {
    const row = document.createElement('tr');
    const cellX = document.createElement('td');
    const cellY = document.createElement('td');
    cellX.textContent = x;
    cellY.textContent = yValues[i];
    row.appendChild(cellX);
    row.appendChild(cellY);
    tbody.appendChild(row);
});