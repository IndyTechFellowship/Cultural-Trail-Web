import DashboardView from './components/DashboardView'
import {requireAuthentication} from '../../components/AuthenticatedComponent';

// Sync route definition
export default {
  component: requireAuthentication(DashboardView)
}
