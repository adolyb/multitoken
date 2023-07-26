import * as React from 'react';
import type { ThemeConfig } from '../config-provider';
import type { ModalFuncProps, ModalLocale } from './interface';
interface ConfirmDialogProps extends ModalFuncProps {
    afterClose?: () => void;
    close?: (...args: any[]) => void;
    autoFocusButton?: null | 'ok' | 'cancel';
    rootPrefixCls: string;
    iconPrefixCls?: string;
    theme?: ThemeConfig;
    /** @private Internal Usage. Do not override this */
    locale?: ModalLocale;
}
export declare function ConfirmContent(props: ConfirmDialogProps & {
    confirmPrefixCls: string;
}): React.JSX.Element;
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
