import db from "$lib/db"
export async function GET() {
  const biomes = await db.collection('biomes').find().toArray()
  return {
    status: 200,
    body: { biomes }
  }
}