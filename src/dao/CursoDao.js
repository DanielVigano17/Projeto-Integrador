import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CursoDao {
  async create({ banner, nome, desc }) {
    try{
      const curso = await prisma.curso.create({
        data: {
            nome : nome,
            banner : banner,
            desc : desc,
        },
      });
      
      return curso; // Retorna o usuário criado
    }catch(erro){
      console.log(erro.message)
    }
  }
}

export default CursoDao;

