import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsPracticeComponent } from './components/forms-practice/forms-practice.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/create',
    component: ProductFormComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent,
  },
  {
    path: 'formsPractice',
    component: FormsPracticeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
