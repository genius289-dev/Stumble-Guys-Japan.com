const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Mock database for users and roles
let users = [];
let roles = [
  { id: 1, name: 'Role 1', price: 5 },
  { id: 2, name: 'Role 2', price: 10 }
];

// API to get available roles
app.get('/api/roles', (req, res) => {
  res.json(roles);
});

// API to handle role purchase (mocked)
app.post('/api/purchase', (req, res) => {
  const { userId, roleId } = req.body;
  
  // Mock the purchase logic (in reality, you'd check the payment, etc.)
  const user = users.find(u => u.id === userId);
  if (user) {
    user.roles.push(roleId);
    res.status(200).json({ message: 'Role purchased successfully!' });
  } else {
    res.status(400).json({ message: 'User not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

function previewImage() {
  const file = document.getElementById('fileInput').files[0];
  const reader = new FileReader();
  
  reader.onload = function(event) {
      const imgElement = document.getElementById('uploadedImage');
      imgElement.src = event.target.result;
      imgElement.style.display = "block";  // Show the image after it's uploaded
  };
  
  if (file) {
      reader.readAsDataURL(file);
  }
}

