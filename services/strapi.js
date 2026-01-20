const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL.replace("/api", "");

export async function fetchFromStrapi(endpoint) {
  const res = await fetch(`${API_URL}/api/${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Strapi fetch failed");
  }

  const json = await res.json();

  // Normalize media URLs
  if (json?.data) {
    json.data = json.data.map((item) => {
      if (item.file?.url && item.file.url.startsWith("/")) {
        item.file.url = `${API_URL}${item.file.url}`;
      }
      return item;
    });
  }

  return json;
}
