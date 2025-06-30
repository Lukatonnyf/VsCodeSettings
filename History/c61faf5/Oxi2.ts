import { NextResponse } from "next/server";
let users =[
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"}
];


export async function GET(){
  return NextResponse.json(users)
}

export async function POST(request: Request){
  const { name } = await request.json()

  const user = users.find((user) => user.name === name)

  if(user){
    return NextResponse.json({message: "Usuário já existe"}, {status:400})
  }

  users.push({ id: users.length + 1, name});
  return NextResponse.json({message: "Usuário criaddo com sucesso!"})
}

export async function DELETE(request: Request){
  const { id } = await request.json
  const idNumber = Number(id);

  const user = users.find((user) => user.id === idNumber)
}
