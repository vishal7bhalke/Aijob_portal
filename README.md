AI Job Portal — Quick Specs

Project Setup and Info
1. How to Setup
What you need:

Node.js installed

MongoDB (you can use a free Atlas cluster)

Your API keys ready (like OpenAI key)

Backend:

Clone the repo and go to backend folder:


git clone https://github.com/yourusername/yourproject.git
cd yourproject/backend
Install packages:


npm install


Create a .env file in the backend folder and add these:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=someSecretKey
VITE_OPENAI_API_KEY=your_openai_api_key
PORT=5000
Start the backend server:


npm start
Your backend should now run at http://localhost:5000.

Frontend:

Move to frontend folder:
cd ../frontend
Install packages:

npm install
If needed, create .env file here with any frontend keys.

Run frontend:


npm run dev
Open http://localhost:3000 in your browser.

2. How We Use AI (and How Prompts Work)
We use OpenAI API to do things like:

Understanding and generating text

Answering questions

Helping automate stuff

Prompt tips:

Be clear and short with instructions

Tell AI exactly what you want it to do

Give examples if needed

Test and tweak your prompt to get better results

Example:

Summarize this text in two sentences: [your text here]
3. API Endpoints (Basic)
POST /api/auth/register — Register new user (send username, email, password)

POST /api/auth/login — Login user (send email, password)

GET /api/items — Get list of items

POST /api/items — Add new item (send item data)

Note: Some routes need you to send an authorization token.

4. How The Code is Organized
Backend:

server.js is where the app starts

MongoDB connection setup in config/db.js

Routes are in routes/ folder (like auth routes)

Environment variables in .env file

Frontend:

Made with React (using Vite)

Components live in src/components/

API calls handled in src/api/

State handled with React state or context (your choice)

Styles with CSS or any styling library you use

