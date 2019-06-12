/**
 *
 * Asynchronously loads the component for FrontEnd
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
