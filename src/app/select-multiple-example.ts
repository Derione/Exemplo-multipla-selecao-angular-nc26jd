import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
})
export class SelectMultipleExample {
  indicadores = new FormControl();
  indicadoresList: string[] = [
    'Indicador de Operação',
    'Indicador de Operação LTQ',
    'Indicador de Estoque',
    'Indicador de Estoque Vendas/LTQ',
  ];
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
