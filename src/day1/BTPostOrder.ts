function walk(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return;
    }

    //recurse left
    walk(curr.left, path);
    //recurse right
    walk(curr.right, path);
    //post-order visit
    path.push(curr.value);
    return;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}
