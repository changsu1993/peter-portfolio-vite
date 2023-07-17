import './blast.scss';

const Blast = ({ letterClass, arrayStr, indexLetter }: { letterClass: string; arrayStr: Array<string>; indexLetter: number }) => {
  return (
    <span>
      {arrayStr.map((char, index) => {
        return (
          <span key={char + index} className={`${letterClass} _${index + indexLetter}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default Blast;
