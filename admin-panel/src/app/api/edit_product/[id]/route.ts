import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

interface URLParams {
  params: {
    id: string; // Expecting an 'id' parameter in the URL
  };
}
export async function PUT(request: NextRequest, URLParams: URLParams) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, category, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, {
      name,
      category,
      price
    });

    await connectMongoDB();

    return NextResponse.json({ msg: "Upload Successfully", data });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something Went Wrong"
      },
      { status: 400 }
    );
  }
}
