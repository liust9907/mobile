import { withInstall } from '../utils';
import _Cell from './Cell';

export const Cell = withInstall(_Cell);
export default Cell;
export type { CellSize, CellProps, CellArrowDirection } from './Cell';
