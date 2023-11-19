import { Component, OnDestroy, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  isAuthenticated=false;
  subscription:Subscription;

  constructor(private dataService:DataStorageService,private authService:AuthService){}

  ngOnInit(): void {
    this.subscription=this.authService.user.subscribe(
      user=>{
        this.isAuthenticated=!!user;
      }
    );
  }

  onSave(){
    this.dataService.storeRecipes();
  }
  onFetch(){
    this.dataService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
