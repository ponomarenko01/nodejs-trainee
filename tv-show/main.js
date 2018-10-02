const Content = document.getElementById('content');
const InfoBlock = document.getElementById('infoBlock');
const InpDefault = document.getElementById('input');
const UrlNext = "http://api.tvmaze.com/search/shows?q=";
const Headers = new Set(['name', 'language', 'genres', 'status', 'rating']);
let menu = document.createElement('div');
let statusNumber = true;
let statusName = true;
let next = "";

init();
 
async function createData(inpNext, sortArray){
    if(!inpNext){
        inpNext = InpDefault.value
    }
    Content.innerHTML = '';
    let response = 0;
    if(sortArray){
    response = sortArray
    } else {
        response = await getFetch(UrlNext+inpNext)
        if(!response.length){
            let exception = document.createElement('h2');
            exception.innerHTML = "ПО ДАННОМУ ЗАПРОСУ НЕТ ДАННЫХ!";
            Content.appendChild(exception);
        }}
        let table = document.createElement('table');

        response.forEach((e, index) => {
            
            let tr = document.createElement('tr');
        if(index === 0){
            var uptr = document.createElement('tr');
            table.appendChild(uptr);
        }
        for(key in e.show){
            let mean = e.show[key];
            if(Headers.has(key)){
                if(!index){
                    let th = document.createElement('th');
                    th.innerHTML = key.toUpperCase();
                    if(key === 'name'){
                        th.innerHTML = key.toUpperCase()+'&#9658'+'A-Z';
                        console.log(key);
                        
                        th.addEventListener('click', function(){
                            console.log(response);
                        
                            response.sort(function (a, b) {
                                if (a.show.name > b.show.name) {
                                  return 1;
                                }
                                if (a.show.name < b.show.name) {
                                  return -1;
                                }
                                else {
                                    return 0
                                }
                              })
                            if(!statusName){response.reverse()}
                              createData(null, response);
                              statusName = !statusName;
                              statusNumber = true;
                        })
                    }
                    if(key === 'rating'){
                        th.innerHTML = key.toUpperCase()+'&#9660';
                        th.addEventListener('click', function(){
                            console.log(response);
                            
                            
                            response.sort(function (a, b) {
                                return b.show.rating.average - a.show.rating.average;
                                
                                })
                            if(!statusNumber){
                                response.reverse();
                            }
                            statusNumber = !statusNumber;
                            statusName = true;
                            createData(null, response);
                        })
                    }
                    uptr.appendChild(th);
                }
                
                let td = document.createElement('td');
                if(key === 'rating'){
                    console.log(key);
                    
                    if(mean.average === null){
                        td.innerHTML = '0';
                    } else {
                        td.innerHTML = mean.average;
                        console.log(response);
                        
                    }
                } else {
                    td.innerHTML = mean;
                }
                
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    });
    Content.appendChild(table);
}



async function getUserInfo(inpNext){
    if(!inpNext){
        inpNext = InpDefault.value
    }
    let response = await getFetch(UrlNext+inpNext);
    next.innerHTML = "";
    
    response.forEach((e, index) => {
        let dropMenu = document.createElement('p');
        dropMenu.innerHTML = e.show.name;
        dropMenu.style.cursor = "pointer";
        
        dropMenu.addEventListener('mouseover', function(){
            dropMenu.style.backgroundColor = 'rgb(12, 190, 146)';
            InpDefault.value = dropMenu.innerHTML;
            
        })
        dropMenu.addEventListener('click', function(){
            InpDefault.value = dropMenu.innerHTML;
            menu.innerHTML = "";
            createData();
            console.log(response);
        })
        
        dropMenu.addEventListener('mouseout', function(){
            dropMenu.style.backgroundColor = null;
        })
        menu.appendChild(dropMenu);
    })
    InfoBlock.appendChild(menu);
    next = menu;
}

async function getFetch(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return data;
}

function init(){
    createData('girls');
    InpDefault.addEventListener('input', () => {getUserInfo()})
    InpDefault.addEventListener('keyup', function(event){
        if (event.keyCode === 13) {
            menu.innerHTML = "";
        createData();
        console.log('click');
        }
        if(event.keyCode === 8) {
            if(InpDefault.value === ''){
                console.log('back');
            }
            menu.innerHTML = "";
        }
    })
}



























