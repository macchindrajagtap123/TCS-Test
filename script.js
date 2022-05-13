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
    let container = document.querySelector('.container-bottom-left');
    container.innerHTML = html;

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
    //    let res =  await fetch('./json/mainSection.json',{
    //         mode: 'no-cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //    })
    //   .then(response => {response})
    //   .then(data => {return data})
    //   .catch(error => console.log(error));

    let dt = {
        "data": [
            {
                "sectionId": 1,
                "sectionName": "FASHION",
                "sectionUrl": "Img1.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 2,
                "sectionName": "TRAVEL",
                "sectionUrl": "Img2.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 3,
                "sectionName": "BEAUTY",
                "sectionUrl": "Img3.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 4,
                "sectionName": "Advertisment",
                "sectionUrl": ["adv1.png", "adv2.png"],
                "isAdd": true
            }
        ]
    }
    return dt.data;

}

function getNewsData() {
    // let response_data = [];
    // response_data = fetch('./json/newsSection.json')
    // .then(response => response.json())
    // .then(data => return data);
    let data = [{
        "newsId": 1,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 2,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 3,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 4,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 5,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 6,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 7,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 8,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 9,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 10,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 11,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 12,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }]

    return data
}


