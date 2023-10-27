document.addEventListener("DOMContentLoaded", main);

const subtitle = document.getElementById('text-carousel');

function main() {
    getData()
}

const URL = 'json/text.json'

async function getData() {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Cannot get the data`);
    const data = await res.json();

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const text = data[randomIndex].text;
        subtitle.textContent = text;
    }, 2000)
}