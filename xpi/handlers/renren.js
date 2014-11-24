// Authors:
//   Eric Butler <eric@codebutler.com>
//   Ian Gallagher <crash@neg9.org>
    register({  
      name: 'renren.com', 
      url: 'http://www.renren.com/', 
      domains: [ 'renren.com' ], 
      sessionCookieNames: [ 'p', 't' ], 
      identifyUser: function() { 
        var site = this.httpGet(this.siteUrl); 
       this.userName = site.body.querySelector('a.name').innerHTML; 
       // this.userAvatar = resp.body.querySelector('div.figure').src; //another query selector to grab the image (optional)   
      }  
    });  
