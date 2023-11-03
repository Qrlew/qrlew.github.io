export async function POST(request: Request) {
  const response = await fetch('https://qrlew-zsyaspsckq-od.a.run.app/dot', {
    method: 'POST',
    body: '{"dataset": {"tables":[{"name":"table_1","path":["schema","table_1"],"schema":{"fields":[{"name":"a","data_type":"Float"},{"name":"b","data_type":"Integer"}]},"size":10000}]}, "query": "SELECT * FROM table_1", "dark_mode": false}',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
      throw new Error('Failed to fetch data');
  }
  const data = await response.json()
  return Response.json( data )
}

// export const dynamic = "force-static";