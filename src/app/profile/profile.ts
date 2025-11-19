import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../models/profile';
import { ProfileService } from '../services/api/profile';
import { AuthService } from '../services/api/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit{
   profile: ProfileModel | null = null;
   loading : boolean = true;
   error : string = '';

   constructor(private profileService:ProfileService,private authService:AuthService ){}

   ngOnInit(): void {
     this.fetchProfile();
   }

   fetchProfile(): void {
      const token = this.authService.getToken();
       
       this.profileService.getProfile(token).subscribe({
         next: (response) => {
           this.profile = response.user;
           this.loading = false;
         },
         error: (error) => {
           this.error = 'Failed to load profile';
           this.loading = false;
           console.error('Error fetching transactions:', error);
         }
       });
     }
   
}
