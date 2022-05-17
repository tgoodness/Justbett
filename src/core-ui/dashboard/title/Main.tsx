import './main.scss';
type Props = { children: React.ReactNode };

function Main(props: Props) {
  const { children } = props;
  return <div className="main-heading">{children}</div>;

}

export default Main;
