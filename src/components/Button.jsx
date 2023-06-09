import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';



const Button = ({bgColor, color, size, text, borderRadius}) => {
  const { setPageClose } = useStateContext();
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:sdrop-shadow xl`}
      onClick={() => setPageClose(false)}
    >
      {text}
    </button>
  );
}

export default Button