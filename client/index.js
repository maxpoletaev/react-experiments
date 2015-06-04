import $ from 'jquery';

import page from 'page';
import React from 'react';

import Layout from './layout';
import Index from './pages/index';
import Products from './pages/products'

page('/', (ctx, next) => {
  ctx.Page = <Index />;
  next();
});

page('/products', (ctx, next) => {
  ctx.Page = <Products />;
  next();
});

page(({Page}, next) => {
  if (!Page) next();
  React.render(<Layout>{Page}</Layout>, document.getElementById('root'));
});

page();
