import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Valid email required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Form submitted!');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <span>{errors.name}</span><br />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <span>{errors.email}</span><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
