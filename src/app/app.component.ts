import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';
  log(x){
    console.log(x);
  }
  test(f){
    console.log(f.value.firstName);
  }
}
