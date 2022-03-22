declare namespace _default {
    export const title: string;
    export { CodeWithDescription as component };
}
export default _default;
export function codeWithDescription(args: any): JSX.Element;
export namespace codeWithDescription {
    namespace args {
        const code: string;
        const description: string;
        const separator: string;
    }
}
import { CodeWithDescription } from "./CodeWithDesription";
