import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-time",
  templateUrl: "./date-time.page.html",
  styleUrls: ["./date-time.page.scss"]
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;
  constructor() {}

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "Save",
          handler: event => {
            console.log("Clickd Save!");
            console.log(event.day.vaue); // para obtener el dia
          }
        },
        {
          text: "Log",
          handler: () => {
            console.log("Clicked Log. Do not Dismiss.");
            return false;
          }
        }
      ]
    };
  }
  cambioFecha(event) {
    console.log(event);
    console.log(new Date(event.detail.value)); // convert ISO Date to new working date
  }
}
