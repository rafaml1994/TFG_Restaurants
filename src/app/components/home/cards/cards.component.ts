import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import {Product} from '../../../models/Product';
import { faCoffee,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
    faCoffee = faCoffee;
    left = faChevronLeft;
    right = faChevronRight;
    products!: Product[]; 
	responsiveOptions;

	constructor(private productService: ProductsService) {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

    ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }
}
