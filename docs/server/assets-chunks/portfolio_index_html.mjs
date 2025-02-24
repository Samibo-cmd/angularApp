export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>AngularApp</title>
  <base href="/angularApp/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>*{margin:0;padding:0;font-family:Poppins,sans-serif,arial;box-sizing:border-box}html{scroll-behavior:smooth}body{background:#000;color:#fff;padding:12px 5%}.header-container{padding:10px,10%}.my-name{font-size:40px}.my-name span{color:#bb1531}nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}nav .fa-solid{display:none}nav ul li{display:inline-block;margin:10px 22px}nav ul li a{color:#fff;text-decoration:none;font-size:18px;position:relative;transition:color .5s}nav ul li a:hover{color:#bb1531}nav ul li a:after{content:"";width:0;height:3px;background:#bb1531;position:absolute;left:0;bottom:-6px;transition:.5s}nav ul li a:hover:after{width:100%}.heading{margin-bottom:10px;font-size:60px;font-weight:600;color:#fff}#portfolio{padding:50px 0}.work-list{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:40px;margin-top:50px}.work{position:relative;overflow:hidden;border-radius:10px}.work img{display:block;width:100%;height:50vh;border-radius:10px;transition:transform .5s}.work:hover img{transform:scale(1.1)}.layer{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:0;border-radius:10px;background:linear-gradient(#0009,#bb1531);position:absolute;left:0;bottom:0;overflow:hidden;padding:0 40px;text-align:center;font-size:14px;transition:height .5s}.layer h3{font-weight:500;margin-bottom:20px}.layer .anchor{width:60px;height:60px;border-radius:50%;margin-top:20px;font-size:18px;text-decoration:none;color:#bb1531;line-height:60px;background:#fff;text-align:center}.work:hover .layer{height:100%}.btn{display:block;margin:50px auto;width:fit-content;border:1px solid rgb(187,21,49);padding:15px 40px;border-radius:6px;text-decoration:none;color:#fff;transition:background .5s}.btn:hover{background:#bb1531}.copyright{width:100%;margin-top:20px;padding:25px 0;text-align:center;font-weight:300;background:#262626}.copyright i{color:#bb1531}@media only screen and (max-width: 600px){nav .fa-solid{display:block;cursor:pointer}nav ul{background:#bb1531;position:fixed;top:0;right:-200px;width:200px;height:100vh;padding-top:50px;z-index:99;transition:right .5s}nav ul li{display:block;margin:25px}nav ul .fa-solid{position:absolute;top:25px;left:25px;cursor:pointer}.heading{font-size:40px}.work-list{grid-template-columns:1fr}.copyright{font-size:14px}}
</style><link rel="stylesheet" href="styles-UVB6G45Q.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-UVB6G45Q.css"></noscript><style ng-app-id="ng">nav[_ngcontent-ng-c1382619627]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:15px 0}#side-menu[_ngcontent-ng-c1382619627]{display:flex;list-style:none;gap:2rem}.fa-bars[_ngcontent-ng-c1382619627], .fa-circle-xmark[_ngcontent-ng-c1382619627]{display:none}@media screen and (max-width: 768px){#side-menu[_ngcontent-ng-c1382619627]{display:none;background:#262626;position:fixed;top:0;right:-200px;width:200px;height:100vh;padding-top:50px;z-index:2;transition:right .5s}#side-menu.active[_ngcontent-ng-c1382619627]{display:block;right:0}.fa-bars[_ngcontent-ng-c1382619627]{display:block;font-size:25px;cursor:pointer;color:#000}.fa-circle-xmark[_ngcontent-ng-c1382619627]{display:block;font-size:25px;cursor:pointer;position:absolute;top:25px;right:25px;color:#fff}nav[_ngcontent-ng-c1382619627]   ul[_ngcontent-ng-c1382619627]   li[_ngcontent-ng-c1382619627]{display:block;margin:25px}nav[_ngcontent-ng-c1382619627]   ul[_ngcontent-ng-c1382619627]   li[_ngcontent-ng-c1382619627]   a[_ngcontent-ng-c1382619627]{color:#fff;text-decoration:none}}</style></head>
<body>
  <app-root ng-version="19.1.6" _nghost-ng-c1382619627 ng-server-context="ssg"><div _ngcontent-ng-c1382619627 class="header-container"><nav _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/" class="my-name" style="text-decoration: none;" href="/angularApp/"><span _ngcontent-ng-c1382619627>Port</span>folio</a><ul _ngcontent-ng-c1382619627 id="side-menu" class><li _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/" routerlinkactive="active" href="/angularApp/" class>Home</a></li><li _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/about" routerlinkactive="active" href="/angularApp/about" class>About</a></li><li _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/services" routerlinkactive="active" href="/angularApp/services" class>Services</a></li><li _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/portfolio" routerlinkactive="active" href="/angularApp/portfolio" class="active">Portfolio</a></li><li _ngcontent-ng-c1382619627><a _ngcontent-ng-c1382619627 routerlink="/contact" routerlinkactive="active" href="/angularApp/contact" class>Contact</a></li><i _ngcontent-ng-c1382619627 class="fa-solid fa-circle-xmark"></i></ul><i _ngcontent-ng-c1382619627 class="fa-solid fa-bars"></i></nav></div><router-outlet _ngcontent-ng-c1382619627></router-outlet><app-portfolio><div id="portfolio"><h1 class="heading">My Works</h1><div class="portfolio-container"><div class="work-list"><div class="work"><img src="work1.jpg" class="work-1-image"><div class="layer"><h3>Twitter Homepage</h3><p>This is a static Twitter home page clone - A collaboration work</p><a href="https://samibo-cmd.github.io/TwitterHomePage_Collaboration/"><i class="anchor fa-solid fa-link"></i></a></div></div><div class="work"><img src="pic-4.jpg" class="work-2-image"><div class="layer"><h3>YouTube Homepage</h3><p>A static and fully responsive YouTube home page clone</p><a href="https://samibo-cmd.github.io/YouTube-Homepage/"><i class="anchor fa-solid fa-link"></i></a></div></div><div class="work"><img src="work5.jpg" class="work-3-image"><div class="layer"><h3>Todo List</h3><p>A simple todo list to keep track of activities that one wants to carry out in the future</p><a href="https://samibo-cmd.github.io/Todo-List/"><i class="anchor fa-solid fa-link"></i></a></div></div><div class="work-4-image"><img src="work4.jpg"><div class="layer"><h3>Rock Paper Scissors</h3><p>Built a dynamic Rock Paper Scissors game</p><a href="https://samibo-cmd.github.io/JS-PRS/"><i class="anchor fa-solid fa-link"></i></a></div></div></div></div><div><a href="#" class="btn">See more</a></div></div></app-portfolio><!----><div _ngcontent-ng-c1382619627 class="copyright"><p _ngcontent-ng-c1382619627>Copyright &amp;copy Samuel. Designed with <i _ngcontent-ng-c1382619627 class="fa-solid fa-heart"> Angular</i></p></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-ZYLXFM7N.js" type="module"></script>

</body></html>`;