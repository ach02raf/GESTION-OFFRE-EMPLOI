import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllOffreService } from '../services/get-all-offre.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.scss',
})
export class SitePageComponent {
  id: any;
  offres: any;
  constructor(
    private route: ActivatedRoute,
    private getAllOffres: GetAllOffreService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.id = await params['id'];
      await this.readOffres(this.id);
    });
  }

  async readOffres(id: string) {
    this.offres = await this.getAllOffres.getAllOffre(id);
    console.log(this.offres);
  }
  async getCV(url: string) {
    return await this.getAllOffres.downloadFile(`${url}`);
  }
  async showVoirPlus(offre: any) {
    this.router.navigate(['site', this.id, 'offre', offre.ref], {
      state: offre,
    });
  }
}
