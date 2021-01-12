import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-std',
  templateUrl: './add-edit-std.component.html',
  styleUrls: ['./add-edit-std.component.css']
})
export class AddEditStdComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() std:any;
  StudentId:string="";
  StudentName:string="";
  Department:string="";
  DateOfJoining:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDeparmentList();
  }

  loadDeparmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.StudentId=this.std.StudentId;
      this.StudentName=this.std.StudentName;
      this.Department = this.std.Department;
      this.DateOfJoining = this.std.DateOfJoining;
      this.PhotoFileName = this.std.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file, file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
  
  addStudent(){
    var val={StudentId:this.StudentId,
             StudentName:this.StudentName,
             Department:this.Department,
             DateOfJoining:this.DateOfJoining,
             PhotoFileName:this.PhotoFileName};
    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateStudent(){
    var val={StudentId:this.StudentId,
      StudentName:this.StudentName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName};
    this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
