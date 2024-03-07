const status = (request, response) => {
  response.status(200).json({ text: 'testing' });
};

export default status;
