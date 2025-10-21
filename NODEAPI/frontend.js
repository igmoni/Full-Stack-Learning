export const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "mon_1" }),
  headers: {
    "Content-Type": "application/json",
  },
});
