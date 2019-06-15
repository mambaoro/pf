/**
 *
 * Asynchronously loads the component for TopNavBar
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
