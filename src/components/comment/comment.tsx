'ues client'
import React, { useState } from 'react';
import { Smile } from 'lucide-react';

interface CommentInputProps {
  onSubmit: (comment: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(comment);
    setComment(''); 
    const textarea = event.currentTarget.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
    }
  };

  const handleEmojiClick = () => {
    // Здесь можно добавить логику для отображения панели с эмоджи
    console.log('Добавление эмоджи...');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <textarea
        placeholder="Добавьте комментарий..."
        value={comment}
        onChange={handleChange}
        className="w-full pr-4 py-2 rounded-md resize-none focus:outline-none text-[0.8rem]"
        rows={1} 
        style={{
          minHeight: '38px', 
          lineHeight: '1.5', 
          overflowY: 'hidden', 
          border: 'none', 
        }}
      />
      <button
        type="submit"
        className="px-4 py-2 text-blue-600 border-none bg-transparent font-semibold text-[0.9rem] "
      >
        Опубликовать
      </button>
      <button
        type="button"
        onClick={handleEmojiClick}
        className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <Smile className="w-6 h-6" />
      </button>
    </form>
  );
};

export default CommentInput;
