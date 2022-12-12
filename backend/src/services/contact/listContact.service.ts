import { AppDataSource } from "../../datasource";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";

const listContactService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.find({
    where: {
      id: id,
    },
    relations: {
      UserContacts: true,
    },
  });


  if (!findUser) {
    throw new AppError(404, "User Não Encontrado");
  }

  return findUser[0].UserContacts;
};

export default listContactService;
