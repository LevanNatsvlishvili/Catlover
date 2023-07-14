const copyToClipboard = (input: string) => {
  navigator.clipboard.writeText(`http://localhost:5173/${input}`);
};

export default copyToClipboard;
