import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private products: Product[] = []
  public sortedProds: Product[] = []
  public categories: Category[] = []

  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((resp) => {
      this.products = resp
      this.sortedProds = resp
    })

    this.productsService.getCategories().subscribe((resp)=> {
      this.categories = resp
      this.products.forEach(product => {
        const subcategoria = resp.find((sub:Category) => sub.id === product.id_subcategoria);
        if (subcategoria) {
          product.nombreCategoria = subcategoria.nombre;
        }
      });
    })
  }

  setImageUrl(img: any): string {
    return 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_' + img[0].nombre + "-med.jpg"
  }

  onSelectOption(event: Event) {
    const selectedValue = Number((event.target as HTMLSelectElement).value);
    this.sortedProds = this.products
    
    if(selectedValue !== 0){
      this.sortedProds = this.sortedProds.filter((prod)=> prod.id_subcategoria === selectedValue)
    }
  }

  addToCart(prod:Product){
    this.cartService.addProdToCart(prod)
  }
}
