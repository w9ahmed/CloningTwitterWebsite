app.run(['$templateCache', function($templateCache) {
   'use strict';

  $templateCache.put('app/credits/credits',
    "<div class=\"panel panel-default\"><div class=\"panel-body\" ng-controller=\"AboutsCtrl as credits\"><ul class=\"list-unstyled list-inline\"><li ng-repeat=\"content in credits.contents track by $index\" class=\"text-muted\">{{content}}</li></ul></div></div>"
  );


  $templateCache.put('app/dashboard-profile/dashboard-profile',
    "<div class=\"panel panel-default\" ng-controller=\"DashboardCtrl as dashboard\"><div class=\"panel-body\"><div class=\"dash-feature-container\"><a class=\"dash-feature-img\" href=\"#\"><img src=\"img\\fermer.jpg\"></a></div><div class=\"dashboard-profile\"><div class=\"dash-profile-container\"><a href=\"#\"><div class=\"dash-profile-photo\"></div></a><div class=\"dash-profile-name\"><a href=\"#\"><h5>{{dashboard.content.name}}</h5></a> <a href=\"#\"><small class=\"text-muted\">{{dashboard.content.username}}</small></a></div></div></div><div><ul class=\"list-unstyled list-inline\"><li class=\"text-center\" ng-repeat=\"item in dashboard.content.info\"><a class=\"dash-profile-details\" href=\"#\"><span class=\"text-muted\"><small>{{item.name | uppercase}}</small></span><br><span>{{item.value}}</span></a></li></ul></div><div class=\"bg-info inside-tweet\"><div><textarea class=\"form-control inside-tweet-new-compose\" rows=\"1\" placeholder=\"Compose new Tweet...\"></textarea></div></div></div></div>"
  );


  $templateCache.put('app/direct-messages/direct-messages',
    "<div class=\"modal fade\" id=\"directMessages\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" ng-controller=\"DMCtrl as directmessages\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><h4 class=\"modal-title text-muted\" id=\"myModalLabel\">Direct Messages</h4></div><div class=\"modal-body\"><div class=\"md\"><ul class=\"list-unstyled direct-msgs\"><li ng-repeat=\"message in directmessages.messages\"><div class=\"direct-msg-container\"><div class=\"direct-msg-photo\"></div><div class=\"direct-msg-content\"><div class=\"sender-name\"><a class=\"msg-sender-details\" href=\"#\"><strong>{{message.user}}</strong><small class=\"text-muted\">{{message.username}}</small></a> <small class=\"pull-right\">{{message.time}}</small></div><div class=\"direct-msg-text\">{{message.message}}</div></div></div></li></ul></div></div><div class=\"modal-footer\"><div class=\"text-center\"><span class=\"text-muted\"><small>Tip: you can send a message to anyone who follows you. <a href=\"#\">Learn more</a></small></span></div></div></div></div></div>"
  );


  $templateCache.put('app/navigation/navigation',
    "<div class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div><ul class=\"nav navbar-nav\"><li ng-class=\"{'active': $root.homeTab === true}\"><a href=\"/home\"><span class=\"glyphicon glyphicon-home icon-btn active\"></span>Home</a><div class=\"actives\"></div></li><li ng-class=\"{'active': $root.notiTab === true}\"><a href=\"/notifications\"><span class=\"glyphicon glyphicon-bell icon-btn\"></span>Notifications</a><div></div></li><li data-toggle=\"modal\" data-target=\"#directMessages\"><a href=\"#\"><span class=\"glyphicon glyphicon-envelope icon-btn\"></span>Messages</a><div></div></li><li ng-class=\"{'active': $root.discTab === true}\"><a href=\"/discover\"><span class=\"glyphicon glyphicon-bullhorn icon-btn\"></span>Discover</a><div></div></li></ul></div><div class=\"navbar-text navbar-left mid-icon\"><img class=\"navbar-img\" src=\"img\\favicon.png\"></div><div class=\"navbar-right\"><button type=\"button\" class=\"btn btn-primary navbar-btn\" data-toggle=\"modal\" data-target=\"#composeNewTweet\"><span class=\"glyphicon glyphicon-pencil icon-btn\"></span>Tweet</button></div><div class=\"navbar-right\"><div class=\"navbar-profile\"><div class=\"btn-group\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"img/me-alex-shades.jpg\"></a><ul class=\"dropdown-menu profile-drop\" role=\"menu\"><li class=\"profile-drop-view\"><a href=\"#\"><h5>Ahmed Sami Mohamed</h5><span class=\"text-muted\"><small>View Profile</small></span></a></li><li class=\"divider\"></li><li><a href=\"#\">Lists</a></li><li class=\"divider\"></li><li><a href=\"#\">Help</a></li><li><a href=\"#\">Keyboard shortcuts</a></li><li class=\"divider\"></li><li><a href=\"#\">Settings</a></li><li><a href=\"#\">Sign out</a></li></ul></div></div></div><div class=\"navbar-right search-form\"><div><form class=\"navbar-form hidden-xs\" role=\"search\"><div class=\"row\"><div class=\"\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search Twitter\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button></span></div></div></div></form></div></div></div></div>"
  );


  $templateCache.put('app/new-tweet/new-tweet',
    "<div class=\"modal fade\" id=\"composeNewTweet\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><div class=\"modal-title text-center\"><span>Compose new Tweet</span></div></div><div class=\"modal-body bg-info\"><div class=\"panel panel-default\"><textarea ng-model=\"tweet.tweet\" class=\"form-control new-tweet-input\" rows=\"4\"></textarea></div></div><div class=\"modal-footer bg-info\"><div class=\"pull-left\"><button type=\"button\" class=\"btn btn-default pull-left\"><span class=\"glyphicon glyphicon-camera icon-btn\"></span>Add photo</button> <button type=\"button\" class=\"btn btn-default pull-left\"><span class=\"glyphicon glyphicon-map-marker icon-btn\"></span>Add location</button></div><div class=\"pull-right\"><button ng-click=\"sendTweet(tweet)\" type=\"button\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-pencil icon-btn\"></span>Tweet</button><div class=\"pull-right text-count\"><p class=\"text-muted\">140</p></div></div></div></div></div></div>"
  );


  $templateCache.put('app/suggestions/suggestions',
    "<div class=\"suggestion-container\" ng-repeat=\"suggestion in suggestions.suggestions\"><div class=\"suggestion-photo\"></div><div class=\"suggestion-details\"><button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button> <a class=\"sugg-details\" href=\"#\" data-toggle=\"modal\" data-target=\"#showTweeterProfile\"><strong>{{suggestion.user}}</strong><small class=\"text-muted\">{{suggestion.username}}</small></a> <button type=\"button\" class=\"btn followbtn btn-default\"><span class=\"glyphicon glyphicon-plus icon-btn\"></span> <span>Follow</span> <span style=\"display: none\">Following</span></button></div></div>"
  );


  $templateCache.put('app/tweet-stream/tweet-stream',
    "<div class=\"col-md-6 tweets-view\"><div class=\"panel panel-default\"><div class=\"panel-body\"><div class=\"the-panel-title\"><h4 class=\"text-muted\">Tweets</h4></div><div class=\"stream-view\" ng-controller=\"StreamCtrl as stream\"><ul class=\"list-unstyled\"><li class=\"stream-tweet\" ng-repeat=\"tweet in stream.tweets | orderBy: 'time':true\"><div class=\"tweet-container\"><div class=\"tweeter-photo\"></div><div class=\"tweet-content\"><div class=\"tweeter-name\"><a ng-click=\"setProfile(tweet);\" class=\"tweeter-sender-details\" href=\"#\" data-toggle=\"modal\" data-target=\"#showTweeterProfile\"><strong>{{tweet.user}}</strong><small class=\"text-muted\">{{tweet.username}}</small></a> <small>- <a href=\"#\"><span am-time-ago=\"tweet.time\"></span></a></small></div><div class=\"tweet-text\">{{tweet.tweet}}</div><div class=\"tweet-action\"><ul class=\"list-unstyled list-inline\"><li id=\"reply\"><a href=\"#\"><div><span class=\"glyphicon glyphicon-new-window\"></span></div></a></li><li id=\"retweet\"><a href=\"#\"><div><span class=\"glyphicon glyphicon-retweet\"></span><span class=\"bdg-mrg\">{{tweet.retweets}}</span></div></a></li><li id=\"favorite\"><a href=\"#\"><div><span class=\"glyphicon glyphicon-asterisk\"></span><span class=\"bdg-mrg\">{{tweet.favorites}}</span></div></a></li><li id=\"options\"><a href=\"#\"><div><span class=\"glyphicon glyphicon-minus\"></span></div></a></li></ul></div></div></div></li></ul></div></div></div></div>"
  );


  $templateCache.put('app/tweeter-profile/tweeter-profile',
    "<div class=\"modal fade\" id=\"showTweeterProfile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"showTweeterProfile\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><h4 class=\"modal-title text-muted text-center\" id=\"myModalLabel\">Profile summary</h4></div><div class=\"modal-body\"><div class=\"feature-modal-photo\"></div><div class=\"profile-modal-details-container\"><div class=\"profile-photo-modal\"></div><div class=\"profile-details-modal\"><ul class=\"list-unstyled list-inline\"><li class=\"text-center\"><a class=\"dash-profile-details\" href=\"#\"><span class=\"text-muted\"><small>TWEETS</small></span><br><span>46.9K</span></a></li><li class=\"text-center\"><a class=\"dash-profile-details\" href=\"#\"><span class=\"text-muted\"><small>FOLLOWING</small></span><br><span>287</span></a></li><li class=\"text-center\"><a class=\"dash-profile-details\" href=\"#\"><span class=\"text-muted\"><small>FOLLOWERS</small></span><br><span>289</span></a></li></ul></div></div><div class=\"dash-profile-name\"><a href=\"#\"><h5>{{$root.currentProfile.user}}</h5></a> <a href=\"#\"><small class=\"text-muted\">{{$root.currentProfile.username}}</small></a></div><div>Description</div></div><div class=\"modal-footer\"><a class=\"pull-left\" href=\"#\"><strong>Go to full profile</strong></a></div></div></div></div>"
  );


  $templateCache.put('app/wwtrends/wwtrends',
    "<div class=\"panel panel-default\"><div class=\"panel-body\"><div><span><h4 class=\"text-muted\">Worldwide Trends<small>- <a href=\"#\">Change</a></small></h4></span></div><div ng-controller=\"WWTrendsCtrl as wwtrends\"><ul class=\"list-unstyled\"><li ng-repeat=\"trend in wwtrends.trends track by $index\"><a href=\"#\">{{trend}}</a></li></ul></div></div></div>"
  );
 }]);