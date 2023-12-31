import { gentleman } from '../../data/repo';
import { Gentleman } from '../gentleman/gentlemans';
import { Info } from '../info/info';

export function App() {
  return (
    <div className="container">
      <Info></Info>
      <Gentleman gentlemans={gentleman}></Gentleman>
    </div>
  );
}
