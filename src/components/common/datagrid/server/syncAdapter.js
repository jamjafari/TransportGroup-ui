export const syncAdapter = async ({ endpoint, query }) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    throw new Error('Server request failed');
  }

  return response.json();
};
