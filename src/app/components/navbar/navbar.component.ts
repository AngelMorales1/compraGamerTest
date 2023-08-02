import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  faCartShopping = faCartShopping;
  
  private subscription: Subscription;
  public cartQty: number = 0

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.cartItems$.subscribe(cart => {
      this.cartQty = cart.length
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
