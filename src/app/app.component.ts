import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public show:boolean = false;
log = [];
// public clicks: Array<number>;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
toggle()
{
  this.show = !this.show;
  this.log.push(this.log.length + 1);
}
}