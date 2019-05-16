import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: any;

  constructor(private loadingController: LoadingController) { }

  async ngOnInit() {
    this.presentLoading('espere');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }


  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message
    });
    return this.loading.present();
  }
}
