import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkLogin(req, res, next) {
  try {
    // Obtém o cookie do email
    const email = req.cookies?.usuarioEmail;

    if (!email) {
      return res.redirect("/login");
    }

    // Busca o usuário no banco de dados
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
        return res.redirect("/login");
    }

    // Adiciona o usuário ao objeto de requisição para uso futuro
    req.user = user;
    next(); // Usuário autenticado, prosseguir para o próximo middleware
  } catch (error) {
    console.error('Erro no middleware de autenticação:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  } finally {
    await prisma.$disconnect();
  }
}

export default checkLogin;
