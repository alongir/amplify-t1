/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NoteUIProps } from "./NoteUI";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUICollectiOverridesProps = {
    NoteUICollecti?: PrimitiveOverrideProps<CollectionProps>;
    NoteUI?: NoteUIProps;
} & EscapeHatchProps;
export declare type NoteUICollectiProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NoteUIProps;
} & {
    overrides?: NoteUICollectiOverridesProps | undefined | null;
}>;
export default function NoteUICollecti(props: NoteUICollectiProps): React.ReactElement;
