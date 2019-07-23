import React from 'react';
import ReactDOM from 'react-dom';
import {Board} from './components/board/Board';

ReactDOM.render(<Board grid={[0, 1, 2, 3, 4, 5, 6, 7, 8]}/>, document.getElementById('root'));
