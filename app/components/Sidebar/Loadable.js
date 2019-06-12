/**
 *
 * Asynchronously loads the component for Sidebar
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
