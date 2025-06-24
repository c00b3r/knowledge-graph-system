import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import './HeadingInput.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../../../../public/mock-data/data.json';

function HeadingInput() {
  const [editor] = useLexicalComposerContext();
  const [heading, setHeading] = useState('Без названия');
  const [prevHeading, setPrevHeading] = useState('Без названия');
  const [emptyError, setEmptyError] = useState(false);
  const params = useParams();

  function autoResizeTextarea(textareaElement: HTMLTextAreaElement) {
    textareaElement.style.height = 'auto';
    textareaElement.style.height = `${Math.max(
      textareaElement.scrollHeight,
      36
    )}px`;
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length > 0) {
      setPrevHeading(value);
    }
    setHeading(value);
    autoResizeTextarea(e.target);
  }

  useEffect(() => {
    if (heading.length > 0) {
      setEmptyError(false);
    }
  }, [heading]);

  useEffect(() => {
    const textarea = document.querySelector(
      '.heading-input'
    ) as HTMLTextAreaElement;
    if (textarea) {
      autoResizeTextarea(textarea);
    }
  });

  useEffect(() => {
    const editorContent = () => {
      try {
        const file = data.filter((item) => item.id === Number(params.fileId));

        setHeading(file[0].heading);
      } catch (error) {
        console.error(error);
      }
    };

    editorContent();
  }, [params]);

  const handleBlur = () => {
    if (heading.trim() === '') {
      setHeading(prevHeading);
      setEmptyError(false);
    }
  };

  return (
    <div className='heading-input-container'>
      <textarea
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
        onInput={handleChange}
        onBlur={handleBlur}
        className='heading-input'
        value={heading}
        name='heading'
        style={{ height: 28 }}
        rows={1}
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
