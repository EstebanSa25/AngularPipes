import { Injectable, signal } from '@angular/core';

export type availableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<availableLocale>('fr');
  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as availableLocale) ?? 'es'
    );
  }
  get getLocale() {
    return this.currentLocale();
  }
  changeLocal(locale: availableLocale) {
    this.currentLocale.set(locale);
    localStorage.setItem('locale', locale);
    window.location.reload();
  }
}
