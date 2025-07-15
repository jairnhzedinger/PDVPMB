const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const initChat = require('./chat');

const INVITE_CODE = process.env.INVITE_CODE || 'SECRET';
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
initChat(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'stream-secret', resave: false, saveUninitialized: true }));

function requireInvite(req, res, next) {
  if (req.session.allowed) return next();
  res.redirect('/login.html');
}

app.post('/login', (req, res) => {
  const { code, username, email } = req.body;
  if (code === INVITE_CODE) {
    req.session.allowed = true;
    req.session.username = username || 'Anon';
    req.session.email = email || '';
    res.redirect(`/?u=${encodeURIComponent(username)}`);
  } else {
    res.redirect('/login.html?error=1');
  }
});

app.get('/', requireInvite, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
