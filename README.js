#圈X:

hostname = *.easygame2021.com

#羊了个羊
^https://cat-match\.easygame2021.com/sheep/v1/game/map(.*) url script-response-body https://gitlab.com/ioshkj/quantumultx/-/raw/main/vipjs/ylgy.js
#^(https?:\/\/cat-match\.easygame2021\.com\/.+?)map_id\=\d+ url 302 $1map_id=80001

^https:\/\/.+\.easygame2021\.com\/.+ url script-response-body https://gitlab.com/ioshkj/quantumultx/-/raw/main/vipjs/ylgyv.js
