import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';
import Header from './Header';
import Post from './Post';
import PostHeader from './PostHeader';

class App extends Component {
  state = {
    posts: [
      {
        foto: require('../src/img/perfil01.png'),
        nome: 'Ismael',
        tempo: 2,
        conteudo:
          'Totalmente escrita por voluntários espalhados pelo mundo inteiro, a Wikipédia é mantida por uma fundação sem fins lucrativos, a Wikimedia Foundation. O corpo de editores é diverso, difuso, voluntário e não tem qualquer ligação profissional com a Wikimedia Foundation, que é mantida com doações, não solicita dados pessoais e respeita rigorosamente a privacidade de leitores e editores. Isso favorece a escrita neutra, imparcial e isenta de interferência externa.',
      },
      {
        foto: require('../src/img/perfil02.jpg'),
        nome: 'Bruno',
        tempo: 10,
        conteudo:
          'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
      },
      {
        foto: require('../src/img/perfil03.jpeg'),
        nome: 'Fabio',
        tempo: 35,
        conteudo:
          'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      },
    ],
  };

  listPosts = this.state.posts.map(post => (
    <Post>
      <PostHeader foto={post.foto} nome={post.nome} tempo={post.tempo} />
      <p>
        {post.conteudo}
      </p>
    </Post>
  ));

  render() {
    return (
      <Fragment>
        <Header />
        {this.listPosts}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
