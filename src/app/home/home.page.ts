import { Component, OnInit } from '@angular/core';
import { Badge } from "@ionic-native/badge/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private badge: Badge) { }

  set10Noti() {
    console.log('14 no line click ');

    setTimeout(()=>{
      this.badge.hasPermission().then((res) => {
        console.log('permission res', res);
        // Success!
        this.badge.set(10).then((res) => {
            // Success!
            // alert("set badge");
            console.log('set badge res ',res);
        }).catch((ex) => {
          console.log('',JSON.stringify(ex));
            // alert(JSON.stringify(ex));
        });
    }).catch((ex) => {
      console.log('error ex ',JSON.stringify(ex));
        // alert(JSON.stringify(ex));
    });
    

    },5000);
  }

  ngOnInit(){
  }

}
