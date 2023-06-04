import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';
import { faCoffee, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
    faCoffee = faCoffee;
    left = faChevronLeft;
    right = faChevronRight;
    products: Product[] = [];
    responsiveOptions;
    actualizarComponent:number = 0;

    @Input() coords?: number[];
    @Input() restaurantes?: Product[];

    localizacion?: String;
    coords1: number[] = [];
    coords2: number[] = [];
    resultadoLocalizacion: number = 0;

    actualizarLocation: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    constructor(private productService: ProductsService,
        ) {
        this.responsiveOptions = [
            {
                breakpoint: '2000px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1550px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '1124px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '640px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        this.obtenerLocationActualizada().subscribe((data) => {
            this.coords1 = data
        })
    }

    ngOnInit() {
        this.productService.getProducts().then(products => {
            this.products = products;
            this.products.forEach(restauranteInfo => {
                if (restauranteInfo.location != undefined) {
                    this.resultadoLocalizacion = Math.round(this.calcularDistanciaEntreDosCoordenadas(this.coords1[0], this.coords1[1], restauranteInfo.location[0], restauranteInfo.location[1]));
                    this.localizacion = this.resultadoLocalizacion + " Km";
                    if (this.resultadoLocalizacion > 2) {
                        this.products[restauranteInfo.id].DistanceFromUser = this.localizacion;
                    } else if (this.resultadoLocalizacion < 2) {
                        this.products[restauranteInfo.id].DistanceFromUser = "A pocos metros";
                    } else {
                        this.products[restauranteInfo.id].DistanceFromUser = "";
                    }
                }
            });
        });
      
       
       
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['coords'].currentValue != changes['coords'].previousValue) {
            this.actualizarLocation.next(changes['coords'].currentValue);
            this.ngOnInit();
        }
    }

    obtenerLocationActualizada() {
        return this.actualizarLocation.asObservable();
    }
    calcularDistanciaEntreDosCoordenadas(lat1: number, lon1: number, lat2: number, lon2: number) {
        lat1 = this.gradosARadianes(lat1);
        lon1 = this.gradosARadianes(lon1);
        lat2 = this.gradosARadianes(lat2);
        lon2 = this.gradosARadianes(lon2);

        const RADIO_TIERRA_EN_KILOMETROS = 6371;
        let diferenciaEntreLongitudes = (lon2 - lon1);
        let diferenciaEntreLatitudes = (lat2 - lat1);
        let a = Math.pow(Math.sin(diferenciaEntreLatitudes / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diferenciaEntreLongitudes / 2.0), 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return RADIO_TIERRA_EN_KILOMETROS * c;
    }
    gradosARadianes(grados: number) {
        return grados * Math.PI / 180;
    }
}
