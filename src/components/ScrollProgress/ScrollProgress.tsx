import { RefObject, useEffect, useRef } from 'react';

export type ScrollProgressProps<T> = {
  parentRef: RefObject<T>;
};

export function ScrollProgress<T extends HTMLElement>({ parentRef, ...props }: ScrollProgressProps<T>) {
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentNode = parentRef.current;

    function setScrollProgressWidth() {
      if (scrollProgressRef.current !== null && parentNode !== null) {
        scrollProgressRef.current.style.width = getScrollProgressWidth(parentNode);
      }
    }

    setScrollProgressWidth();
    parentNode?.addEventListener('scroll', setScrollProgressWidth);

    return () => {
      parentNode?.removeEventListener('scroll', setScrollProgressWidth);
    };
  }, [parentRef]);

  return (
    <div
      ref={scrollProgressRef}
      style={{
        position: 'sticky',
        top: 0,
        height: '2px',
        backgroundColor: 'red',
        width: 0,
      }}
      {...props}
    />
  );
}

function getScrollProgressWidth(element: HTMLElement) {
  let width = '0';

  if (element.scrollTop !== 0) {
    width = `${((element.scrollTop) * 100 / (element.scrollHeight - element.clientHeight))}%`;
  }

  return width;
}
