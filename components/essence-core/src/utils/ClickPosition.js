
export function ClickPosition(element, parentElement) {
  let xPosition = 0;
  let yPosition = 0;

  if (element && parentElement) {
    xPosition = (element.clientX - parentElement.left);
    yPosition = (element.clientY - parentElement.top);
  }
  return { x: xPosition, y: yPosition };
}