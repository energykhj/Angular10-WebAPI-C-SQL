import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-std',
  templateUrl: './show-std.component.html',
  styleUrls: ['./show-std.component.css']
})
export class ShowStdComponent implements OnInit {

  constructor(private service:SharedService) { }

  StudentList:any=[];

  ModalTitle:string="";
  ActivateAddEditStdComp:boolean=false;
  std:any;

  ngOnInit(): void {
   this.refreshStdList();
  }

  refreshStdList(){
    // subscribe: wait till the response is received from api call and then
    // only assign value to the department list variable, this is an asynchronous
    this.service.getStdList().subscribe(data=>{
      this.StudentList=data;
    });
  }

  addClick(){
    this.std={
      StudentId:0,
      StudentNeme:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.jpg"
    }
    this.ModalTitle ="Add Student";
    this.ActivateAddEditStdComp=true;
  }

  //send department object detail to edit screen
  editClick(item: any){
    this.std=item;
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStdComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure???')){
      this.service.deleteStudent(item.StudentId).subscribe(data=>{
        alert(data.toString());
        this.refreshStdList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditStdComp=false;
    this.refreshStdList();
  }

}
