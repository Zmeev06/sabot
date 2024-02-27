export function getColorFromCssVariable(variable: string) {
  const value = getComputedStyle(document.body).getPropertyValue(variable);
  return value;
}

export function getColorFromCssVariableToRGB(variable: string) {
  const value = getComputedStyle(document.body).getPropertyValue(variable);
  return `rgb(${value})`;
}

export function getColorFromCssVariableToRGBA(variable: string) {
  const value = getComputedStyle(document.body).getPropertyValue(variable);
  return `rgb(${value} / 1)`;
}
