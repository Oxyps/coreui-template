import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Abstract } from '../models/abstract.model';

export class Response<T>{
  current_page?: number;
  data?: T[];
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  total?: number;
}

export class RequestQuery {
  page?: string;
  size?: string;
  q?: string;
  sort?: string;
  sortDirection?: string;
  relations?: string;
  selects?: string[];
  byUser?: boolean;
  equal?: {key: string, value: string | number}[];
  showStockQty?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T extends Abstract> {

  constructor(
    protected http: HttpClient,
    @Inject('url') protected url: string
  ) { }

  loadQuery(query?: RequestQuery): HttpParams {
    let params = new HttpParams();

    if (query?.page) {
      params = params.append('page', query?.page);
    }

    if (query?.size) {
      params = params.append('size', query?.size);
    }

    if (query?.q) {
      params = params.append('q', query?.q);
    }

    if (query?.sort) {
      params = params.set('orderBy', query?.sort);
    }

    if (query?.sortDirection) {
      params = params.set(
        'orderDirection',
        query?.sortDirection
      );
    }

    if (query?.relations) {
      params = params.set('relations', query?.relations);
    }

    if (query?.selects) {
      query?.selects.forEach((field: string) => {
        params = params.append('selects[]', field);
      });
    }

    if (query?.byUser) {
      params = params.append('byUser', query?.byUser + '');
    }

    if (query?.equal) {
      query.equal.forEach((fieldObject: any) => {
        if (fieldObject.value != undefined) {
          params = params.append(
            `equal[${fieldObject.key}]`,
            fieldObject.value
          );
        }
      });
    }

    if (query?.showStockQty) {
      params = params.append('show_stock_qty', 'true');
    }

    return params;
  }

  findAll(query?: RequestQuery): Observable<Response<T>> {
    return this.http.get(
      this.url,
      { params: this.loadQuery(query) }
    );
  }

  findById(id: string): Observable<T> {
    return this.http.get<T>(this.url + '/' + id);
  }

  save(model: T, idKey?: string): Observable<T> {
    let id = model.id;

    if (idKey) {
      id = (model as any)[idKey];
    }

    if (id) {
      return this.http.put<T>(
        this.url + '/' + id,
        model
      );
    }
    return this.http.post<T>(this.url, model);
  }
}
