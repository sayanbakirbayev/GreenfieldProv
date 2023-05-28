import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GreenfieldService {

  constructor(private http:HttpClient) { }

    GetProviders(){
       return this.http.get('https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/greenfield/storage_providers?pagination.count_total=true&pagination.reverse=true')
       .pipe();
  }

      GetBuckets(){
       return this.http.get('https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/greenfield/storage/list_buckets?pagination.count_total=true&pagination.reverse=true')
       .pipe();
  }

}
