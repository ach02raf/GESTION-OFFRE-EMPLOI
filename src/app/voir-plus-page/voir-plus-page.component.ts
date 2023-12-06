import { Component } from '@angular/core';
import { GetAllOffreService } from '../services/get-all-offre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voir-plus-page',
  templateUrl: './voir-plus-page.component.html',
  styleUrl: './voir-plus-page.component.scss',
})
export class VoirPlusPageComponent {
  data: any;
  cv: any;
  constructor(
    private getAllOffres: GetAllOffreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.data = history.state;
    this.route.params.subscribe(async (params) => {
      this.cv = await this.getAllOffres.downloadFile(
        `CV${params['id'].split('-')[1]}/${history.state.CV}`
      );
    });
  }
  async emailEntretien() {
    await this.getAllOffres.sendEmail(
      'departement RH',
      this.data.nom,
      'rh@gmail.com',
      'redevus entretien',
      'vous etes inviter a un entretien technique'
    );
    await this.router.navigate(['']);
  }
  async emailRefus() {
    await this.getAllOffres.sendEmail(
      'departement RH',
      this.data.nom,
      'rh@gmail.com',
      'refus de demande',
      'bon courage'
    );
    await this.router.navigate(['']);
  }
}
