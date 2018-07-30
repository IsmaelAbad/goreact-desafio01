import React, { Fragment } from 'react';

import './style.scss';

const PostHeader = props => (
  <Fragment>
    <div className="post-header">
      <img id="post-header-img" src={props.foto} alt="Perfil" />
      <div>
        <p id="post-header-nome">
          {props.nome}
        </p>
        <p id="post-header-tempo">
          há
          {` ${props.tempo} `}
          minutos
        </p>
      </div>
    </div>
    <hr />
  </Fragment>
);
export default PostHeader;
