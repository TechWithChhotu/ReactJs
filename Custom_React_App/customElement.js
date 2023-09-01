const customeRander = (Element, mainContainer) => {
  console.log(mainContainer);
  const newElement = document.createElement(Element.type);
  newElement.setAttribute("href", Element.props.href);
  newElement.setAttribute("target", Element.props.target);

  newElement.innerText = Element.children;
  console.log(newElement);
  mainContainer.appendChild(newElement);
};

const Element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
const mainContainer = document.getElementById("root");

customeRander(Element, mainContainer);
