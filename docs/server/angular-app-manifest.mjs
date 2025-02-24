
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularApp"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/about"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/services"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angularApp",
    "route": "/angularApp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 787, hash: '14e1382c479d5e2da603d0fe1a5afbd8a46f05b81fcf2434968d4082a1f5b8fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '247fc482a2862970857b87374f8ccb06faa018cc993ec136c6c370a5499c1e93', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5939, hash: '4a43bc81f468375fdba9946b51b44214471782f333b727db0d59b7cce5373739', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7504, hash: 'd6057f88b5499a40ade7b8e908e5a9945db5662e05d2b15e828256620dc04fdc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 5957, hash: 'ed89c0db22ba55f5a23fb3b528f451a1369a3cdfb5a382f0831608925d1c4269', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 6943, hash: '254eb828191a19fd5695afdedba9d528b2d9f28a530492ee2c2fee6897be7bd5', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6283, hash: '009c9017343ad2b1d15b237aef0f603846fe6c27f67e68321e4e55e90334b097', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-UVB6G45Q.css': {size: 5390, hash: 'AEo7vCKOUWc', text: () => import('./assets-chunks/styles-UVB6G45Q_css.mjs').then(m => m.default)}
  },
};
