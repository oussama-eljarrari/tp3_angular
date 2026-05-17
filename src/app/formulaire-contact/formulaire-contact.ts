import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire-contact.html',
  styleUrls: ['./formulaire-contact.css']
})
export class FormulaireContactComponent {

  @Output() contactAjoute = new EventEmitter<Contact>();

  nouveau: Contact = {
    nom: '',
    email: '',
    actif: true,
    score: 10,
    role: 'user'
  };

  ajouter(): void {
    if (!this.nouveau.nom.trim() || !this.nouveau.email.trim()) return;
    this.contactAjoute.emit({ ...this.nouveau });
    this.nouveau = { nom: '', email: '', actif: true, score: 10, role: 'user' };
  }
}