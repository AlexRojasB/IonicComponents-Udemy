import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') list: IonList;
  users: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(item) {
    console.log('favorite', item);
    this.list.closeSlidingItems();
  }

  delete(item) {
    console.log('delete', item);
    this.list.closeSlidingItems();
  }

  share(item) {
    console.log('share', item);
    this.list.closeSlidingItems();
  }
}
