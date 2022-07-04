const div = document.querySelector('#container');

let consumeJson = async _ => {
    const response = await fetch('data.json');
    const json = await response.json();
    return json;
}

consumeJson()
    .then(response => div.textContent = JSON.stringify(response))
    .catch(error => console.log(error));
