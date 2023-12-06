import { Component } from '@angular/core';
import { GetAllOffreService } from '../services/get-all-offre.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.data = history.state;
    this.route.params.subscribe(async (params) => {
      this.cv = await this.getAllOffres.downloadFile(
        `CV${params['id'].split('-')[1]}/${history.state.CV}`
      );
    });
  }
}
