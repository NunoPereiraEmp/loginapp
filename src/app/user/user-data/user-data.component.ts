import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/User';
import { UserDataService } from 'src/app/user-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  currentUser!: User;
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id_user', 'email', 'username', 'id_brand', 'active','1', '2', '3', '4', '5', '6', '7', '8', '14', '15', '17'];
  displayColumnPer: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '14', '15', '17'];
  searchValue: string = "";
  filteredColumns: string[] = [];
  newColumnFilter: string[]=[];
  currentUserAux!: User;


  searchTerm: string = '';
  filterCountries(searchTerm: any) {

  }

  constructor(private userService: UserDataService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser);
    this.dataSource.data = [this.currentUser];
    this.filteredColumns =  [...this.displayedColumns.slice()];
    this.newColumnFilter = [...this.displayedColumns.slice()];
    this.currentUserAux= { ...this.currentUser };
  }

  sendMessage(data: any) {
    console.log(data);
  }

  manageTableNamesError(data: any) {
    if (typeof data === 'undefined' || data === null) {
      return "Empty"
    }
    
    if(typeof data === 'string') {
      return data;
    }
    return data;

  }

  manageTableNamesError2(data: any, index:number) {
    if(!isNaN(data) && typeof this.currentUserAux.permissions!= 'undefined') {
     
      return this.currentUserAux.permissions[index-5].description;
    }

    if (typeof  this.currentUserAux[data] === 'undefined' ||  this.currentUserAux[data] === null) {
      return "Empty"
    }
    
    const user= this.currentUser[data];
    if(typeof data === 'string') {
      return this.currentUserAux[data];;
    }
    return this.currentUserAux[data];

  }
  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredColumns = this.newColumnFilter.filter(values => values.includes(this.searchValue));
    //this.currentUser.permissions=  this.newColumnFilter.filter(values => values.includes(this.searchValue)).slice();
  }

  getProp(data: any) {
    const aasda = "";
  }



}
