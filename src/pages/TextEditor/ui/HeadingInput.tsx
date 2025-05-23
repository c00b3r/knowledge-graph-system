import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import './HeadingInput.css';
import { useEffect, useState } from 'react';

function HeadingInput() {
  const [editor] = useLexicalComposerContext();
  const [heading, setHeading] = useState('Без названия');
  const [prevHeading, setPrevHeading] = useState('Без названия');
  const [emptyError, setEmptyError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length > 0) {
      setPrevHeading(value);
    }
    setHeading(value);
  }

  useEffect(() => {
    if (heading.length > 0) {
      setEmptyError(false);
    }
  }, [heading]);

  const handleBlur = () => {
    if (heading.trim() === '') {
      setHeading(prevHeading);
      setEmptyError(false);
    }
  };

  return (
    <div className='heading-input-container'>
      <input
        type='text'
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (heading.trim() === '') {
              setEmptyError(true);
            } else {
              editor.focus();
            }
          }
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        className='heading-input'
        value={heading}
      />
      {emptyError && (
        <div className='heading-input-error'>
          Название не должно оставаться пустым
        </div>
      )}
    </div>
  );
}

export default HeadingInput;
