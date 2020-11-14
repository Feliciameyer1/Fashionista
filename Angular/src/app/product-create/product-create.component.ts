import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router, private ps: ProductsService) { 
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: [0, [Validators.required]],
      quantity: [0, [Validators.required]],
    });
    this.failedCreation = false;
    this.successfulCreation = false;

  }
  title = 'create-product';

  form: FormGroup;
  failedCreation;
  successfulCreation;
  ngOnInit(): void {
  }
  submitCreationForm(): void {
    if (this.form.valid) {
      this.ps.postProduct(this.form.getRawValue()).then(product => {
        if (!product) {
          console.log(product);
          this.failedCreation = true;
          this.successfulCreation = false;
        } else {
          this.successfulCreation = true;
          this.failedCreation = false;
        }
      });
    }

  }
}
