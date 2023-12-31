import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  constructor(private router: Router) { }

  backToMain() {
    this.router.navigate(['/main']);
  }

  gotoSend(){
    this.router.navigate(['/transfer/send']);
  }

  public profile: Array<any> = [
    { name: "Elijah Joshua A. Dimaculangan",
      initials: "EJ",
      paymethod: "G-Xchange",
      date: "Nov 03, 2023"},

    { name: "Yasmine Grace C. Esguerra",
      initials: "YG",
      paymethod: "Yvez Bank",
      date: "Nov 05, 2023"},

    { name: "Kevin Matthew L. Palma",
      initials: "KM",
      paymethod: "AquaBank",
      date: "Nov 06, 2023"},

    { name: "Dave Bryan Ico", 
      initials: "DB",
      paymethod: "GoTyme",
      date: "Nov 07, 2023"},

    { name: "Yvez Santiago", 
    initials: "YV",
    paymethod: "Maya",
    date: "Nov 08, 2023"}
  ];

  
  itemClicked = false;

  toggleClickedItem() {

   this.itemClicked = !this.itemClicked;
   console.log(this.itemClicked)

  } 

  public onOther(){
  
  }

  ngOnInit() {
  }


}
