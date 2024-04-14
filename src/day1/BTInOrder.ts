function walk(curr: BinaryNode<number> | null, path: number[]) : number[] {
  if(!curr) {
    return path; 
  }

  //recurse left
  walk(curr.left, path);
  //in-order visit
  path.push(curr.value)
  //recurse right
  walk(curr.right, path)

  return path
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}