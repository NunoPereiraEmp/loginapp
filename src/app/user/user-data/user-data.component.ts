import { Component, NgIterable, OnInit } from '@angular/core';
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
  searchValue: string = "";
  filteredColumns!:DisplayedColumns1;
  newColumnFilter!:DisplayedColumns1;
  displayteste: DisplayedColumns1 = { tabela: [] };
  test!:Testes;

  /**this.currentUser.permissions.forEach((permissions: any) => {
      this.displayedColumns.push(permissions.id_permission);
    }); */
    constructor(private userService: UserDataService) {



    }

    initUserTable() {


      for (const prop in this.currentUser) {

        if(typeof this.currentUser[prop] === 'undefined'){
          this.displayteste.tabela.push({ column: prop, row: "Empty" });
          continue;
        }
        if(prop == 'permissions' ) {
          this.currentUser[prop].forEach((permissions: any) => {
            this.displayteste.tabela.push({ column: permissions.description.toString(), row: permissions.id_permission.toString()});
          });
          continue;
        }
        this.displayteste.tabela.push({ column: prop, row: this.currentUser[prop].toString()});
      }


    }

    ngOnInit(): void {

      this.currentUser = this.userService.getCurrentUser();
      this.initUserTable();


      this.filteredColumns = {...this.displayteste};
      this.newColumnFilter = {...this.displayteste};
    }

    sendMessage(data: any) {
      console.log(data);
    }
    applyFilter(event: Event) {
      this.searchValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      this.filteredColumns.tabela = this.newColumnFilter.tabela.filter((item) => item.column.toLowerCase().includes(this.searchValue));
      //this.currentUser.permissions=  this.newColumnFilter.filter(values => values.includes(this.searchValue)).slice();
    }
}

export interface Testes {
  column: string;
  row: string;
}
export interface DisplayedColumns1{
  tabela: Testes[];
}
