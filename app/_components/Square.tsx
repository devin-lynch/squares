import { useState } from 'react';

export default function Square() {
  const [animated, setAnimated] = useState(false);
  return (
    <div
      className={`size-12 bg-white border-4 border-red-900 hover:bg-sky-900 hover:border-pink-300  ${
        animated ? 'animate-square-bounce' : ''
      }`}
      onMouseEnter={() => setAnimated(() => true)}
      onAnimationEnd={() => setAnimated(() => false)}
    ></div>
  );
}
