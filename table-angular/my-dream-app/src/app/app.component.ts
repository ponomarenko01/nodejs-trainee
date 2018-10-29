import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
// import {ShowDetail, ShowsResponse} from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I can change my app';

  name:string = '';
  language:string ='';
  found:boolean;
  // show:object ={};
  constructor(private httpClient:HttpClient) {}
  // onNameKeyUp(event:any){
  //   this.name = event.target.value;
  //   this.found= false;
  // }
  // getFile(){
  //   console.log(this.name);
  //   this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q='+this.name)
  //   .subscribe(
  //     (data:any[]) => {
  //       console.log(data);
  //       if(data){
  //         this.name = data[0].name;
  //         this.language = data[0].language;
  //         this.found = true;
  //         console.log(data);
  //       }

  //     }
  //   )
  // }
}


// getFile(){
//   console.log(this.name);
//   this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q='+this.name)
//   .subscribe(
//     (data: any[]) => {
//       const shows = data.map((value: ShowsResponse): ShowDetail => {
//         return value.show;
//       });
//       this.shows = shows;
     
//       return this.shows;
//     }
//   )
// }