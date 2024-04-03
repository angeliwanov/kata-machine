const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    //1.Base case
    //1.1 Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze[0].length
    ) {
        return false;
    }
    //1.2 On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    //1.3 Reached the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    //1.4 Already seen
    if (seen[curr.y][curr.x]) {
        return false;
    }

    //2.  Recurse
    //2.1 Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    //2.2 Recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }
    //2.3 Post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
