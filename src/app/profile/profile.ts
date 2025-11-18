import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileModel } from '../models/profile';
import { API_CONSTANTS } from  '../constants/api';
import { ProfileService } from '../services/api/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit{
   profile: ProfileModel | null = null;
   loading : boolean = true;
   error : string = '';

   constructor(private profileService:ProfileService){}

   ngOnInit(): void {
     this.fetchProfile();
   }

   fetchProfile(): void {
      const token = API_CONSTANTS.TOKEN;
       
       this.profileService.getProfile(token).subscribe({
         next: (response) => {
           this.profile = response.user;
           this.loading = false;
         },
         error: (error) => {
           this.error = 'Failed to load transactions';
           this.loading = false;
           console.error('Error fetching transactions:', error);
         }
       });
     }
   
}
