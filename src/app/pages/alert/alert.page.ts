import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title = 'Alert';
  constructor(public alertCtr: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtr.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (text) => {
            this.title = text;
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtr.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'Titulo',
          type: 'text',
          placeholder: 'Alert Page'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (text) => {
            this.title = text.Titulo;
          }
        }
      ]
    });

    await alert.present();
  }

}
