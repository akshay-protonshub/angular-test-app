import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Observable } from 'rxjs';
import Character from '../Character';



export interface Hero {
  id: number;
  name: string;
}



class Customer {
  id : number;
  name: string;
  email: string;
  tel: string;
}


@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  navItems: any;
  private data: any[];
  testForm: FormGroup;
  testForm2: FormGroup;
  public test: any;
  name: string = '';
  email: string = '';
  tel: string = '';
  public id: any;


  uploadForm: FormGroup;  

  SERVER_URL = '.../assets/data/navItems.json';

 
  private heroes: Hero[];

  private heroesUrl = 'api/heroes';
  
  
    // public items: students = [
    // {
    //   "id": 1,
    //   "name": "Enola Rowe",
    //   "class": "tony@mcu.com",
    //   "address": "131 Oswaldo Street"
    // },{
    //   "id": 2,
    //   "name": "Timmothy Lueilwitz",
    //   "age": "15",
    //   "address": "37137 Abbigail Lock"
    // },{
    //   "id": 3,
    //   "name": "Madilyn Pacocha",
    //   "age": "14",
    //   "address": "094 Morris Plains"
    // },{
    //   "id": 4,
    //   "name": "Harley Cremin",
    //   "age": "17",
    //   "address": "14855 Cathy Square"
    // },{
    //   "id": 5,
    //   "name": "Juana Ziemann",
    //   "age": "16",
    //   "address": "612 Dayana Stream"
    // }
    // ];
    

  //   public items: Array [] = [
  //     {
  //         "name": "India",
  //         "children": [
  //             {
  //                 "name": "Delhi",
  //                 "children": [
  //                     {
  //                         "name": "South Delhi"
  //                     },
  //                     {
  //                         "name": "North Delhi"
  //                     }
  //                 ]
  //             },
  //             {
  //                 "name": "Tamil Nadu",
  //                 "children": [
  //                     {
  //                         "name": "Chennai"
  //                     },
  //                     {
  //                         "name": "Coimbatore"
  //                     }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         "name": "America",
  //         "chilren": [
  //             {
  //                 "name": "California",
  //                 "children": [
  //                     {
  //                         "name": "Trinity"
  //                     },
  //                     {
  //                         "name": "Yolo"
  //                     }
  //                 ]
  //             },
  //             {
  //                 "name": "Florida",
  //                 "children": [
  //                     {
  //                         "name": "Bradford"
  //                     },
  //                     {
  //                         "name": "Calhoun"
  //                     }
  //                 ]
  //             }
  //         ]
  //     }
  //  ]
  // }

  constructor(private service : ServiceService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    
    // this.getHeroes().subscribe(
    //   data => this.heroes = data
    // )
  //   this.testForm2 = this.fb.group({
  //     id: this.id,
  //     name: this.name,
  //     email: this.email,
  //     tel: this.tel})
  }

  // submitForm(){
  //   let last:any = this.test[this.test.length-1];
  //   this.id = last.id+1;
  //   console.log(this.id);
  //   this.testForm2.value.id = this.id;
  //   console.log(this.testForm2.value);
  //   this.service.postTests(this.testForm2.value);
  // }

  // submitForm(){
  //   const lastTrainData = this.test.trainData[this.test.trainData.length-1];

  //   const newTrainData = this.testForm2.value;
  //   newTrainData.id = lastTrainData.id + 1;

  //   this.test.trainData.push(newTrainData);

  //   this.service.postTests(this.test);
  // }
  

//   loadNavItems() {
//     this.navItems = this.http.get("../data/navItems.json");
//     console.log(this.navItems);
// }


onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.uploadForm.get('profile').setValue(file);
  }
}

onSubmit() {
  const formData = new FormData();
  formData.append('file', this.uploadForm.get('profile').value);

  this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
}


// getHeroes(): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
// }


// submit() {
//   this.httpClient.post(JSON.stringify(this.characters), )}
}
