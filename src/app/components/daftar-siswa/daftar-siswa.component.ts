import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-daftar-siswa',
  templateUrl: './daftar-siswa.component.html',
  styleUrls: ['./daftar-siswa.component.css']
})
export class DaftarSiswaComponent implements OnInit {

  public role!:string;
  constructor(
    private userStore: UserStoreService,
    private auth: AuthService  
  ) { }
  ngOnInit(): void {
      
    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      const rolefromToken = this.auth.getRoleFromToken();
      this.role = val || rolefromToken
    })
  }
}
