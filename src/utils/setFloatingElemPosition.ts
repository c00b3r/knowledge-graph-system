const VERTICAL_GAP = 10;
const HORIZONTAL_OFFSET = 5;

export function setFloatingElemPosition(
  targetRect: DOMRect | null,
  floatingElem: HTMLElement,
  anchorElem: HTMLElement,
  verticalGap: number = VERTICAL_GAP,
  horizontalOffset: number = HORIZONTAL_OFFSET
): void {
  const scrollerElem = anchorElem;

  if (targetRect === null || !scrollerElem) {
    floatingElem.style.opacity = '0';
    floatingElem.style.transform = 'translate(-10000px, -10000px)';
    return;
  }

  const floatingElemRect = floatingElem.getBoundingClientRect();
  const editorScrollerRect =
    scrollerElem.parentElement?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      right: window.innerWidth,
    };

  const scrollY = scrollerElem.scrollTop;
  const scrollX = scrollerElem.scrollLeft;

  let top = targetRect.top - floatingElemRect.height - verticalGap + scrollY;
  let left = targetRect.left - horizontalOffset + scrollX;

  const selection = window.getSelection();
  if (selection?.rangeCount) {
    const range = selection.getRangeAt(0);
    const textNode = range.startContainer;
    const textElement =
      textNode.nodeType === Node.ELEMENT_NODE
        ? (textNode as Element)
        : textNode.parentElement;

    if (textElement) {
      const textAlign = getComputedStyle(textElement).textAlign;
      if (textAlign === 'right' || textAlign === 'end') {
        left =
          targetRect.right -
          floatingElemRect.width +
          horizontalOffset +
          scrollX;
      }
    }
  }

  if (top < editorScrollerRect.top) {
    top = targetRect.bottom + verticalGap;
  }

  left = Math.max(
    editorScrollerRect.left,
    Math.min(
      left,
      editorScrollerRect.right - floatingElemRect.width - horizontalOffset
    )
  );

  floatingElem.style.opacity = '1';
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}
