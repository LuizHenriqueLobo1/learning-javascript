let names = JSON.parse(localStorage.getItem('names')) || [];

window.onload = () => { updateList() };

document.querySelector('#trigger').onclick = () => {
    const name = document.querySelector('#text').value;
    let index = names.indexOf(name);
    index != -1 ? names.splice(index, 1) : names.push(name);
    localStorage.setItem('names', JSON.stringify(names));
    updateList();
}

function updateList() {
    const list = document.querySelector('#list');
    list.textContent = "";
    names.forEach((name) => {
        let item = document.createElement('li');
        item.textContent = name;
        list.appendChild(item);
    });
}
