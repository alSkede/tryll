export const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>{children}</button>
);