import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      debug: true, playground: false,
      autoSchemaFile: join(
        process.cwd(),
        'schema.gql',
      )
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
