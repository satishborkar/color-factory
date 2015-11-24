// get available data
var brandList = [{
	brandType : 'red',
	brandColeCode : '#fb0a2a',
	brandName : '4ormat'
}, {
	brandType : 'blue',
	brandColeCode : '#02adea',
	brandName : '500px'
}, {
	brandType : 'blue',
	brandColeCode : '#00405d',
	brandName : 'About.me(blue)'
}, {
	brandType : 'yellow',
	brandColeCode : '#ffcc33',
	brandName : 'About.me(blue)'
}, {
	brandType : 'red',
	brandColeCode : '#ff6138',
	brandName : 'Addvocate'
}, {
	brandType : 'red',
	brandColeCode : '#ff0000',
	brandName : 'Adobe'
}, {
	brandType : 'yellow',
	brandColeCode : '#fcd20b',
	brandName : 'Aim'
}, {
	brandType : 'red',
	brandColeCode : '#e47911',
	brandName : 'Amazon'
}, {
	brandType : 'green',
	brandColeCode : '#a4c639',
	brandName : 'Android'
}, {
	brandType : 'green',
	brandColeCode : '#7fbb00',
	brandName : 'Angie List'
}, {
	brandType : 'blue',
	brandColeCode : '#0060a3',
	brandName : 'AOL'
}, {
	brandType : 'blue',
	brandColeCode : '#1d8dd5',
	brandName : 'Asana'
}, {
	brandType : 'blue',
	brandColeCode : '#003366',
	brandName : 'Atlassian'
}, {
	brandType : 'blue',
	brandColeCode : '#005cff',
	brandName : 'Behance'
}, {
	brandType : 'green',
	brandColeCode : '#97b538',
	brandName : 'Big Cartel'
}, {
	brandType : 'red',
	brandColeCode : '#ee6123',
	brandName : 'Bitly'
}, {
	brandType : 'red',
	brandColeCode : '#fc4f08',
	brandName : 'Blogger'
}, {
	brandType : 'blue',
	brandColeCode : '#0039a6',
	brandName : 'Boeing'
}, {
	brandType : 'blue',
	brandColeCode : '#003580',
	brandName : 'Booking.com'
}, {
	brandType : 'other',
	brandColeCode : '#613854',
	brandName : 'Carbonmade'
}, {
	brandType : 'red',
	brandColeCode : '#ff7243',
	brandName : 'Cheddar'
}, {
	brandType : 'red',
	brandColeCode : '#b50900',
	brandName : 'Coca-Cola'
}, {
	brandType : 'other',
	brandColeCode : '#3d4944',
	brandName : 'Code-School'
}, {
	brandType : 'green',
	brandColeCode : '#8ba753',
	brandName : 'Creative Market'
}, {
	brandType : 'blue',
	brandColeCode : '#205cc0',
	brandName : 'Delicious'
}, {
	brandType : 'blue',
	brandColeCode : '#3287c1',
	brandName : 'Dell'
}, {
	brandType : 'red',
	brandColeCode : '#e54a4f',
	brandName : 'Designmoo'
}, {
	brandType : 'other',
	brandColeCode : '#4e6252',
	brandName : 'Deviantart'
}, {
	brandType : 'blue',
	brandColeCode : '#2d72da',
	brandName : 'Designer-News'
}, {
	brandType : 'red',
	brandColeCode : '#fd0001',
	brandName : 'Devour'
}, {
	brandType : 'yellow',
	brandColeCode : '#febd17',
	brandName : 'DEWALT'
}, {
	brandType : 'blue',
	brandColeCode : '#59a3fc',
	brandName : 'Disqus(blue)'
}, {
	brandType : 'yellow',
	brandColeCode : '#db7132',
	brandName : 'Disqus(Orange)'
}, {
	brandType : 'other',
	brandColeCode : '#ea4c89',
	brandName : 'Dribbble'
}, {
	brandType : 'blue',
	brandColeCode : '#3d9ae8',
	brandName : 'Dropbox'
}, {
	brandType : 'blue',
	brandColeCode : '#0c76ab',
	brandName : 'Drupal'
}, {
	brandType : 'other',
	brandColeCode : '#2a323a',
	brandName : 'Dunked'
}, {
	brandType : 'green',
	brandColeCode : '#89c507',
	brandName : 'eBay'
}, {
	brandType : 'red',
	brandColeCode : '#f05e1b',
	brandName : 'Ember'
}, {
	brandType : 'blue',
	brandColeCode : '#00bdf6',
	brandName : 'Engadget'
}, {
	brandType : 'green',
	brandColeCode : '#528036',
	brandName : 'Envato'
}, {
	brandType : 'red',
	brandColeCode : '#eb6d20',
	brandName : 'Etsy'
}, {
	brandType : 'green',
	brandColeCode : '#5ba525',
	brandName : 'Evernote'
}, {
	brandType : 'red',
	brandColeCode : '#dd0017',
	brandName : 'Fab.com'
}, {
	brandType : 'blue',
	brandColeCode : '#3b5998',
	brandName : 'Facebook'
}, {
	brandType : 'red',
	brandColeCode : '#e66000',
	brandName : 'Firefox(red)'
}, {
	brandType : 'blue',
	brandColeCode : '#0063dc',
	brandName : 'Flickr(blue)'
}, {
	brandType : 'pink',
	brandColeCode : '#ff0084',
	brandName : 'Flickr(pink)'
}, {
	brandType : 'green',
	brandColeCode : '#5b9a68',
	brandName : 'Forrst'
}, {
	brandType : 'blue',
	brandColeCode : '#25a0ca',
	brandName : 'Foursquare'
}, {
	brandType : 'blue',
	brandColeCode : '#007cc3',
	brandName : 'Garmin'
}, {
	brandType : 'blue',
	brandColeCode : '#2d75a2',
	brandName : 'GetGlue'
}, {
	brandType : 'pink',
	brandColeCode : '#f70078',
	brandName : 'Gimmebar'
}, {
	brandType : 'other',
	brandColeCode : '#171515',
	brandName : 'GitHub'
}, {
	brandType : 'blue',
	brandColeCode : '#0140ca',
	brandName : 'Google(Blue)'
}, {
	brandType : 'green',
	brandColeCode : '#16a61e',
	brandName : 'Google(Green)'
}, {
	brandType : 'red',
	brandColeCode : '#dd1812',
	brandName : 'Google(Red)'
}, {
	brandType : 'yellow',
	brandColeCode : '#fcca03',
	brandName : 'Google(Yellow)'
}, {
	brandType : 'red',
	brandColeCode : '#dd4b39',
	brandName : 'Google+'
}, {
	brandType : 'yellow',
	brandColeCode : '#f77f00',
	brandName : 'Grooveshark'
}, {
	brandType : 'green',
	brandColeCode : '#82b548',
	brandName : 'Groupon'
}, {
	brandType : 'red',
	brandColeCode : '#ff6600',
	brandName : 'Hacker-News'
}, {
	brandType : 'blue',
	brandColeCode : '#0085ca',
	brandName : 'HelloWallet'
}, {
	brandType : 'other',
	brandColeCode : '#c7c5e6',
	brandName : 'Heroku(Light)'
}, {
	brandType : 'blue',
	brandColeCode : '#6567a5',
	brandName : 'Heroku(Dark)'
}, {
	brandType : 'blue',
	brandColeCode : '#003366',
	brandName : 'HootSuite'
}, {
	brandType : 'green',
	brandColeCode : '#73ba37',
	brandName : 'Houzz'
}, {
	brandType : 'blue',
	brandColeCode : '#0096d6',
	brandName : 'HP'
}, {
	brandType : 'red',
	brandColeCode : '#ec6231',
	brandName : 'HTML5'
}, {
	brandType : 'green',
	brandColeCode : '#8cc83b',
	brandName : 'Hulu'
}, {
	brandType : 'blue',
	brandColeCode : '#003e6a',
	brandName : 'IBM'
}, {
	brandType : 'yellow',
	brandColeCode : '#ffcc33',
	brandName : 'IKEA'
}, {
	brandType : 'yellow',
	brandColeCode : '#f3ce13',
	brandName : 'IMDb'
}, {
	brandType : 'blue',
	brandColeCode : '#3f729b',
	brandName : 'Instagram'
}, {
	brandType : 'other',
	brandColeCode : '#1c1c1c',
	brandName : 'Instapaper'
}, {
	brandType : 'blue',
	brandColeCode : '#0071c5',
	brandName : 'Intel'
}, {
	brandType : 'blue',
	brandColeCode : '#365ebf',
	brandName : 'Intuit'
}, {
	brandType : 'green',
	brandColeCode : '#76cc1e',
	brandName : 'Kickstarter'
}, {
	brandType : 'red',
	brandColeCode : '#e03500',
	brandName : 'Kippt'
}, {
	brandType : 'green',
	brandColeCode : '#00af81',
	brandName : 'Kodery'
}, {
	brandType : 'red',
	brandColeCode : '#c3000d',
	brandName : 'LastFM'
}, {
	brandType : 'blue',
	brandColeCode : '#0e76a8',
	brandName : 'LinkedIn'
}, {
	brandType : 'red',
	brandColeCode : '#cf0005',
	brandName : 'Livestream'
}, {
	brandType : 'blue',
	brandColeCode : '#576396',
	brandName : 'Lumo'
}, {
	brandType : 'red',
	brandColeCode : '#d82028',
	brandName : 'Makita(Red)'
}, {
	brandType : 'blue',
	brandColeCode : '#29a0b7',
	brandName : 'Makita(Blue)'
}, {
	brandType : 'blue',
	brandColeCode : '#a086d3',
	brandName : 'Mixpanel'
}, {
	brandType : 'red',
	brandColeCode : '#e51937',
	brandName : 'Meetup'
}, {
	brandType : 'red',
	brandColeCode : '#b9070a',
	brandName : 'Netflix'
}, {
	brandType : 'blue',
	brandColeCode : '#183693',
	brandName : 'Nokia'
}, {
	brandType : 'green',
	brandColeCode : '#76b900',
	brandName : 'NVIDIA'
}, {
	brandType : 'red',
	brandColeCode : '#ed812b',
	brandName : 'Odnoklassniki'
}, {
	brandType : 'red',
	brandColeCode : '#cc0f16',
	brandName : 'Opera'
}, {
	brandType : 'red',
	brandColeCode : '#e41f11',
	brandName : 'Path'
}, {
	brandType : 'blue',
	brandColeCode : '#1e477a',
	brandName : 'Paypal(dark)'
}, {
	brandType : 'blue',
	brandColeCode : '#3b7bbf',
	brandName : 'Paypal(Light)'
}, {
	brandType : 'blue',
	brandColeCode : '#0000e6',
	brandName : 'Pinboard'
}, {
	brandType : 'red',
	brandColeCode : '#c8232c',
	brandName : 'Pinterest'
}, {
	brandType : 'blue',
	brandColeCode : '#665cbe',
	brandName : 'PlayStation'
}, {
	brandType : 'red',
	brandColeCode : '#ee4056',
	brandName : 'Pocket'
}, {
	brandType : 'blue',
	brandColeCode : '#318bff',
	brandName : 'Prezi'
}, {
	brandType : 'blue',
	brandColeCode : '#0f71b4',
	brandName : 'Pusha'
}, {
	brandType : 'red',
	brandColeCode : '#a82400',
	brandName : 'Quora'
}, {
	brandType : 'blue',
	brandColeCode : '#66ceff',
	brandName : 'Quote.fm'
}, {
	brandType : 'blue',
	brandColeCode : '#008fd5',
	brandName : 'Rdio'
}, {
	brandType : 'red',
	brandColeCode : '#9c0000',
	brandName : 'Readability'
}, {
	brandType : 'red',
	brandColeCode : '#cc0000',
	brandName : 'Red-Hat'
}, {
	brandType : 'blue',
	brandColeCode : '#cee2f8',
	brandName : 'Reddit(Blue)'
}, {
	brandType : 'red',
	brandColeCode : '#ff4500',
	brandName : 'Reddit(Orange)'
}, {
	brandType : 'green',
	brandColeCode : '#7eb400',
	brandName : 'Resource'
}, {
	brandType : 'blue',
	brandColeCode : '#0ba6ab',
	brandName : 'Rockpack'
}, {
	brandType : 'blue',
	brandColeCode : '#62b0d9',
	brandName : 'Roon'
}, {
	brandType : 'red',
	brandColeCode : '#ee802f',
	brandName : 'RSS'
}, {
	brandType : 'blue',
	brandColeCode : '#1798c1',
	brandName : 'Salesforce'
}, {
	brandType : 'blue',
	brandColeCode : '#0c4da2',
	brandName : 'Samsung'
}, {
	brandType : 'green',
	brandColeCode : '#96bf48',
	brandName : 'Shopify'
}, {
	brandType : 'blue',
	brandColeCode : '#00aff0',
	brandName : 'Skype'
}, {
	brandType : 'red',
	brandColeCode : '#f0503a',
	brandName : 'Smashing Magazine'
}, {
	brandType : 'yellow',
	brandColeCode : '#f47a20',
	brandName : 'Snagajob'
}, {
	brandType : 'blue',
	brandColeCode : '#008ace',
	brandName : 'Softonic'
}, {
	brandType : 'yellow',
	brandColeCode : '#ff7700',
	brandName : 'SoundCloud'
}, {
	brandType : 'red',
	brandColeCode : '#f86960',
	brandName : 'SpaceBox'
}, {
	brandType : 'green',
	brandColeCode : '#81b71a',
	brandName : 'Spotify'
}, {
	brandType : 'yellow',
	brandColeCode : '#fee100',
	brandName : 'Sprint'
}, {
	brandType : 'other',
	brandColeCode : '#121212',
	brandName : 'Suarespace'
}, {
	brandType : 'other',
	brandColeCode : '#ef8236',
	brandName : 'StackOverflow'
}, {
	brandType : 'red',
	brandColeCode : '#cc0000',
	brandName : 'Staple'
}, {
	brandType : 'red',
	brandColeCode : '#d7584f',
	brandName : 'Status Chart'
}, {
	brandType : 'blue',
	brandColeCode : '#008cdd',
	brandName : 'Stripe'
}, {
	brandType : 'blue',
	brandColeCode : '#00afe1',
	brandName : 'StudyBlue'
}, {
	brandType : 'red',
	brandColeCode : '#f74425',
	brandName : 'StumbleUpon'
}, {
	brandType : 'pink',
	brandColeCode : '#ea0a8e',
	brandName : 'T-Mobile'
}, {
	brandType : 'green',
	brandColeCode : '#40a800',
	brandName : 'technorati'
}, {
	brandType : 'red',
	brandColeCode : '#ef4423',
	brandName : 'The Next Web'
}, {
	brandType : 'green',
	brandColeCode : '#5cb868',
	brandName : 'TreeHouse'
}, {
	brandType : 'blue',
	brandColeCode : '#256a92',
	brandName : 'Trello'
}, {
	brandType : 'green',
	brandColeCode : '#5eab1f',
	brandName : 'Trulia'
}, {
	brandType : 'blue',
	brandColeCode : '#34526f',
	brandName : 'Tumblr'
}, {
	brandType : 'blue',
	brandColeCode : '#6441a5',
	brandName : 'Twitch.tv'
}, {
	brandType : 'blue',
	brandColeCode : '#00acee',
	brandName : 'Twitter'
}, {
	brandType : 'green',
	brandColeCode : '#9aca3c',
	brandName : 'TypeKit'
}, {
	brandType : 'yellow',
	brandColeCode : '#ff8700',
	brandName : 'TYPO3'
}, {
	brandType : 'red',
	brandColeCode : '#dd4814',
	brandName : 'Ubentu'
}, {
	brandType : 'blue',
	brandColeCode : '#3388ff',
	brandName : 'Ustream'
}, {
	brandType : 'red',
	brandColeCode : '#ef1d1d',
	brandName : 'Verizon'
}, {
	brandType : 'blue',
	brandColeCode : '#44bbff',
	brandName : 'Vimeo'
}, {
	brandType : 'green',
	brandColeCode : '#00a478',
	brandName : 'Vine'
}, {
	brandType : 'blue',
	brandColeCode : '#06afd8',
	brandName : 'Virb'
}, {
	brandType : 'red',
	brandColeCode : '#cc0000',
	brandName : 'Virgin Media'
}, {
	brandType : 'other',
	brandColeCode : '#45668e',
	brandName : 'VKontakte'
}, {
	brandType : 'blue',
	brandColeCode : '#5b009c',
	brandName : 'Wooga'
}, {
	brandType : 'blue',
	brandColeCode : '#21759b',
	brandName : 'WordPress(Blue)'
}, {
	brandType : 'yellow',
	brandColeCode : '#d54e21',
	brandName : 'WordPress(Orange)'
}, {
	brandType : 'other',
	brandColeCode : '#464646',
	brandName : 'WordPress(Gray)'
}, {
	brandType : 'blue',
	brandColeCode : '#2b88d9',
	brandName : 'Wunderlist'
}, {
	brandType : 'blue',
	brandColeCode : '#9bc848',
	brandName : 'XBOX'
}, {
	brandType : 'green',
	brandColeCode : '#126567',
	brandName : 'Xing'
}, {
	brandType : 'blue',
	brandColeCode : '#720e9e',
	brandName : 'Yahoo!'
}, {
	brandType : 'yellow',
	brandColeCode : '#ffcc00',
	brandName : 'Yandex'
}, {
	brandType : 'red',
	brandColeCode : '#c41200',
	brandName : 'Yelp'
}, {
	brandType : 'red',
	brandColeCode : '#c4302b',
	brandName : 'You Tube'
}, {
	brandType : 'blue',
	brandColeCode : '#5498dc',
	brandName : 'Zalongo'
}, {
	brandType : 'green',
	brandColeCode : '#78a300',
	brandName : 'Greendesk'
}, {
	brandType : 'green',
	brandColeCode : '#9dcc7a',
	brandName : 'Zerply'
}, {
	brandType : 'green',
	brandColeCode : '#5e8b1d',
	brandName : 'Zootool'
}];



for (var j = 0; j < brandList.length; j++) {
	$('#container').append('<div class="item ' + brandList[j].brandType +'" style="background-color:'+ brandList[j].brandColeCode +'">' + brandList[j].brandName +'<span class="color-code">'+ brandList[j].brandColeCode +'</span> </div>');
}


