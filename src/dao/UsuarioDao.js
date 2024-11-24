import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioDao {
  async create({ email, nome, senha }) {
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
}

export default UsuarioDao;

