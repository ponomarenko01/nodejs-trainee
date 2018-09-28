let content = document.getElementById('content');
let inpDefault = document.getElementById('input');
let urlNext = "http://api.tvmaze.com/search/shows?q=";
createData('girls');
 
async function createData(inpNext, sortArray){
    if(!inpNext){
        inpNext = inpDefault.value
    }
    content.innerHTML = '';
    let response = 0;
    if(sortArray){
    response = sortArray
    } else {
        response = await getFetch(urlNext+inpNext)
        if(!response.length){
            let exception = document.createElement('h2');
            exception.innerHTML = "ПО ДАННОМУ ЗАПРОСУ НЕТ ДАННЫХ!";
            content.appendChild(exception);
        }}
        let table = document.createElement('table');

        response.forEach((e, index) => {
            
            let tr = document.createElement('tr');
        if(index === 0){
            var uptr = document.createElement('tr');
            table.appendChild(uptr);
        }

        let headers = new Set(['name', 'language', 'genres', 'status', 'rating']);

        for(key in e.show){
            let mean = e.show[key];
            if(headers.has(key)){
                if(!index){
                    let th = document.createElement('th');
                    th.innerHTML = key.toUpperCase();
                    if(key === 'name'){
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
                              })
                              createData(null, response);
                        })
                    }
                    uptr.appendChild(th);
                }
                
                let td = document.createElement('td');
                if(key === 'rating'){
                    td.innerHTML = mean.average;
                }
                 else{
                    td.innerHTML = mean;
                    
                }
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    });
    content.appendChild(table);
}

let infoBlock = document.getElementById('infoBlock');
let btn = document.getElementById('button');
let next = "";

inpDefault.addEventListener('input', () => {newFunc()})

async function newFunc(inpNext){
    if(!inpNext){
        inpNext = inpDefault.value
    }
   
    let response = await getFetch("http://api.tvmaze.com/search/shows?q="+inpNext);
    next.innerHTML = "";
    let menu = document.createElement('div');
    response.forEach((e, index) => {
        let dropMenu = document.createElement('p');
        dropMenu.innerHTML = e.show.name;
        dropMenu.addEventListener('click', function(){
            inpDefault.value = dropMenu.innerHTML;
            menu.innerHTML = "";
            createData();
        })
        dropMenu.addEventListener('mouseover', function(){
            dropMenu.style.backgroundColor = 'rgb(12, 190, 146)';
            inpDefault.value = dropMenu.innerHTML;
            
        })
        dropMenu.addEventListener('mouseout', function(){
            dropMenu.style.backgroundColor = null;
        })
        menu.appendChild(dropMenu);
       
    })
    infoBlock.appendChild(menu);
    next = menu;
}

async function getFetch(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return data;
    ;
}


























