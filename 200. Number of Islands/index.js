function numIslands(grid) {
    if (!grid) {
        return 0
    }
    const union = new UnionFind(grid)

    const rows = grid.length
    const cols = grid[0].length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const currentCell = grid[r][c]

            if (currentCell == '1') {
                if (r + 1 < rows && grid[r+1][c] == "1") {
                    union.union(r * cols + c, (r + 1) * cols + c)
                }

                if (c + 1 < cols && grid[r][c + 1] == "1") {
                    union.union(r * cols + c, r * cols + c + 1)
                }
            }
        }
    }

    return union.getCount()
};

/**
 * IMPLEMENTATION OF UNIONFIND
 * - We will create a custom class UnionFind to implement the union-find algorithm
 */
class UnionFind {
    parent;
    rank;
    count;

    // Initializing the parent list and count variable by traversing the grid
    constructor(grid) {
        this.parent = [];
        this.rank = [];
        this.count = 0;
        let m = grid.length;
        let n = grid[0].length;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    this.parent.push(i * n + j);
                    this.count += 1;
                } else {
                    this.parent.push(-1);
                }
                this.rank.push(1);
            }
        }
    }

    // Function to find the root parent of a node
    find(v) {
        if (this.parent[v] != v) {
            this.parent[v] = this.find(this.parent[v]);
        }
        return this.parent[v];
    }

    // Function to connect components
    union(v1, v2) {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        if (p1 != p2) {
            if (this.rank[p1] > this.rank[p2]) {
                this.parent[p2] = p1;
            } else if (this.rank[p1] < this.rank[p2]) {
                this.parent[p1] = p2;
            } else {
                this.parent[p2] = p1;
                this.rank[p1] += 1;
            }

            this.count -= 1;
        }
    }

    // Function to return the number of conencted components consisting of '1's
    getCount() {
        return this.count;
    }
}
