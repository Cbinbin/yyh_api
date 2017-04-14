# yyh_api


* [登录](#登录)
    * [授权登录](#授权登录)


## 登录
### 授权登录
```js
  GET    http://localhost:?/wechat/login?code=${code}&iv=${iv}&encryptedData=${encryptedData}&youyuan=${youyuan}
```
```js
{
  iv: ${iv},        //require!
  code: ${code},        //require!
  encryptedData: ${encryptedData},        //require!
  youyuan: ${youyuan}        //require!
}
```
返回=>
```js
{
  token: "xxx"
}
```