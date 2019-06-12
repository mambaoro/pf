/**
 *
 * Asynchronously loads the component for BackEnd
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
