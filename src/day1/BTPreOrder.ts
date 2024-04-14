function walk(curr: BinaryNode<number> | null, path: number[]) : number[] {
  if(!curr) {
    return path; 
  }

  //pre-order visit
  path.push(curr.value)
  //recurse left
  walk(curr.left, path);
  //recurse right
  walk(curr.right, path)

  return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}