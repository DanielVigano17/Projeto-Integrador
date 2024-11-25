import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


  export async function createUser( email, nome, senha ) {
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

  export async function usuarioExist( email, senha ) {
    try {
      // Busca o usuário pelo email
      const user = await prisma.usuario.findUnique({
        where: { email },
      });
  
      if (!user) {
        // Usuário não encontrado
        throw new Error("Usuário não encontrado");
      }
  
      // Verifica se a senha corresponde
      if (user.senha !== senha) {
        throw new Error("Senha inválida");
      }

      return user
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
    } finally {
      await prisma.$disconnect();
    }
  }


