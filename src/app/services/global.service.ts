import { Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private dialog: MatDialog) { }

  /**
   * 開啟 dialog
   */
  openDialog(component: any, data: any, config?: MatDialogConfig) {
    const defaultOptions: MatDialogConfig = {
      data: data,
      width: '70vw',
      height: '95vh'
    };
    return this.dialog.open(component, {
      ...defaultOptions,
      ...(config || {}),
    });
  }
}
