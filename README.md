# Express 示例项目

一个使用 Express 5 构建的最小 Node.js 示例，包含欢迎页、健康检查和 JSON 回显接口。

## 开始使用

```bash
npm install
npm start
```

服务器默认运行在 <http://localhost:3000>。可通过 `PORT` 环境变量更改端口：

```bash
PORT=4000 npm start
```

## 示例接口

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| `GET` | `/` | 返回欢迎信息 |
| `GET` | `/api/health` | 健康检查 |
| `POST` | `/api/echo` | 回显 JSON 请求体 |

`POST /api/echo` 示例：

```bash
curl -X POST http://localhost:3000/api/echo \
  -H 'Content-Type: application/json' \
  -d '{"message":"hello"}'
```

未知路径会返回 `404` 和 JSON 错误信息。