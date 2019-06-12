/**
 *
 * Asynchronously loads the component for Content
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
