import { customersLarge } from "../../customers-large";


export class CustomerService {

    getCustomersLarge() {
        return Promise.resolve(customersLarge);
    }

    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}
     