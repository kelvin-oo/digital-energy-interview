import { NextResponse } from "next/server";
import axios from "axios";


export async function GET(req, ctx) {
  
    const id = parseInt(ctx.params.id, 10);

    if (isNaN(id) || id < 1 || id > 10) {
        return new NextResponse(JSON.stringify({
            error: 'ID must be an integer between 1 and 10.'
        }), { status: 400 })
    }
    
  try {
    const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
    return new NextResponse(JSON.stringify(response.data), { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while fetching the data.",
      error,
    }), { status: 500 })
  }
}

