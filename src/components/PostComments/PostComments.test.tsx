import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('PostComments', () => {
  it('deve inserir dois comentarios', () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');

    fireEvent.change(input, {
      target: { value: 'Primeiro comentario' }
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: { value: 'Segundo comentario' }
    });
    fireEvent.click(button);

    const comments = screen.getAllByTestId('comment-text');
    const list = screen.getByTestId('comment-list');

    expect(list.children).toHaveLength(2);
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('Primeiro comentario');
    expect(comments[1]).toHaveTextContent('Segundo comentario');
  });
});
