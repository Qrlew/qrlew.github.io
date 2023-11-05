
export async function POST(request: Request) {
  const response = await fetch('https://qrlew-zsyaspsckq-od.a.run.app/dot', {
    method: 'POST',
    body: await request.text(),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
      throw new Error('Failed to fetch data');
  }
  return response
}

// export const dynamic = "force-static";