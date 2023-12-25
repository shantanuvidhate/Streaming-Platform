# T Stream Application
T Stream is a web application developed using Next.js that allows users to watch the trailers of the latest movies.

## Technologies Used
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)
- [React Hook Form](https://react-hook-form.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## deployement

[Click here](https://t-stream.vercel.app) to visit deployement.


## Getting Started
Follow the instructions below to get the T Stream application up and running on your local machine.

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shantanuvidhate/streaming-platform.git
   ```
2. Create .env file in root directory with
```bash
# MongoDB URL
DATABASE_URL=<mongodb connection string>

# JWT Sercet
NEXTAUTH_JWT_SECRET=NEXT-JWT-SECRET

# Next Auth Secret
# RUn the following command for NEXTAUTH_SECRET
# $ openssl rand -base64 32
NEXTAUTH_SECRET=NEXT-SECRET
```
3. Install the dependency
```bash
npm install
```
4. run the project
```bash
npm run dev
```

## License

[MIT](https://github.com/shantanuvidhate/streaming-platform/blob/main/LICENSE)
