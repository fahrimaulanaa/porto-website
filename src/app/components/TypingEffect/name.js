import React, { useState, useEffect } from 'react';

const TypingTextName = () => {
  const [text, setText] = useState('');
  const originalText = 'Fahri Maulana';

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const typingInterval = setInterval(() => {
      if (index >= originalText.length && !isDeleting) {
        isDeleting = true;
      }

      if (index === 1 && isDeleting) {
        isDeleting = false;
      }

      setText(originalText.substring(0, index));

      if (isDeleting) {
        index -= 1;
      } else {
        index += 1;
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-5xl font-bold text-white xl:text-3xl 2xl:text-8xl">
      {text}
    </h1>
  );
};

export default TypingTextName