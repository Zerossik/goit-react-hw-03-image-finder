import { Loadmore } from './Button.styled';
export function Button({ text, onClick }) {
  return (
    <Loadmore type="button" onClick={onClick}>
      {text}
    </Loadmore>
  );
}
