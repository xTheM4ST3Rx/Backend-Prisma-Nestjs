import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    //return this.prisma.user.create({data: { name: 'Bob', email: 'bob@prisma.io' }});
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findOne({});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}


/*

create(createUserDto: CreateUserDto) {
  const user = new this.userModel(createUserDto)
  return user.save();
}


findAll() {
  return this.userModel.find();
}


findOne(id: string) {
  return this.userModel.findById(id);
}



update(id: string, updateUserDto: UpdateUserDto) {
  return this.userModel.findByIdAndUpdate({
    _id:id
  },
  {
    $set: updateUserDto
  },
  {
    new: true
  });
}

remove(id: string) {
  return this.userModel.deleteOne({_id:id}).exec();
}
}

*/