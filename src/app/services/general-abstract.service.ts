import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { GeneralAbstract } from '../models/general-abstract.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export abstract class GeneralAbstractService<T extends GeneralAbstract> extends AbstractService<T>{

  constructor(
    protected http: HttpClient,
    @Inject('url') protected url: string
  ) {
    super(http, url)
  }
}
