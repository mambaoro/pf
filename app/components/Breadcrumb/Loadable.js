/**
 *
 * Asynchronously loads the component for Breadcrumb
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
