import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:55875/backend';
  readonly PhotoUrl = 'http://localhost:55875/photos/';

  constructor(private http:HttpClient) { }

  // get list of Department
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val)
  }

  getStdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student');
  }

  addStudent(val:any){
    return this.http.post(this.APIUrl+'/Student',val)
  }

  updateStudent(val:any){
    return this.http.put(this.APIUrl+'/Student',val)
  }

  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/Student/'+val)
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Student/SaveFile', val)
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Student/GetAllDepartmentNames') 
  }
}
