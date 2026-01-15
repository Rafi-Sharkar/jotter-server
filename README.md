To run this project and get APIs in swagger follow this steps
```
0. git clone https://github.com/Rafi-Sharkar/jotter-server.git
1. pnpm i [if pnpm is installed]
2. docker compose --profile dev up -d --build
3. rename [.env.example => .env]
4. pnpm dev
5. http://localhost:5000/docs   [To show Swagger APIs]

```

In this project i user my SMPT and Cloudinary is limited