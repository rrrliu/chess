import React from 'react';

function Board() {
  const row = [...Array(8).keys()].map((v) => <td>S</td>);
  const squares = [...Array(8).keys()].map((v) => <tr>{row}</tr>);

  return (
    <table>
      <tbody>{squares}</tbody>
    </table>
  );
}

export default Board;
