const allowedComponents = [
  "Button",
  "Card",
  "Input",
  "Modal",
  "Table",
  "Navbar",
  "Sidebar",
];

export function validateGeneratedCode(code) {
  // Block lowercase HTML tags
  const lowercaseTag = code.match(/<\/?[a-z]+/g);
  if (lowercaseTag) return false;

  // Block script injection
  if (code.includes("<script")) return false;

  const matches = code.match(/<([A-Z][A-Za-z0-9]*)/g);

  if (!matches) return false;

  for (let tag of matches) {
    const componentName = tag.replace("<", "");
    if (!allowedComponents.includes(componentName)) {
      return false;
    }
  }

  return true;
}
