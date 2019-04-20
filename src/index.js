const { registerBlockType } = wp.blocks;

registerBlockType("jsadvancers/basic-block", {
  title: "Basic Block",
  description: "Our cool basic Gutenberg Block",
  icon: "palmtree",
  attributes: {},
  category: "common",
  supports: {
    align: ["left", "right"]
  },
  edit: props => {
    return <p className={props.className}>Hello World!</p>;
  },
  save: props => {
    return <p className={props.className}>Hello World!</p>;
  }
});
