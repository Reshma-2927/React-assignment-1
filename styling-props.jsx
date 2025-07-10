import React from 'react';

function StatusBadge({ status }) {
  const styles = {
    success: { backgroundColor: 'green', color: 'white' },
    error: { backgroundColor: 'red', color: 'white' },
    warning: { backgroundColor: 'orange', color: 'black' },
  };

  return (
    <div style={styles[status]}>
      Status: {status}
    </div>
  );
}

export default StatusBadge;
