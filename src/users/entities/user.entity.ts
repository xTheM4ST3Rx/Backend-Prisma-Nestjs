import { Prisma } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput{
    id?: string;
    name: string;
    birthdate: number;
    document: string;
    acceptedTerms: boolean;
}


