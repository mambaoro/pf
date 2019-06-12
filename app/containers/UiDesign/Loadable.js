/**
 *
 * Asynchronously loads the component for UiDesign
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
