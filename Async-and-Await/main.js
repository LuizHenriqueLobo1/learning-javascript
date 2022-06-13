let consumeJson = async _ => {
    const response = await fetch('data.json');
    const json = await response.json();
    return json;
}

consumeJson()
    .then(response => console.log(response))
    .catch(error => console.log(error));
