/* Test if Netlify supports Response(ReadableStream) */
exports.handler = async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(Buffer.from("test streaming works!"));
      controller.close();
    }
  });
  return new Response(stream, { headers: { "Content-Type": "text/plain" } });
};
