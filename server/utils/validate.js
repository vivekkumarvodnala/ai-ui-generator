const allowedComponents = [
  "Button",
  "Card",
  "Input",
  "Modal",
  "Table",
  "Navbar",
  "Sidebar"
];

export function validateGeneratedCode(code) {
  const matches = code.match(/<([A-Z][A-Za-z0-9]*)/g);

  if (!matches) return true;

  for (let tag of matches) {
    const componentName = tag.replace("<", "");

    if (!allowedComponents.includes(componentName)) {
      return false;
    }
  }

  return true;
}
