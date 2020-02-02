import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ServiceService} from '../services/service.service'
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;

}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedOption: string;
  d: any;
  value : any;
  pageOfItems: Array<any>;
  config: any;
  collection = { count: 60, data: [] };
  public searchString: string;

  interval: any;




  constructor(private service : ServiceService, public dialog: MatDialog, private cd: ChangeDetectorRef ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      
    };
   }



  ngOnInit() {
    this.show()

     setTimeout(() => {
       window.location.reload();
     }, 5000); // Activate after 10 seconds.
    
    this.show();
        this.interval = setInterval(() => { 
            this.show(); 
        }, 5000);
  //   this.interval = setInterval(() => {
  //     this.refresh(); // api call
  //  }, 10000);
  }


  show(){
    this.service.getData().subscribe((data)=>{
      // console.log(data);
      this.value = data["hits"]
      console.log(this.value)
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

// openDialog() {
//   let dialogRef = this.dialog.open(MainComponent);
//   dialogRef.afterClosed().subscribe(result => {
//     this.selectedOption = result;
//   });
// }


animal: string;
name: string;



openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '500px',
    data: { animal: JSON.stringify(this.value)}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'pop_up.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


