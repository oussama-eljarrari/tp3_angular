import { Injectable } from '@angular/core';
import { Contact } from './contact.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private contacts: Contact[] = [
    { nom: 'Ahmed Benali', email: 'ahmed@ma',    actif: true,  score: 16, role: 'admin' },
    { nom: 'Sara Alami',   email: 'sara@ma',     actif: false, score: 8,  role: 'user'  },
    { nom: 'Omar Tazi',    email: 'omar@ma',     actif: true,  score: 18, role: 'admin' },
    { nom: 'Laila Rami',   email: 'laila@ma',    actif: true,  score: 11, role: 'guest' },
    { nom: 'Oussama',   email: 'oussama@ma',  actif: false, score: 6,  role: 'user'  },
  ];

  getAll(): Contact[]    { return this.contacts; }
  getActifs(): Contact[] { return this.contacts.filter(c => c.actif); }

  getByRole(role: string): Contact[] {
    return this.contacts.filter(c => c.role === role);
  }

  getScoreMoyen(): number {
    if (!this.contacts.length) return 0;
    return Math.round(
      this.contacts.reduce((s, c) => s + c.score, 0) / this.contacts.length
    );
  }

  getTotalActifs(): number {
    return this.contacts.filter(c => c.actif).length;
  }

  getTauxActivite(): number {
    if (!this.contacts.length) return 0;
    return Math.round((this.getTotalActifs() / this.contacts.length) * 100);
  }

  ajouter(contact: Contact): void {
    this.contacts = [...this.contacts, contact];
  }

  supprimer(email: string): void {
    this.contacts = this.contacts.filter(c => c.email !== email);
  }

  toggleActif(email: string): void {
    const c = this.contacts.find(c => c.email === email);
    if (c) c.actif = !c.actif;
  }
}