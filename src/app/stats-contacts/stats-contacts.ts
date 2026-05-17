import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact';

@Component({
  selector: 'app-stats-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-contacts.html',
  styleUrls: ['./stats-contacts.css']
})
export class StatsContactsComponent implements OnInit {

  totalContacts: number = 0;
  totalActifs: number = 0;
  scoreMoyen: number = 0;
  tauxActivite: number = 0;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.totalContacts = this.contactService.getAll().length;
    this.totalActifs   = this.contactService.getActifs().length;
    this.scoreMoyen    = this.contactService.getScoreMoyen();
    this.tauxActivite  = this.contactService.getTauxActivite();
  }

  get couleurBarre(): string {
    return '#2563eb';
  }
}