import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'multi-language-app';
  currentLanguage = 'en';
  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिंदी' }
  ];

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    // Get saved language from localStorage or use default
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    this.switchLanguage(savedLang);
  }

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }
}
