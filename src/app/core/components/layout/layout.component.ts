import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class LayoutComponent implements OnInit {
  // Icons
  faHome = faHome;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;

  isSidebarCollapsed = false;
  userName: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Get user name from localStorage
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
      const parsedData = JSON.parse(loginData);
      this.userName = parsedData.userName || '';
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onLogout() {
    this.loginService.logout().subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigate(['/login'], { replaceUrl: true });
      },
      error: (error) => {
        console.error('Logout error:', error);
        localStorage.clear();
        this.router.navigate(['/login'], { replaceUrl: true });
      }
    });
  }
} 