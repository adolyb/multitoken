import * as React from 'react';
import type { CellRender, PanelSharedProps } from '../../interface';
export declare type QuarterPanelProps<DateType> = {
    cellRender?: CellRender<DateType>;
} & PanelSharedProps<DateType>;
declare function QuarterPanel<DateType>(props: QuarterPanelProps<DateType>): React.JSX.Element;
export default QuarterPanel;
