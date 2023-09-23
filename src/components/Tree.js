import TreeNode from "./TreeNode";

function Tree({ treeData }) {
    return (
      <ul>
        {treeData.map((node) => (
          <TreeNode node={node} />
        ))}
      </ul>
    );
  }
export default Tree;