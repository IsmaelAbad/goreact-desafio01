import React from 'react';

import './style.scss';

const Post = props => (
  <div id="post">
    <p id="post-conteudo">
      {props.children}
    </p>
  </div>
);

export default Post;
