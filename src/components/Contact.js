import Tree from "./Tree";
const Contact = () => {
    var data = [
        {
          nodeName: "node1",
          children: [
            { nodeName: "child1", children: [{ nodename: "grandCHild1" }] },
            { nodeName: "child2", children: [{ nodename: "grandCHild1" }] },
          ],
        },
      ];
  return (
    <>
      <h1>Contact us page</h1>
      <Tree treeData={data} />
    </>
  );
};

export default Contact;
