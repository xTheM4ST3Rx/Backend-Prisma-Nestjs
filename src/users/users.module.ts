import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuditMiddleWare } from 'src/middlewares/auth';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})

export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
    //Aplicado Middlewares em todas as rotas de Deletes
    consumer.apply(AuditMiddleWare).forRoutes({
      path:'users/*', 
      method: RequestMethod.DELETE
    })

  }
}