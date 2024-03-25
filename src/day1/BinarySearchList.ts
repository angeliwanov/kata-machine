// export default function bs_list(haystack: number[], needle: number): boolean {
//     const mid = Math.floor(haystack.length / 2);
//     if (haystack[mid] === needle) {
//         return true;
//     } else if (haystack.length > 1) {
//         if (haystack[mid] > needle) {
//             return bs_list(haystack.slice(0, mid), needle);
//         } else {
//             return bs_list(haystack.slice(mid + 1), needle);
//         }
//     }
//     return false;
// }

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        let mid = Math.floor(low + (high - low) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);

    return false;
}
