/**
 * Question 4:
 * หาผลรวมของตัวเลขใน Tree ที่กำหนดให้
 *
 * โครงสร้าง Tree:
 *               D
 *             /   \
 *            2     3
 *           /     / \
 *          4     5   F
 *               / \ / \
 *              0  7 9  10
 *
 * หมายเหตุ: D และ F เป็น node ที่ไม่ใช่ตัวเลข (ค่า = null)
 *           O (วงกลมว่าง) ใต้ node 5 = ไม่มี node (null)
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// สร้าง Tree ตามโจทย์
const tree = new TreeNode("D",
  new TreeNode(2,
    new TreeNode(4),       // leaf
    null                   // ไม่มี right child
  ),
  new TreeNode(3,
    new TreeNode(5,
      null,                // O = ไม่มี node
      new TreeNode(7)      // leaf
    ),
    new TreeNode("F",
      new TreeNode(9),     // leaf
      new TreeNode(10)     // leaf
    )
  )
);

// หาผลรวมด้วย Recursive DFS
function sumTree(node) {
  if (node === null) return 0;

  const currentVal = typeof node.value === "number" ? node.value : 0;
  return currentVal + sumTree(node.left) + sumTree(node.right);
}

// แสดง traversal แบบ Pre-order พร้อม sum
function printPreOrder(node, indent = "") {
  if (node === null) return;
  console.log(`${indent}Node: ${node.value}`);
  printPreOrder(node.left,  indent + "  L-");
  printPreOrder(node.right, indent + "  R-");
}

console.log("=== Question 4: Sum of Tree ===");
console.log("\nTree Traversal (Pre-order):");
printPreOrder(tree);

const total = sumTree(tree);
console.log("\n--- ผลลัพธ์ ---");
console.log("ผลรวมของตัวเลขทั้งหมดใน Tree =", total);
console.log("(2 + 3 + 4 + 5 + 7 + 9 + 10 =", 2+3+4+5+7+9+10, ")");
