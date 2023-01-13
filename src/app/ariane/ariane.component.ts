import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})

export class ArianeComponent implements OnInit, OnDestroy {
  breadcrumb?: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private breadcrumbService: BreadcrumbService) { }

  async ngOnInit() {
    this.breadcrumbService.breadcrumb$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(breadcrumb => {
        if (breadcrumb) {
          this.breadcrumb = breadcrumb;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
