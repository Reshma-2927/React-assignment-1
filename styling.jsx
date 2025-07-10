import React, { useState } from 'react';

function ColorToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      style={{ backgroundColor: active ? 'green' : 'red', color: 'white' }}
    >
      Toggle Color
    </button>
  );
}

export default ColorToggleButton;
