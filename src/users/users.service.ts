import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {

    axios
    .get(`https://viacep.com.br/ws/${data.zipcode}/json/`)
    .then(res => {
      //console.log(`statusCode: ${res.status}`)
      //console.log(res)

          return this.prisma.user.create({
            data:{
              name: data.name,
              birthdate: data.birthdate,
              document: data.document,
              acceptedTerms: data.acceptedTerms,
              zipcode: data.zipcode,
              street: res.data.logradouro || null,
              neighborhood: res.data.bairro || null,
              city: res.data.localidade || null,
              state: res.data.uf || null,
              createdAt: "2022-03-30T12:19:10.124Z",
              updatedAt: "2022-03-30T12:19:10.124Z"
            }
          });

    })
    .catch(error => {
      console.error(error)
    })


  }




  
  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where:{ id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where:{ id },
      data: updateUserDto
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where:{ id },
    });
  }

}