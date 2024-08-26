import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET() {
    return Response.json([ { "title": "XPerience bootcamp - TDD", "description": "Bootcamp about Story slicing, TDD and CI" },
        { "title": "XPerience bootcamp - Secure coding", "description": "Bootcamp about secure coding practices" }
    ])
  }