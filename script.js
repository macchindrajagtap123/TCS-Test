async function renderData() {
    let sectionData = await getMainSection();
    let html = '';
    sectionData.forEach(element => {
        if (element.isAdd) {
            html += `<article>`;
            element.sectionUrl.map(url => {
                html += ` <img src="${'images/' + url}">`
            })
            html += `</article>`;
        } else {
            let newsDesc = '<div>';
            element.newsTitle.map(news => {
                newsDesc += `<p class="newsTitle">${news.newsDesc}</p>`
            })
            newsDesc += `<a href = "#" class="nextNews">See All</a></div>`
            let htmlSegment = `<article>
                                    <div class="cardTitle"><b>${element.sectionName}</b></div>
                                   <img src="${'images/' + element.sectionUrl}" >
                                   ${newsDesc}
                               </div>
                           </article>`;

            html += htmlSegment;
        }
    });

 
    let mainContainer = document.querySelector('.main-container-left');
    mainContainer.innerHTML = `<hr class="line"><div class="title"><b>ENTERTAINMENT ></b></div><div class="container-bottom-left"></div>`;

    let container = document.querySelector('.container-bottom-left');
    container.innerHTML = html;
    mainContainer.innerHTML += ` <hr class="line"><div class="title"><b>ENTERTAINMENT ></b></div>`;

    let newsData = await getNewsData();
    html = '';
    newsData.forEach(element => {
        let htmlSegment = `<article>
                            <div>
                                <p>${element.desc}</p>
                            </div>
                            <img src="${'images/' + element.img}" >
                        </article>`;

        html += htmlSegment;
    });
    container = document.querySelector('.main-container-right');
    container.innerHTML = html;
}
renderData();


async function getMainSection() {
    let response = [];
    await fetch('https://jsonkeeper.com/b/ZN1U')
        .then(response => response.json())
        .then(json => { response = json.data; })
        .catch(err => console.log('Request Failed', err));
    return response;
}

async function getNewsData() {
    let response = [];
    await fetch('https://jsonkeeper.com/b/GQ4B')
        .then(response => response.json())
        .then(json => { response = json.data; })
        .catch(err => console.log('Request Failed', err));
    return response;
}


