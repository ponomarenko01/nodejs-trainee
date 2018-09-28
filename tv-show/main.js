let content = document.getElementById('content');
let inpDefault = document.getElementById('input');
let urlNext = "http://api.tvmaze.com/search/shows?q=";

createData('girls');
 
async function createData(inpNext){
    if(!inpNext){
        inpNext = inpDefault.value
    }
    content.innerHTML = '';
    inpDefault.value = '';
    let response = await getFetch(urlNext+inpNext)
        if(!response.length){
            let exception = document.createElement('h2');
            exception.innerHTML = "ПО ДАННОМУ ЗАПРОСУ НЕТ ДАННЫХ!";
            content.appendChild(exception);
        }
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
                if(index === 0){
                    let th = document.createElement('th');
                    th.innerHTML = key.toUpperCase();
                    uptr.appendChild(th);
                }
                
                let td = document.createElement('td');
                if(key == 'rating'){
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

btn.addEventListener('click', () => {createData()});
inpDefault.addEventListener('input', () => {newFunc()})

async function newFunc(inpNext){
    if(!inpNext){
        inpNext = inpDefault.value
    }
   
    let response = await getFetch(urlNext+inpNext);
    next.innerHTML = "";
    let menu = document.createElement('div');
    response.forEach((e, index) => {
        let dropMenu = document.createElement('p');
        dropMenu.innerHTML = e.show.name;
        dropMenu.addEventListener('click', function(){
            inpDefault.value = dropMenu.innerHTML;
            menu.innerHTML = "";
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


























