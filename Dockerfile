# 使用 Node 官方镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制依赖文件并安装
COPY package*.json ./
RUN npm install

# 复制其余源码
COPY . .

# 如果你的 app 是 server.js 或 app.js，请保持一致
EXPOSE 3000
CMD ["node", "calculator.js"]

