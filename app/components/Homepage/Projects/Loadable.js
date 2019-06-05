/**
 *
 * Asynchronously loads the component for Projects
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
