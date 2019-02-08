export const SEARCH = 'SEARCH';
export const SELECTUSER = 'SELECTUSER';

export function search(value) {
    return { type: SEARCH, value };
}
export function selectuser(value) {
    return { type: SELECTUSER, value };
}
