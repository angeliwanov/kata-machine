function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr.right, needle);
    }
    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}

function insert(node: BinaryNode<number>, value: number): void {
    if (node.value >= value) {
        if (node.right) return insert(node.right, value);
        node.right = { value: value } as BinaryNode<number>;
    } else if (node.value < value) {
        if (node.left) return insert(node.left, value);
        node.left = { value: value } as BinaryNode<number>;
    }
}
