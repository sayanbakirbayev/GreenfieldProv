import { Component } from '@angular/core';
import { GreenfieldService } from '../greenfield.service';

   export interface ProvDataType {
      operator_address: string;
      funding_address: string;
      seal_address: string;
      approval_address: string;
      total_deposit: string;
      status: string;
      endpoint: string;
      moniker: string;
      website: string;
    }



   export interface BucketType {
      bucket_name: string;
      visibility: string;
      id: string;
      source_type: string;
      primary_sp_address: string;
      payment_address: string;
      price_time: string;
      total_charge_size: string;
    }

@Component({
  selector: 'app-homeplage',
  templateUrl: './homeplage.component.html',
  styleUrls: ['./homeplage.component.css']
})



export class HomeplageComponent {
   constructor(private srv:GreenfieldService){}

   ProvData : ProvDataType[] = [];
   BucketData : BucketType[] = [];
   FBucketData : BucketType[] = [];
   FBucketObj : BucketType = {bucket_name: '',
      visibility: '',
      id: '',
      source_type:'',
      primary_sp_address: '',
      payment_address:'',
      price_time: '',
      total_charge_size:''
    };
   rows : any [] = [];
   filteredrow : any [] = [];
   public loading = false;
   public displayStyle = "none";
   ngOnInit() {
     this.LoadProvider();
     this.LoadBuckets();
   }

  async LoadProvider(){
     this.srv.GetProviders().subscribe( (res:any) =>{
       console.log(res);
       this.rows = res.sps;
       for (let i = 0; i < this.rows.length; i++){
           this.ProvData.push({operator_address : this.rows[i].operator_address,
                          funding_address : this.rows[i].funding_address,
                          seal_address : this.rows[i].seal_address,
                          approval_address : this.rows[i].approval_address,
                          total_deposit : this.rows[i].total_deposit,
                          status : this.rows[i].status,
                          endpoint : this.rows[i].endpoint,
                          moniker : this.rows[i].description.moniker,
                          website : this.rows[i].description.website})
       }

     })

   }

  async loadFilteredBuket(sp_adrress : string){
      console.log(sp_adrress);
      this.FBucketData = [];
      let FBucketObj : any;
      const myPromise = new Promise((resolve, reject) => {FBucketObj = this.BucketData.find(({ primary_sp_address }) => primary_sp_address === sp_adrress);
      resolve('done');
     })
      myPromise.then((value) => {
        console.log(FBucketObj);
          this.FBucketData.push(FBucketObj);
    });

 }

  async LoadBuckets(){
     let data  = [];
     this.srv.GetBuckets().subscribe( (res:any) =>{
       console.log(res);
       data = res.bucket_infos;
       for (let i = 0; i < data.length; i++){
           this.BucketData.push({bucket_name : data[i].bucket_name,
                          visibility : data[i].visibility,
                          id : data[i].id,
                          source_type : data[i].source_type,
                          payment_address : data[i].payment_address,
                          primary_sp_address : data[i].primary_sp_address,
                          price_time : data[i].billing_info.price_time,
                          total_charge_size : data[i].billing_info.total_charge_size})
       }

     })

   }

openPopup(sp_adr : any) {
       this.loadFilteredBuket(sp_adr);
      this.displayStyle ="block";
  }
  closePopup(){
    this.displayStyle = "none";
  }



}
