// add eventlisterner
document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the api
function loadNames(e) {

    e.preventDefault();

    // READ inputs from form and create variables
    const country = document.getElementById('country').value,
        gender = document.getElementById('gender').value,
        amount = document.getElementById('quantity').value;

    // Build URL
    let url = 'https://uinames.com/api/?';

    // Read country and append to URL
    if (country !== '') {
        url += `region=${country}&`;
    }
    // console.log(url);
    // Read gender and append to URL
    if (gender !== '') {
        url += `gender=${gender}&`;
    }

    // Read gender and append to URL
    if (amount !== '') {
        url += `amount=${amount}&`;
    }

    // Make AJAX call
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);
            // console.log(names);

            // Insert HTML
            let html = '<h3>Generated Names</h3>';
            html += '<ul class="list">';
            names.forEach(function(name) {
                html += `<li>${name.name}</li>`;
            });
            html += '</ul>';
            // console.log(html);
            document.querySelector('#result').innerHTML = html;
        }
    }
    xhr.send();

}