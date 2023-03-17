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
  displayedColumns: string[] = ['id_user', 'email', 'username', 'id_brand', 'active', 'permissions'];
 // displayColumnPer:string[]= ['Criar Operação', 'Tornar Gestor', 'Criar Utilizador', 'Gerir Permissões', 'Consultar Encomendas', 'Corrigir Encomendas', 'Consultar Produtos', 'Importar Produtos', 'Detalhes da Marca', 'Alterar Password', 'Consultar Return'];
  index:number=-1;

  searchTerm:string='';
  filterCountries(searchTerm:any){
    
  }

  constructor(private userService: UserDataService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser);
    this.dataSource.data = [this.currentUser];
  }

  sendMessage(data: any) {
    console.log(data);
  }

  manageTableNamesError(data: any) {
    if (typeof data === 'undefined' || data === null){
      return "Empty"
    }
    return data;
    
  }

  getProp(data:any){
    const aasda="";
  }



}
