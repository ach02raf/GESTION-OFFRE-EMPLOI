import { Component } from '@angular/core';
import { GetAllOffreService } from './services/get-all-offre.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GESTION-OFFRE-EMPLOI';
  constructor(private getAllOffres: GetAllOffreService) {}
  offres: any;
  ngOnInit() {
    this.readOffres();
  }
  async readOffres() {
    this.offres = await this.getAllOffres.getAllOffre('spacy-and-cosy');
    this.getAllOffres.downloadFile(this.offres[0].CV);
    console.log(this.offres[0].CV);
  }
}
