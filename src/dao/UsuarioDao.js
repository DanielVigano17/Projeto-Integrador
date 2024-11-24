import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


  async function createUser( email, nome, senha ) {
    try{
      const user = await prisma.usuario.create({
        data: {
          email: email,
          nome: nome,
          senha: senha,
        },
      });

      return user; // Retorna o usuário criado
    }catch(erro){
      console.log(erro.message)
    }
  }


export default createUser;

