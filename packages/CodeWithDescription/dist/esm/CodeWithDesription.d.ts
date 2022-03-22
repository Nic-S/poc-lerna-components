/// <reference types="react" />
export interface CodeAndDescriptionProps {
    separator?: string;
    code: string;
    description: string;
}
export declare function CodeWithDescription({ separator, code, description }: CodeAndDescriptionProps): JSX.Element;
