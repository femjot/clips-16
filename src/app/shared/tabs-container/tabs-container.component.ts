import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList<TabComponent>();
  //option: with optional mark but init object not needed
  //@ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    this.tabs!.first.active = true;
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;

    //prevent default behavior when no $event object exists here
    return false;
  }
}
