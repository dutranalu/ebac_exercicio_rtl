import { useState } from 'react';
import styles from './PostComments.module.css';

interface Comment {
  id: number;
  text: string;
}

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!tempComment.trim()) return;

    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        text: tempComment
      }
    ]);

    setTempComment('');
  };

  return (
    <div className={styles['post-comments']}>
      <form
        className={styles['post-comments-form']}
        onSubmit={handleSubmit}
      >
        <textarea
          data-testid="comment-input"
          value={tempComment}
          onChange={e => setTempComment(e.target.value)}
          required
          className={styles['post-comments-form-textarea']}
        />

        <button
          data-testid="comment-button"
          type="submit"
          className={styles['post-comments-form-button']}
        >
          Comentar
        </button>
      </form>

      <ul data-testid="comment-list">
        {comments.map(comment => (
          <li key={comment.id}>
            <p data-testid="comment-text">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;

