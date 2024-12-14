export const signature = () =>
  console.log(
    "%c              Developed by Unkuz              ",
    "background: black; color: rgb(52 208 255);",
    "https://github.com/unkuz/"
  );

export const rmTextNodeHelper = (nodes: NodeListOf<ChildNode>): ChildNode[] => {
  const result: ChildNode[] = [];
  nodes.forEach((i) => {
    if (i.nodeName !== "#text") {
      result.push(i);
    }
  });
  return result;
};

export const navigation = [
  {
    name: "work",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
