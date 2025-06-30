import { NextResponse } from "next/server";
let users =[
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"}
];


export async function GET(){
  return NextResponse.json(users)
}
