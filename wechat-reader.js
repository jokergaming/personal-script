var body = $response.body;
var obj = JSON.parse(body);

// 修改微信读书付费卡会员信息
obj.data.isVip = true;
obj.data.isVipExpired = false;
obj.data.vipExpireTime = 1915024859000;

$done({body: JSON.stringify(obj)});
