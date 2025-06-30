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
  const { id } = await request.json()
  const idNumber = Number(id);

  const user = users.find((user) => user.id === idNumber)

  if(!user){
    return NextResponse.json(
      {message: "Usuário não encontrado!"},
      {status: 404}
    );
  }

  users = users.filter((user) => user.id !== idNumber);
  return NextResponse.json({message: "Usuário deletado com sucesso!"})

}

export async function PUT(request: Request){
  const { id, name } = await request.json()

  const idNumber = Number(id)

  const user = users.find((user) => user.id === idNumber)

  if(!user){
    return NextResponse.json(
      {message: "Usuário nao encontrado"},
      {status: 404}
    )
  };

  user.name = name;

  return NextResponse.json({message: "Usuário atualizado com sucesso!"})
}

// CRIAR O BANCO DE DADOS E CONECTAR COM O CÓDIGO
