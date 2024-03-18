import AuthService from '~/common/services/AuthService'
import ShopService from '~/common/services/ShopService'
import ProductService from '~/common/services/ProductService'
import OrderService from '~/common/services/OrderService'
import CustomerService from '~/common/services/CustomerService'
import AccountService from '~/common/services/AccountService'
import LocationService from '~/common/services/LocationService'
import BankSerice from '~/common/services/BankSerice'
import SupplierService from './SupplierService'
import WarehouseService from './WarehouseService'
import ReportService from './ReportService'

export default ($axios, $config) => ({
  auth: AuthService($axios, $config),
  shop: ShopService($axios, $config),
  product: ProductService($axios, $config),
  order: OrderService($axios, $config),
  customer: CustomerService($axios, $config),
  account: AccountService($axios, $config),
  location: LocationService($axios, $config),
  bank: BankSerice($axios, $config),
  supplier: SupplierService($axios, $config),
  warehouse: WarehouseService($axios, $config),
  report: ReportService($axios, $config),
})
