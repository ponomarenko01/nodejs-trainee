import { Input, Component } from '@angular/core';
import { HttpService } from './http.service';

@Component ({
    selector: 'app-mycomponent',
    templateUrl: './mycomponent.component.html',
    inputs: ['posts'],
    providers: [HttpService]
})


export class MycomponentComponent {
    response: Array<any>;

    constructor(private _httpService: HttpService) {
        this._httpService.getFile()
            .subscribe(
                response => {this.response = response;
                console.log(response);
                },
                error => console.log(error)
                
            );
    }
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-mycomponent',
//   templateUrl: './mycomponent.component.html',
//   styleUrls: ['./mycomponent.component.css']
// })
// export class MycomponentComponent implements OnInit {
//   message: string;
//   arr = ['ang', 'rea', 'vue', 'boot', 'node'];
//   constructor() {
//     setInterval(() =>{
//       this.message = new Date().toLocaleTimeString(); 
//     }, 1000) 
//    }

//   ngOnInit() {
//   }

// }
