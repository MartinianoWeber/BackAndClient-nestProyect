import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  // El form group para cada input del form
  form: FormGroup = this.createForm({
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  });

  // retornarn errores

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get priceControl(): FormControl {
    return this.form.get('price') as FormControl;
  }

  get imageURLControl(): FormControl {
    return this.form.get('imageURL') as FormControl;
  }

  // Variable para saber si editamos o no
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  private createForm(model: Product): FormGroup {
    return this.fb.group(model);
  }
  // Funcion para enviar un nuevo producto a la DB
  submitProduct() {
    const product = this.form.value;
    console.log(product);
    this.productService.createProduct(product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => console.log(err)
    );
  }

  updateProduct() {
    const product = this.form.value;
    console.log(product);
    this.productService.updateProduct(product._id, product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [''] ? (this.form.get('_id') as FormControl) : '',
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      imageURL: ['', [Validators.required]],
    });
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productService.getProduct(params['id']).subscribe(
        (res) => {
          this.form.patchValue(res);
          console.log(this.form.value);
          console.log(res);
          this.edit = true;
        },
        (err) => console.log(err)
      );
    } else {
      this.edit = false;
    }
  }
}
