{/* <script type="text/javascript" src="./data.json"></script> */ }
function init() {
    callApi('./data.json', function (data) {
        var meddata = JSON.parse(data);
        console.log("RESPONSE TEXT");
        console.log(meddata)
        mapingData(meddata.data);
    });
}

function mapingData(items) {
    items.forEach(element => {
        let div = document.createElement('div');
        div.id = element.id;
        div.className = 'flex-item';
        let img = document.createElement('img');
        img.className = 'flex-item-img';
        img.src = element.iconUri;
        let span = document.createElement('span');
        span.className = 'flex-item-span'
        span.innerHTML = element.name
        let priceSpan = document.createElement('span');
        priceSpan.className = 'price-span';
        priceSpan.innerHTML = '99 rs';
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(priceSpan);
        let flexContainer = document.getElementById('flex-container');
        flexContainer.appendChild(div);
    });
}

function callApi(jsonData, callback) {
    // var meditems = './data';
    // console.log(meditems);
    // const medAssets = fetch('./data.json')
    // const meditems = medAssets
    // console.log(meditems);
    var meddata = new XMLHttpRequest();
    meddata.overrideMimeType("application/json");
    meddata.open("GET", jsonData, true);
    meddata.onreadystatechange = function () {
        if (meddata.readyState == 4 && meddata.status == 200) {
            callback(meddata.responseText);
        }
    }
    meddata.send(null);
}

init();
