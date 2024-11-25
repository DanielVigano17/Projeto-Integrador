import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


  async function hashPassword(plainPassword) {
      const saltRounds = 10; // Define o custo do hash (mais alto = mais seguro, mas mais lento)
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      return hashedPassword;
  }

  export async function createUser( email, nome, senha ) {
    const hashedPassword = await bcrypt.hash(senha, 10);
    try{
      const user = await prisma.usuario.create({
        data: {
          email: email,
          nome: nome,
          senha: hashedPassword,
        },
      });

      return user; // Retorna o usuário criado
    }catch(erro){
      console.log(erro.message)
    }
  }

  async function verifyPassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch; // Retorna true se as senhas coincidem, caso contrário, false
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
  
      const isValidPassword = await verifyPassword(senha, user.senha);
      // Verifica se a senha corresponde
      if (!isValidPassword) {
        throw new Error("Senha inválida");
      }

      return user
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
    } finally {
      await prisma.$disconnect();
    }
  }


